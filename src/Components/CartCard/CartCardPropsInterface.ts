import { cartItemType } from "../../Screens/CartScreen/CartScreenInterface"

export interface CartCardProps{
	cardItem:cartItemType[];
	removeItemFromCart: (productId: number) => void;
	increaseQuantity:(productQuantity: number, productId: number) => void
	decreaseQuantity: (productQuantity: number, productId: number) => void
}
