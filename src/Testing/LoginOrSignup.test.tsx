import { LoginOrSignup } from "../Components/LoginOrSignupComponent";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  beforeEach(() =>
    render(
      <Router>
        <LoginOrSignup />
      </Router>
    )
  );

  test("navigates to login page when login button is clicked", () => {
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe("/login");
  });

  test("navigates to Signup page when Signup button is clicked", () => {
    const signupButton = screen.getByText("Signup");
    fireEvent.click(signupButton);
    expect(window.location.pathname).toBe("/signup");
  });
});
