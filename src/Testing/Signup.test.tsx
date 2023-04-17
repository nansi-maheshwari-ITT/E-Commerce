import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { SignupPage } from "../Screens/SignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";

describe("SignupPage", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <SignupPage />
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
    const SignupAccount = screen.getByText("Create Account");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(SignupAccount);

    await waitFor(() => {
      expect(screen.getByText("Create Account")).toBeInTheDocument();
    });
  });
});
