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

  test("renders search results correctly", async () => {

    const mockSearchResults = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];
    store.dispatch({ type: "SET_SEARCH_RESULTS", payload: mockSearchResults });
    const productElements = screen.getAllByTestId("productContainer");

    await waitFor(() => { 
      expect(productElements).toHaveLength(2);
    });
  });
});
