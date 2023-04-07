import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CartPageContainer,
  CartItemsContainer,
  CartSummaryContainer,
  CartSummaryTitle,
  CartSummaryItem,
  CartTotalPrice,
  CartEmptyMessage,
  PlaceOrderButton,
  GoBackToCartButton,
} from "./CartScreenStyle";
import { CartProductCard } from "../../Components/CartProductCard";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { saveCartItems } from "../../Redux/Actions";
import Notification from "../../Components/Notification/Notification";
import { PlacingOrderForm } from "../../Components/PlacingOrderForm";

export const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const [orderInProgress, setOrderInProgress] = useState(false);
  const [notification,setNotification]=useState("");
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


  useEffect(()=>{
    setTimeout(()=>{
    setNotification("");
    },3000)
      })

  const removeItemFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    dispatch(saveCartItems(updatedCartItems));
    setNotification("Product removed from cart");
  };

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === productId);
    const updatedItem = { ...cartItems[itemIndex], quantity: newQuantity };
    const updatedCartItems = [
      ...cartItems.slice(0, itemIndex),
      updatedItem,
      ...cartItems.slice(itemIndex + 1),
    ];
    dispatch(saveCartItems(updatedCartItems));
  };

  const increaseCartItemQuantity = (
    productQuantity: number,
    productId: number
  ) => {
    const newQuantity = productQuantity + 1;
    updateCartItemQuantity(productId, newQuantity);
    setNotification("Product's quantity increased");

  };

  const decreaseCartItemQuantity = (
    productQuantity: number,
    productId: number
  ) => {
    const newQuantity = productQuantity - 1;
    if (newQuantity > 0) {
      updateCartItemQuantity(productId, newQuantity);
    } else {
      removeItemFromCart(productId);
    }
    setNotification("Product's quantity decreased");
  };

  return (
    <CartPageContainer data-testid="cart-page-container">
      {cartItems.length === 0 ? (
        <CartEmptyMessage data-testid="empty-cart-message">
          <p>Your cart is empty</p>
        </CartEmptyMessage>
      ) : (
        <>
          <CartItemsContainer>
            {!orderInProgress ? (
              <CartProductCard
                cardItem={cartItems}
                removeItemFromCart={removeItemFromCart}
                increaseCartItemQuantity={increaseCartItemQuantity}
                decreaseCartItemQuantity={decreaseCartItemQuantity}
              ></CartProductCard>
            ) : (
              <>
                <PlacingOrderForm
                  cartItems={cartItems}
                  finalPrice={finalPrice}
                ></PlacingOrderForm>
              </>
            )}
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
            {!orderInProgress ? (
              <PlaceOrderButton
                onClick={() => {
                  setOrderInProgress(true);
                }}
              >
                Place Order
              </PlaceOrderButton>
            ) : (
              <GoBackToCartButton
                onClick={() => {
                  setOrderInProgress(false);
                }}
              >
                Go Back To Cart
              </GoBackToCartButton>
            )}
          </CartSummaryContainer>
        </>
      )}
      {notification && <Notification text={notification}></Notification>}
    </CartPageContainer>
  );
};
