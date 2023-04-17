import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PlacingOrderForm } from "../Components/PlacingOrderForm";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";

describe("PlacingOrderForm", () => {
  const mockFinalPrice = 100;
  const mockCartItems: cartItemType[] = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      category: "product",
      imageurl: "dummy.jpg",
      quantity: 1,
      inCart: true,
      inWishlist: false,
      description: "dummy",
      rating: 4,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      category: "product2",
      imageurl: "dummy2.jpg",
      quantity: 1,
      inCart: true,
      inWishlist: false,
      description: "dummy2",
      rating: 4,
    },
  ];
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <PlacingOrderForm
            finalPrice={mockFinalPrice}
            cartItems={mockCartItems}
          />
        </Router>
      </Provider>
    );
  });

  test("renders form fields correctly", () => {
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone no")).toBeInTheDocument();
    expect(screen.getByLabelText("Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Pincode")).toBeInTheDocument();
    expect(screen.getByLabelText("City/District")).toBeInTheDocument();
    expect(screen.getByLabelText("State")).toBeInTheDocument();
    expect(screen.getByLabelText("Payment Option")).toBeInTheDocument();
    expect(screen.getByText("Cash on Delivery")).toBeInTheDocument();
    expect(screen.getByText("Confirm Order")).toBeInTheDocument();
  });

  test("displays error message if form fields are not filled", () => {
    fireEvent.click(screen.getByText("Confirm Order"));
    expect(screen.getByText("Please fill in all fields.")).toBeInTheDocument();
  });
});
