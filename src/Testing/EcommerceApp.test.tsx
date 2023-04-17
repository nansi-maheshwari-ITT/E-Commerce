// Import necessary dependencies and test utilities
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { EcommerceApp } from "../Components/EcommerceApp";
import { saveProductDetails } from "../Redux/Actions";
import { fetchProductDetails } from "../Services/Services";
import { store } from "../Redux/Store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

describe("EcommerceApp", () => {
  beforeEach(() => {
    // Mocking window.navigator.onLine to be false
    Object.defineProperty(window, "navigator", {
      value: { onLine: false },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render offline message when isOnline is false", () => {
    render(
      <Provider store={store}>
        <EcommerceApp />
      </Provider>
    );

    expect(screen.getByText("Please connect to internet")).toBeInTheDocument();
  });

  // Write more test cases as needed
});
