import { cartItemType } from "../../Screens/CartScreen/CartScreenInterface";

export interface CartProductCardProps {
  cardItem: cartItemType[];
  removeItemFromCart: (productId: number) => void;
  increaseCartItemQuantity: (
    productQuantity: number,
    productId: number
  ) => void;
  decreaseCartItemQuantity: (
    productQuantity: number,
    productId: number
  ) => void;
}
