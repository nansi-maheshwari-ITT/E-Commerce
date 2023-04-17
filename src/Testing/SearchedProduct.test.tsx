import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { SearchedProduct } from "../Screens/SearchedProduct";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";

describe("SearchedProduct", () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <SearchedProduct />
        </Router>
      </Provider>
    );
  });

  test("renders empty cart message when no matching products", () => {
    const productDetail = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];
    const searchedProduct = "Product 3";
    store.dispatch({ type: "SET_PRODUCT_DETAILS", payload: productDetail });
    const cartEmptyMessage = screen.getByTestId("cartEmptyMessage");
    expect(cartEmptyMessage).toBeInTheDocument();
  });

  test("renders product container when there are matching products", async () => {
    const productDetail = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];
    const searchedProduct = "Product 1";
    store.dispatch({ type: "SET_PRODUCT_DETAILS", payload: productDetail });
    await waitFor(() => screen.getByTestId("productContainer"));
    const productContainer = screen.getByTestId("productContainer");
    expect(productContainer).toBeInTheDocument();
  });
});
