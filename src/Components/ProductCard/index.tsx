import React, { useEffect, useState } from "react";
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import VerificationIcon from "../../Assets/Images/VerificationIcon.jpg";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "./ProductCardPropsInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faSolidHeart,
  faCartShopping as faSolidCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  ViewButton,
  Card,
  Image,
  Description,
  Price,
  Rating,
  Star,
  ButtonGroup,
  RatingText,
} from "./ProductCardStyle";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import { useSelector } from "react-redux";
import { infoDataType } from "../../Screens/Home/HomeInterface";
import { useDispatch } from "react-redux";
import { saveCartItems, saveWishlistItems } from "../../Redux/Actions";
import {
  updateCartDataInFirebase,
  updateWishlistDataInFirebase,
} from "../../Services/Services";
import Notification from "../Notification";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] = useState("");
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const generateRandomReviews = (): number => {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  };
  const generateDiscount = (): number => {
    return Math.floor(Math.random() * (80 - 10 + 1));
  };
  const originalPrice: number = Math.floor(
    product.price / (1 - generateDiscount() / 100)
  );
  const naviagateToProductDetailPage = (productId: number) => {
    navigate(`/product/${product.category}/${product.id}`);
  };

  useEffect(() => {
    isItemInWishlist();
  }, []);

  const isItemInWishlist = () => {
    const wishlistItemIndex = wishlistItems?.findIndex(
      (item: infoDataType) => item.id === product.id
    );
    if (wishlistItemIndex != -1) {
      setIsWishlisted(true);
    }
  };

  const handleWishlistIconClick = () => {
    if (email) {
      {
        isWishlisted ? removeItemFromWishlist() : addItemInWishlist();
      }
    } else {
      navigate("/loginOrSignup");
    }
  };

  const removeItemFromWishlist = () => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== product.id
    );
    dispatch(saveWishlistItems(updatedWishlist));
    if (email) {
      updateWishlistDataInFirebase(email, updatedWishlist);
    }
    setNotificationMessage("Item removed from wishlist");
    setTimeout(() => {
      setNotificationMessage("");
    }, 3000);
    setIsWishlisted(false);
  };

  const addItemInWishlist = () => {
    const updatedwishlistItem = [...wishlistItems, { ...product }];
    dispatch(saveWishlistItems(updatedwishlistItem));
    if (email) {
      updateWishlistDataInFirebase(email, updatedwishlistItem);
    }
    setIsWishlisted(true);
    setNotificationMessage("Item added to wishlist");
    setTimeout(() => {
      setNotificationMessage("");
    }, 3000);
  };

  const addToCart = () => {
    if (email) {
      setNotificationMessage("Item added to cart");
      setTimeout(() => {
        setNotificationMessage("");
      }, 3000);
      const itemIndex = cartItems?.findIndex(
        (item: infoDataType) => item.id === product.id
      );
      if (itemIndex == -1) {
        const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        dispatch(saveCartItems(updatedCartItems));
        updateCartDataInFirebase(email, updatedCartItems);
      } else {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);
        const updatedItem = {
          ...cartItems[itemIndex],
          quantity: cartItems[itemIndex].quantity + 1,
        };
        const updatedCartItems = [
          ...cartItems.slice(0, itemIndex),
          updatedItem,
          ...cartItems.slice(itemIndex + 1),
        ];
        dispatch(saveCartItems(updatedCartItems));
        updateCartDataInFirebase(email, updatedCartItems);
      }
    } else {
      navigate("/loginOrSignup");
    }
  };
  return (
    <Card key={product.id}>
      {notificationMessage && (
        <Notification text={notificationMessage}></Notification>
      )}
      <div className="icon-container">
        <span
          className="material-symbols-outlined cart-icon"
          onClick={addToCart}
          data-testid={`addToCartIcon-${product.id}`}
        >
          shopping_cart
        </span>
        <FontAwesomeIcon
          className="wishlist-icon"
          icon={
            isWishlisted ? (faSolidHeart as IconProp) : (faHeart as IconProp)
          }
          onClick={handleWishlistIconClick}
          data-testid={`addToWishlistIcon-${product.id}`}
        />
      </div>
      <Image
        src={product.imageurl}
        alt={product.description}
        onClick={() => naviagateToProductDetailPage(product.id)}
        data-testid="product-image"
      />
      <Description>{product.description}</Description>
      <Rating>
        <RatingText>
          <Star icon={faStar as IconProp} /> {product.rating} |{" "}
          <img src={VerificationIcon}></img>{" "}
          <span> {generateRandomReviews()} Reviews</span>
        </RatingText>
      </Rating>
      <Price>
        Rs.{product.price} {"  "}
        <span className="original-price">
          {"   "}Rs.{originalPrice}
        </span>
        <span className="discount"> ({generateDiscount()}% off)</span>
      </Price>
      <ButtonGroup>
        <ViewButton
          onClick={() => {
            naviagateToProductDetailPage(product.id);
          }}
        >
          View
        </ViewButton>
      </ButtonGroup>
    </Card>
  );
};
