import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { EcommerceApp } from "../Components/EcommerceApp";
import { store } from "../Redux/Store";

describe("EcommerceApp", () => {
  beforeEach(() => {
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
});
