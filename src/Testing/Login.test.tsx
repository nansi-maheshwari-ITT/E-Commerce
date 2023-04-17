import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { LoginPage } from "../Screens/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";

describe("LoginPage", () => {
  beforeEach(() => {
    let store: Store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );
  });

  test("renders input fields with correct labels", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const loginButton = screen.getByText("Log in");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText("Log in")).toBeInTheDocument();
    });
  });
});
