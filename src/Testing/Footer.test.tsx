import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";
import { categories } from "../Components/Footer/Constant";

describe("Footer component", () => {
  test("Renders categories and items correctly", () => {
    render(<Footer />);

    categories.forEach((category) => {
      const categoryTitle = screen.getByText(category.title);
      expect(categoryTitle).toBeInTheDocument();

      category.items.forEach((item) => {
        const itemText = screen.queryAllByText(item);
        itemText.forEach((itemElement) => {
          expect(itemElement).toBeInTheDocument();
        });
      });
    });
  });
});
