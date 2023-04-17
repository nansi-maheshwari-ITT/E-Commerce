import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProductCard } from "../Components/CartProductCard";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";

describe("CartProductCard", () => {
  const cardItem: cartItemType[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      category: "product",
      imageurl: "dummy.jpg",
      quantity: 1,
      inCart: true,
      inWishlist: false,
      description: "Description 1",
      rating: 4,
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      category: "product2",
      imageurl: "dummy2.jpg",
      quantity: 2,
      inCart: true,
      inWishlist: false,
      description: "Description 2",
      rating: 4,
    },
  ];
  const removeItemFromCart = jest.fn();
  const increaseCartItemQuantity = jest.fn();
  const decreaseCartItemQuantity = jest.fn();

  beforeEach(() => {
    render(
      <CartProductCard
        cardItem={cardItem}
        removeItemFromCart={removeItemFromCart}
        increaseCartItemQuantity={increaseCartItemQuantity}
        decreaseCartItemQuantity={decreaseCartItemQuantity}
      />
    );
  });
  test("should render cart product card with correct details", () => {
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("₹100")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByText("₹150")).toBeInTheDocument();
  });

  test("should call removeItemFromCart function when 'Remove' button is clicked", () => {
    const removeButton = screen.getByTestId("removeButton-1");
    fireEvent.click(removeButton);
    expect(removeItemFromCart).toHaveBeenCalledWith(1);
  });

  test("should call increaseCartItemQuantity function when '+' button is clicked", () => {
    const incrementButton = screen.getByTestId("incrementButton-1");
    fireEvent.click(incrementButton);
    expect(increaseCartItemQuantity).toHaveBeenCalledWith(1, 1);
  });

  test("should call decreaseCartItemQuantity function when '-' button is clicked", () => {
    const decrementButton = screen.getByTestId("decrementButton-1");
    fireEvent.click(decrementButton);
    expect(decreaseCartItemQuantity).toHaveBeenCalledWith(1, 1);
  });
});
