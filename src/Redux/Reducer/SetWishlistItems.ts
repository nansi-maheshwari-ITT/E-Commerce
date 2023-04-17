import { infoDataType } from "../../Screens/Home/HomeInterface";

export interface SetWishlistItemAction {
  type: string;
  payload: infoDataType[];
}
export interface WishlistState {
  wishlistItems: infoDataType[];
}
const initialState: infoDataType[] = [];

const wishlistItems = (state = initialState, action: SetWishlistItemAction) => {
  switch (action.type) {
    case "SET_WISHLIST_ITEMS":
      return action.payload;
    default:
      return state;
  }
};
export default wishlistItems;
