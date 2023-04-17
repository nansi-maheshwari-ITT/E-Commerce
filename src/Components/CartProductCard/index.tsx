import React from "react";
import { CartProductCardProps } from "./CartProductCardInterface";
import {
  CartItem,
  CartItemQuantity,
  CartItemName,
  CartItemRemoveButton,
  CartItemDetails,
  CartItemQuantityButton,
  CartItemImage,
  CartItemPrice,
} from "./CartProductCardStyle";
import { increaseBtnText, decreaseBtnText, removeBtnText } from "./Constant";
export const CartProductCard: React.FC<CartProductCardProps> = ({
  cartItems,
  removeItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}) => {
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <CartItemImage src={item.imageurl} alt={item.name} />
          <CartItemDetails>
            <CartItemName>{item.description}</CartItemName>
            <CartItemPrice>Rs.{item.price}</CartItemPrice>
            <CartItemQuantity>
              <CartItemQuantityButton
                onClick={() => decreaseCartItemQuantity(item.quantity, item.id)}
                data-testid={`decrementButton-${item.id}`}
              >
                {decreaseBtnText}
              </CartItemQuantityButton>
              {item.quantity}
              <CartItemQuantityButton
                onClick={() => increaseCartItemQuantity(item.quantity, item.id)}
                data-testid={`incrementButton-${item.id}`}
              >
                {increaseBtnText}
              </CartItemQuantityButton>
              <CartItemRemoveButton
                onClick={() => removeItemFromCart(item.id)}
                data-testid={`removeButton-${item.id}`}
              >
                {removeBtnText}
              </CartItemRemoveButton>
            </CartItemQuantity>
          </CartItemDetails>
        </CartItem>
      ))}
    </>
  );
};
