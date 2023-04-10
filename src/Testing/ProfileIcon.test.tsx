import { screen, render, fireEvent } from "@testing-library/react";
import ProfileIcon from "../Components/ProfileComponent";
import rootReducer from "../Redux/Reducer";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";

describe("ProfileIcon", () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
    });
    render(
      <Provider store={store}>
        <Router>
          <ProfileIcon />
        </Router>
      </Provider>
    );
  });

  test("toggles dropdown on click", () => {
    const profileImage = screen.getByTestId("profile-image");
    const dropdown = screen.queryByTestId("dropdown");

    expect(dropdown).not.toBeInTheDocument();
    fireEvent.click(profileImage);
    expect(screen.queryByTestId("dropdown")).toBeInTheDocument();
    fireEvent.click(profileImage);
    expect(dropdown).not.toBeInTheDocument();
  });

  test("shows login/signup link when emailId is not available", () => {
    const profileImage = screen.getByTestId("profile-image");
    fireEvent.click(profileImage);

    const loginSignupLink = screen.getByText("Login/Signup");
    expect(loginSignupLink).toBeInTheDocument();
  });

  test("shows username and logout link when emailId is available", () => {
    localStorage.setItem("email", "test@example.com");
    localStorage.setItem("userName", "Test User");
    const profileImage = screen.getByTestId("profile-image");
    fireEvent.click(profileImage);

    const userName = screen.getByText("Hello Test User !");
    const logoutLink = screen.getByText("Logout");
    expect(userName).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();

    localStorage.removeItem("email");
    localStorage.removeItem("userName");
  });
});
