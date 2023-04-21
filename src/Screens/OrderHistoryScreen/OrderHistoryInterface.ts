import { cartItemType } from "../CartScreen/CartScreenInterface";

export interface OrderHistoryProps {
	email: string;
	address: string;
	purchasedProduct: cartItemType[];
	finalPrice: number;
	orderId: string;
  }