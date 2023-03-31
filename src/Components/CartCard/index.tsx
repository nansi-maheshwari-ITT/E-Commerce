import React from 'react'
import { CartCardProps } from './CartCardPropsInterface';
import {CartItem,CartItemQuantity,CartItemName,CartItemRemoveButton,CartItemDetails,CartItemQuantityButton,CartItemImage,CartItemPrice}from './CartCardStyle';



export const CartCard:React.FC<CartCardProps> = ({cardItem,removeItemFromCart,increaseQuantity,decreaseQuantity}) => {
  return (<>
	{cardItem.map((item) => (
		<CartItem key={item.id}>
		<CartItemImage src={item.imageurl} alt={item.name} />
		<CartItemDetails>
		<CartItemName>{item.description}</CartItemName>
		<CartItemPrice>₹{item.price}</CartItemPrice>
		<CartItemQuantity>
		<CartItemQuantityButton onClick={()=>decreaseQuantity(item.quantity,item.id)}>-</CartItemQuantityButton>
		{item.quantity}
		<CartItemQuantityButton onClick={()=>increaseQuantity(item.quantity,item.id)}>+</CartItemQuantityButton>
		<CartItemRemoveButton onClick={()=>removeItemFromCart(item.id)}>Remove</CartItemRemoveButton>
		</CartItemQuantity>
		</CartItemDetails>
		</CartItem>
		))}
		</>
  )
}
