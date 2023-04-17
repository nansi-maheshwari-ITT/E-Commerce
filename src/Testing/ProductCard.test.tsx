import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ProductCard } from "../Components/ProductCard";
import { infoDataType } from "../Screens/Home/HomeInterface";
import { BrowserRouter as Router } from "react-router-dom";

// Mock data for product
const product: infoDataType = {
  id: 1,
  name: "Product 1",
  price: 1000,
  category: "men",
  imageurl: "dummy.jpg",
  inCart: true,
  inWishlist: false,
  description: "Product Description",
  rating: 4.5,
};

describe("ProductCard", () => {
  test("renders product card with correct data", () => {
    const { getByText, getByAltText, getByTestId } = render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    expect(getByText("Product Description")).toBeInTheDocument();
    expect(getByText("View")).toBeInTheDocument();
  });

  test("navigates to detailed product page on image click and view button click", () => {
    const { getByAltText, getByText } = render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    fireEvent.click(getByAltText("Product Description"));
    expect(window.location.pathname).toBe(`/product/men/1`);
    fireEvent.click(getByText("View"));
    expect(window.location.pathname).toBe(`/product/men/1`);
  });
});
