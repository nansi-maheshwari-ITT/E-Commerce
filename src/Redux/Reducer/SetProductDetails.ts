import { infoDataType } from "../../Screens/Home/HomeInterface";
export interface SetProductDetailsAction {
  type: "SET_PRODUCT_DETAILS";
  payload: infoDataType[];
}
export interface ProductState {
  productDetails: infoDataType[];
}
const initialState: infoDataType[] = [];

const productDetails = (
  state = initialState,
  action: SetProductDetailsAction
) => {
  switch (action.type) {
    case "SET_PRODUCT_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
export default productDetails;
