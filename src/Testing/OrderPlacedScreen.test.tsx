import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { OrderPlaced } from "../Screens/OrderPlacedScreen";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";

describe("Orderplaced", () => {
  beforeEach(() => {
    let store: Store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <OrderPlaced></OrderPlaced>
        </Router>
      </Provider>
    );
  });

  test("renders order placed screen", async () => {
    const orderPlacedScreen = screen.getByTestId("order-placed-screen");
    await waitFor(() => {
      expect(orderPlacedScreen).toBeInTheDocument();
    });
  });
});
