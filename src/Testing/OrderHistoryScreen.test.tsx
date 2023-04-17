import { render, screen } from "@testing-library/react";
import { OrderHistory } from "../Screens/OrderHistoryScreen";
import { BrowserRouter } from "react-router-dom";

describe("OrderHistory component", () => {
  beforeEach(() => {
    jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockReturnValue("test@example.com");
  });

  afterEach(() => {
    window.localStorage.__proto__.getItem.mockRestore();
  });

  it("should render loading message when data is loading", () => {
    render(
      <BrowserRouter>
        <OrderHistory />
      </BrowserRouter>
    );

    const loadingMessage = screen.getByText("Loading order history...");
    expect(loadingMessage).toBeInTheDocument();
  });
});
