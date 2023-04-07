import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { ProductScreen } from "../Screens/ProductScreen";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore,Store } from "@reduxjs/toolkit";

describe("LoginPage", () => {
  beforeEach(() => {
    let store: Store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <ProductScreen />
        </Router>
      </Provider>
    );
  });

 

  test("render the product container", async () => {
    const productContainer = screen.getByTestId("productContainer");
  
    await waitFor(() => {
      expect(productContainer).toBeInTheDocument();
     
    });
  });
});
