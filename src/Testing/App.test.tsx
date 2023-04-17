import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { EcommerceApp } from "../Components/EcommerceApp";

jest.mock("../Components/EcommerceApp", () => ({
  EcommerceApp: jest.fn(() => null),
}));

describe("App component", () => {
  test("Renders EcommerceApp component", () => {
    render(<App />);
    expect(EcommerceApp).toHaveBeenCalled();
  });
});
