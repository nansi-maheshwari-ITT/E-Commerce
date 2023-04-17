import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { Wishlist } from "../Screens/Wishlist";
import { BrowserRouter as Router } from "react-router-dom";
import { infoDataType } from "../Screens/Home/HomeInterface";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";

describe("Wishlist", () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );
  });

  test("renders empty wishlist message when no wishlist items", () => {
    const wishlistItems: infoDataType[] = [];
    store.dispatch({ type: "SET_WISHLIST_ITEMS", payload: wishlistItems });
    const wishlistEmptyMessage = screen.getByTestId("wishlistEmptyMessage");
    expect(wishlistEmptyMessage).toBeInTheDocument();
  });

  test("removes item from wishlist when remove button is clicked", () => {
    act(() => {
      const wishlistItems = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
      ];
      store.dispatch({ type: "SET_WISHLIST_ITEMS", payload: wishlistItems });
    });
    const removeButton = screen.getByTestId("removeButton-1");
    fireEvent.click(removeButton);
    const updatedWishlistItems = store.getState().wishlistItems;
    expect(updatedWishlistItems.length).toBe(1);
    expect(updatedWishlistItems[0].id).toBe(2);
  });

  test("adds item to cart when Add to Cart button is clicked", () => {
    const cartItems: cartItemType[] = [];
    store.dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
    act(() => {
      const wishlistItems = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
      ];
      store.dispatch({ type: "SET_WISHLIST_ITEMS", payload: wishlistItems });
    });

    const addToCartButton = screen.getByTestId("addToCartButton-1");
    fireEvent.click(addToCartButton);

    const updatedCartItems = store.getState().cartItem;
    expect(updatedCartItems.length).toBe(1);
    expect(updatedCartItems[0].id).toBe(1);

    const updatedWishlistItems = store.getState().wishlistItems;
    expect(updatedWishlistItems.length).toBe(1);
    expect(updatedWishlistItems[0].id).toBe(2);
  });
});
