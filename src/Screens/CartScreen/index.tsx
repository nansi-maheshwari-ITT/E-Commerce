import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserStatusInterface } from "../../Components/Navbar/NavbarInterface";
import { db } from "../../Firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { infoDataType } from "../Home/HomeInterface";
import {
  CartPageContainer,
  CartItemsContainer,
  CartSummaryContainer,
  CartSummaryTitle,
  CartSummaryItem,
  CartTotalPrice,
  CartEmptyMessage,
} from './CartScreenStyle';
import { CartCard } from "../../Components/CartCard";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { saveCartItems } from "../../Redux/Actions";


export const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const discountedPrice = Math.floor(getTotalPrice() * 0.1);

  let deliveryCharge;
  if (getTotalPrice() > 500) {
    deliveryCharge = 0;
  } else {
    deliveryCharge = 50;
  }
  const finalPrice = getTotalPrice() + deliveryCharge - discountedPrice;

  const removeItemFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    dispatch(saveCartItems(updatedCartItems));
  };
  const increaseQuantity = (productQuantity: number, productId: number) => {
    const newQuantity = productQuantity + 1;
    const itemIndex = cartItems.findIndex((item) => item.id === productId);
    const updatedItem = { ...cartItems[itemIndex], quantity: newQuantity };
    const updatedCartItems = [
      ...cartItems.slice(0, itemIndex),
      updatedItem,
      ...cartItems.slice(itemIndex + 1),
    ];
    dispatch(saveCartItems(updatedCartItems));
  };
  const decreaseQuantity = (productQuantity: number, productId: number) => {
    const newQuantity = productQuantity - 1;
    if (newQuantity > 0) {
      const itemIndex = cartItems.findIndex((item) => item.id === productId);
      const updatedItem = { ...cartItems[itemIndex], quantity: newQuantity };
      const updatedCartItems = [
        ...cartItems.slice(0, itemIndex),
        updatedItem,
        ...cartItems.slice(itemIndex + 1),
      ];
      dispatch(saveCartItems(updatedCartItems));
    }
  };

  return (
    <CartPageContainer>
      {cartItems.length === 0 ? (
        <CartEmptyMessage>
          <p>Your cart is empty</p>
        </CartEmptyMessage>
      ) : (
        <>
          <CartItemsContainer>
            <CartCard
              cardItem={cartItems}
              removeItemFromCart={removeItemFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            ></CartCard>
          </CartItemsContainer>
          <CartSummaryContainer>
            <CartSummaryTitle>Cart Summary</CartSummaryTitle>
            <CartSummaryItem>
              <div>Total Items</div>
              <div>{cartItems.length}</div>
            </CartSummaryItem>
            <CartSummaryItem>
              <div>Total Price</div>
              <div>₹{getTotalPrice()}</div>
            </CartSummaryItem>
            <CartSummaryItem>
              <div>Discount</div>
              <div>-₹{discountedPrice}</div>
            </CartSummaryItem>
            <CartSummaryItem>
              <div>Delivery</div>
              <div>{deliveryCharge == 0 ? "Free" : deliveryCharge} </div>
            </CartSummaryItem>
            <CartTotalPrice>
              <div>Total Price</div>
              <div>₹{finalPrice}</div>
            </CartTotalPrice>
          </CartSummaryContainer>
        </>
      )}
    </CartPageContainer>
  );
};
