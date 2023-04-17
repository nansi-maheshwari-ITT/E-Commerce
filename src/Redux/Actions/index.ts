import { cartItemType } from "../../Screens/CartScreen/CartScreenInterface";
import { infoDataType } from "../../Screens/Home/HomeInterface";
export interface User {
  userName: string | null;
  emailId: string | null;
  isLoggedIn: boolean;
}

export const saveCartItems = (data: cartItemType[]) => ({
  type: "SET_CART_ITEMS",
  payload: data,
});

export const saveWishlistItems = (data: infoDataType[]) => ({
  type: "SET_WISHLIST_ITEMS",
  payload: data,
});

export const saveProductDetails = (data: infoDataType[]) => ({
  type: "SET_PRODUCT_DETAILS",
  payload: data,
});

export const signInUser = (user: User) => {
  return {
    type: "SIGN_IN",
    payload: user,
  };
};

export const signOutUser = () => {
  return {
    type: "SIGN_OUT",
  };
};
