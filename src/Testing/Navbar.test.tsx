import { render, fireEvent, screen } from "@testing-library/react";
import { Navbar } from "../Components/Navbar";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import rootReducer from "../Redux/Reducer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  beforeEach(() => {
    let store: Store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
        </Router>
      </Provider>
    );
  });

  test("navigates to search page on search icon click with correct search query", () => {
    const searchInput = screen.getByPlaceholderText("Search...");
    const searchIcon = screen.getByTestId("search-icon");
    fireEvent.change(searchInput, { target: { value: "test" } });
    fireEvent.click(searchIcon);
    expect(window.location.pathname).toBe("/search/test");
  });

  test("navigates to login page on wishlist icon click if user is not logged in", () => {
    const wishlistIcon = screen.getByTestId("wishlist-icon");
    fireEvent.click(wishlistIcon);
    expect(window.location.pathname).toBe("/login");
  });

  test("navigates to login page on cart icon click if user is not logged in", () => {
    const cartIcon = screen.getByTestId("cart-icon");
    fireEvent.click(cartIcon);
    expect(window.location.pathname).toBe("/login");
  });
});
