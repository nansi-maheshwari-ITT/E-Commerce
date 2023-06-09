import { useSelector, useDispatch } from "react-redux";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import {
  CardContainer,
  CardDiv,
  CartEmptyMessage,
  AddToCartButton,
  CloseIcon,
  IconContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
  WishlistHeading,
} from "./WishlistStyle";
import { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { saveCartItems, saveWishlistItems } from "../../Redux/Actions";
import { infoDataType } from "../Home/HomeInterface";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Notification from "../../Components/Notification";

export const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setNotification("");
    }, 3000);
  });

  const addItemToCart = (product: infoDataType) => {
    const cartItemIndex = findCartItemIndex(product);
    if (cartItemIndex === -1) {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      dispatch(saveCartItems(updatedCartItems));
    } else {
      const newCartItem = {
        ...cartItems[cartItemIndex],
        quantity: cartItems[cartItemIndex].quantity + 1,
      };
      const updatedCartItems = [
        ...cartItems.slice(0, cartItemIndex),
        newCartItem,
        ...cartItems.slice(cartItemIndex + 1),
      ];
      dispatch(saveCartItems(updatedCartItems));
    }
    removeItemFromWishlist(product.id);
    setNotification("Product Added To Cart");
  };

  const findCartItemIndex = (product: infoDataType) => {
    return cartItems?.findIndex((item: infoDataType) => item.id === product.id);
  };

  const removeItemFromWishlist = (productId: number) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== productId
    );
    dispatch(saveWishlistItems(updatedWishlist));
    setNotification("Product removed from wishlist");
  };

  return (
    <div>
      {notification && <Notification text={notification}></Notification>}
      <WishlistHeading>My Wishlist ({wishlistItems.length})</WishlistHeading>
      <CardDiv>
        {wishlistItems.length === 0 ? (
          <CartEmptyMessage data-testid="wishlistEmptyMessage">
            <p>Your wishlist is empty</p>
          </CartEmptyMessage>
        ) : (
          <>
            {wishlistItems.map((product) => (
              <CardContainer key={product.id}>
                <IconContainer
                  onClick={() => removeItemFromWishlist(product.id)}
                  data-testid={`removeButton-${product.id}`}
                >
                  <CloseIcon icon={faTimes as IconProp} />
                </IconContainer>
                <ProductImage src={product.imageurl} alt={product.name} />
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <AddToCartButton
                  onClick={() => {
                    addItemToCart(product);
                  }}
                  data-testid={`addToCartButton-${product.id}`}
                >
                  Add to cart
                </AddToCartButton>
              </CardContainer>
            ))}
          </>
        )}
      </CardDiv>
    </div>
  );
};
