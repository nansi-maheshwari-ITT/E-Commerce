import { cartItemType } from "../../Screens/CartScreen/CartScreenInterface";

export interface SetCartItemAction {
  type: string;
  payload: cartItemType[];
}

export interface CartItemState {
  cartItem: cartItemType[];
}

const initialState: cartItemType[] = [];

const cartItem = (state = initialState, action: SetCartItemAction) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return action.payload;
    default:
      return state;
  }
};
export default cartItem;
