import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PurchaseOrderForm } from "../Components/PurchaseOrderForm";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";

describe("PurchaseOrderForm", () => {
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
          <PurchaseOrderForm
            finalPrice={mockFinalPrice}
            cartItems={mockCartItems}
          />
        </Router>
      </Provider>
    );
  });

  test("renders form fields correctly", () => {
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone no")).toBeInTheDocument();
    expect(screen.getByLabelText("Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Pincode")).toBeInTheDocument();
    expect(screen.getByLabelText("City/District")).toBeInTheDocument();
    expect(screen.getByLabelText("State")).toBeInTheDocument();
    expect(screen.getByLabelText("Payment Option")).toBeInTheDocument();
    expect(screen.getByText("Cash on Delivery")).toBeInTheDocument();
    expect(screen.getByText("Confirm Order")).toBeInTheDocument();
  });

  test("renders form fields and confirms order with valid data", () => {
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const phoneInput = screen.getByLabelText("Phone no");
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });

    const addressInput = screen.getByLabelText("Address");
    fireEvent.change(addressInput, { target: { value: "Test Address" } });

    const pincodeInput = screen.getByLabelText("Pincode");
    fireEvent.change(pincodeInput, { target: { value: "123456" } });

    const cityInput = screen.getByLabelText("City/District");
    fireEvent.change(cityInput, { target: { value: "Test City" } });

    const stateInput = screen.getByLabelText("State");
    fireEvent.change(stateInput, { target: { value: "Test State" } });

    const confirmOrderButton = screen.getByText("Confirm Order");
    fireEvent.click(confirmOrderButton);

    expect(window.location.pathname).toBe("/orderplaced");
  });

  test("displays error message if form fields are not filled", () => {
    fireEvent.click(screen.getByText("Confirm Order"));
    expect(screen.getByText("Please fill in all fields.")).toBeInTheDocument();
  });
});
