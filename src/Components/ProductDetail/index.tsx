import { useSelector } from "react-redux";
import {
  infoDataType,
  ProductDetailType,
} from "../../Screens/Home/HomeInterface";
import { useNavigate, useParams } from "react-router-dom";
import OfferIcon from "../../Assets/Images/OfferIcon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  DetailedProductWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  WishlistButton,
  AddToCartButton,
  OfferWrapper,
  RatingButton,
} from "./ProductDetailStyle";
import { cartItemType } from "../../Screens/CartScreen/CartScreenInterface";
import { useDispatch } from "react-redux";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import { useState, useEffect } from "react";
import Notification from "../Notification";
import { saveCartItems, saveWishlistItems } from "../../Redux/Actions";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id ?? "");
  const productDetail = useSelector((state: ProductDetailType) =>
    state.productDetails.find((product) => product.id === productId)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  const emailId = localStorage.getItem("email");
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    itemIsInCart();
    itemIsInWishlist();
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }, []);

  const itemIsInCart = () => {
    const cartItemIndex = cartItems?.findIndex(
      (item: infoDataType) => item.id === productId
    );
    if (cartItemIndex != -1) {
      setInCart(true);
    }
  };

  const itemIsInWishlist = () => {
    const wishlistItemIndex = wishlistItems?.findIndex(
      (item: infoDataType) => item.id === productId
    );
    if (wishlistItemIndex != -1) {
      setInWishlist(true);
    }
  };

  const itemExists = (
    item: infoDataType[] | cartItemType[],
    product: infoDataType
  ) => {
    const itemIndex = item?.findIndex(
      (item: infoDataType) => item.id === product.id
    );
    if (itemIndex === -1) {
      return false;
    }
    return true;
  };

  const addToCart = (product: infoDataType) => {
    if (!emailId) {
      navigate("/login");
    } else {
      if (!itemExists(cartItems, product)) {
        const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        dispatch(saveCartItems(updatedCartItems));
        setInCart(true);
        setNotification("Product added To Cart");
      }
    }
  };

  const addToWishlist = (product: infoDataType) => {
    if (!emailId) {
      navigate("/login");
    } else {
      if (!itemExists(wishlistItems, product)) {
        const updatedwishlistItem = [...wishlistItems, { ...product }];
        dispatch(saveWishlistItems(updatedwishlistItem));
        setInWishlist(true);
        setNotification("Product added To Wishlist");
      }
    }
  };

  return (
    <DetailedProductWrapper>
      {notification && <Notification text={notification}></Notification>}
      <ProductImage src={productDetail?.imageurl} alt="product image" />
      <ProductInfoWrapper>
        <ProductName data-testid="product-name">
          {productDetail?.description}
        </ProductName>
        <RatingButton>
          {productDetail?.rating}
          <FontAwesomeIcon icon={faStar as IconProp} />
        </RatingButton>
        <p className="product-offer">30% off Only for today</p>
        <ProductPrice>{`Price: ₹${productDetail?.price}`}</ProductPrice>
        <p>Detailed description goes here...</p>

        <div>
          <AddToCartButton
            className={inCart == true ? "inCart" : ""}
            onClick={() => {
              if (productDetail) {
                addToCart(productDetail);
              }
            }}
          >
            {inCart == true ? "Added To Cart" : "Add To Cart"}
          </AddToCartButton>
          <WishlistButton
            className={inWishlist == true ? "Wishlisted" : ""}
            onClick={() => {
              if (productDetail) {
                addToWishlist(productDetail);
              }
            }}
          >
            {inWishlist == true ? "Wishlisted" : "Add To wishlist"}
          </WishlistButton>
        </div>
        <OfferWrapper>
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <img src={OfferIcon} width="18" height="18" />
              <span className="u8dYXW">Combo Offer</span>
              <span>Buy 3-4 items save 5%; Buy 5 or more save 7%</span>
              <a>See all products</a>

              <span>T&amp;C</span>
            </li>
          ))}
        </OfferWrapper>
      </ProductInfoWrapper>
    </DetailedProductWrapper>
  );
};

export default ProductDetails;
