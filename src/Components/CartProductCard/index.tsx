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

export const CartProductCard: React.FC<CartProductCardProps> = ({
  cardItem,
  removeItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
}) => {
  return (
    <>
      {cardItem.map((item) => (
        <CartItem key={item.id}>
          <CartItemImage src={item.imageurl} alt={item.name} />
          <CartItemDetails>
            <CartItemName>{item.description}</CartItemName>
            <CartItemPrice>₹{item.price}</CartItemPrice>
            <CartItemQuantity>
              <CartItemQuantityButton
                onClick={() => decreaseCartItemQuantity(item.quantity, item.id)}
              >
                -
              </CartItemQuantityButton>
              {item.quantity}
              <CartItemQuantityButton
                onClick={() => increaseCartItemQuantity(item.quantity, item.id)}
              >
                +
              </CartItemQuantityButton>
              <CartItemRemoveButton onClick={() => removeItemFromCart(item.id)}>
                Remove
              </CartItemRemoveButton>
            </CartItemQuantity>
          </CartItemDetails>
        </CartItem>
      ))}
    </>
  );
};
