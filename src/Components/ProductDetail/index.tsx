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
import {
  updateCartDataInFirebase,
  updateWishlistDataInFirebase,
} from "../../Services/Services";
import { ComboOffer,DealsText,Discounttext,DescriptionText,SeeAllProducts} from "./Constant";

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
  const [itemQuantity, setItemQuantity] = useState<number>(1);

  useEffect(() => {
    isItemInWishlist();
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }, []);

  const isItemInWishlist = () => {
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
      return itemIndex;
    }
    return itemIndex;
  };

  const addToCart = (product: infoDataType) => {
    if (!emailId) {
      navigate("/loginOrSignup");
    } else {
      const itemIndex = itemExists(cartItems, product);
      if (itemIndex == -1) {
        const updatedCartItems = [
          ...cartItems,
          { ...product, quantity: itemQuantity },
        ];
        dispatch(saveCartItems(updatedCartItems));
        updateCartDataInFirebase(emailId, updatedCartItems);
        setNotification("Product added To Cart");
      } else {
        if (cartItems[itemIndex].quantity + itemQuantity <= 15) {
          const updatedItem = {
            ...cartItems[itemIndex],
            quantity: cartItems[itemIndex].quantity + itemQuantity,
          };
          const updatedCartItems = [
            ...cartItems.slice(0, itemIndex),
            updatedItem,
            ...cartItems.slice(itemIndex + 1),
          ];
          dispatch(saveCartItems(updatedCartItems));
          updateCartDataInFirebase(emailId, updatedCartItems);
          setNotification(" Added To cart");
          setTimeout(() => {
            setNotification("");
          }, 2000);
        } else {
          setNotification("Reached Max quantity");
          setTimeout(() => {
            setNotification("");
          }, 2000);
        }
      }
    }
  };

  const addToWishlist = (product: infoDataType) => {
    if (!emailId) {
      navigate("/loginOrSignup");
    } else {
      {
        inWishlist
          ? removeItemFromWishlist(product)
          : addItemInWishlist(product);
      }
    }
  };

  const removeItemFromWishlist = (product: infoDataType) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== product.id
    );
    dispatch(saveWishlistItems(updatedWishlist));
    if (emailId) {
      updateWishlistDataInFirebase(emailId, updatedWishlist);
    }
    setInWishlist(false);
    setNotification("Removed From Wishlist");
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  const addItemInWishlist = (product: infoDataType) => {
    const updatedwishlistItem = [...wishlistItems, { ...product }];
    dispatch(saveWishlistItems(updatedwishlistItem));
    if (emailId) {
      updateWishlistDataInFirebase(emailId, updatedwishlistItem);
    }
    setInWishlist(true);
    setNotification("Added To Wishlist");
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  const setQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(event.target.value);
    setItemQuantity(quantity);
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
        <p className="product-offer">{Discounttext}</p>
        <ProductPrice>{`Price: Rs.${productDetail?.price}`}</ProductPrice>
        <p>{DescriptionText}</p>
        <div className="quantity-selection-bar">
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            name="quantity"
            onChange={(event) => setQuantity(event)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div>
          <AddToCartButton
            className={inCart == true ? "inCart" : ""}
            onClick={() => {
              {
                productDetail && addToCart(productDetail);
              }
            }}
          >
            {inCart == true ? "Added To Cart" : "Add To Cart"}
          </AddToCartButton>
          <WishlistButton
            onClick={() => {
              {
                productDetail && addToWishlist(productDetail);
              }
            }}
          >
            {inWishlist == true ? "Remove from Wishlist" : "Add To wishlist"}
          </WishlistButton>
        </div>
        <OfferWrapper>
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <img src={OfferIcon} width="18" height="18" />
              <span className="u8dYXW">{ComboOffer}</span>
              <span>{DealsText}</span>
              <a>{SeeAllProducts}</a>

              <span>T&amp;C</span>
            </li>
          ))}
        </OfferWrapper>
      </ProductInfoWrapper>
    </DetailedProductWrapper>
  );
};

export default ProductDetails;
