import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { CardProps } from "./CardPropsInterface";
import { infoDataType } from "../../Screens/Home/HomeInterface";
import { db } from "../../Firebase";
import {
  collection,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { UserStatusInterface } from "../Navbar/NavbarInterface";
import { useState } from "react";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { saveCartItems, saveWishlistItems } from "../../Redux/Actions";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import { Card, Image, Description, Price, Rating, Star, ButtonGroup, AddToCartButton, WishlistButton } from "./CardStyle";


export const CardComponent: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailId = localStorage.getItem("email");
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  const [iswishlisted, setIswishlisted] = useState(false);

  const addToCart = (product: infoDataType) => {
    if (!emailId) {
      navigate("/login");
    } else {
      const cartItemIndex = cartItems?.findIndex(
        (item: infoDataType) => item.id === product.id
      );
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
        console.log(
          `Item ${product.id} quantity increased in ${emailId}'s cart`
        );
      }
    }
  };

  const addToWishlist = (product: infoDataType) => {
    if (!emailId) {
      navigate("/login");
    } else {
      const wishlistItemIndex = wishlistItems?.findIndex(
        (item: infoDataType) => item.id === product.id
      );
      console.log(wishlistItems);
      if (wishlistItemIndex === -1) {
        const updatedwishlistItem = [...wishlistItems, { ...product }];
        dispatch(saveWishlistItems(updatedwishlistItem));
      } else {
        setIswishlisted(true);
      }
    }
  };
  return (
    <Card key={product.id}>
      <Image
        src={product.imageurl}
        alt={product.description}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <Description>{product.description}</Description>

      <Rating>
        <div>
          {" "}
          <Star icon={faStar} />
          <span>{product.rating}</span>
        </div>

        <Price>₹{product.price}</Price>
      </Rating>
      <ButtonGroup>
        <AddToCartButton onClick={() => addToCart(product)}>
          Add to Cart
        </AddToCartButton>
        <WishlistButton
          className={iswishlisted == true ? "Wishlisted" : ""}
          onClick={() => addToWishlist(product)}
        >
          {iswishlisted == true ? "Wishlisted" : "Add To wishlist"}
        </WishlistButton>
      </ButtonGroup>
    </Card>
  );
};
