import checkUserStatus from "./UserStatusReducer";
import { combineReducers } from "redux";
import productDetails from "./SetProductDetails";
import cartItem from "./SetCartItems";
import wishlistItems from "./SetWishlistItems";

const rootReducer = combineReducers({
  checkUserStatus: checkUserStatus,
  productDetails: productDetails,
  cartItem: cartItem,
  wishlistItems: wishlistItems,
});

export default rootReducer;
