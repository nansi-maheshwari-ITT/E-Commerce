import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../Components/ProductDetail";
import { store } from "../Redux/Store";
import { infoDataType } from "../Screens/Home/HomeInterface";
import { async } from "@firebase/util";
import {
  saveCartItems,
  saveProductDetails,
  saveWishlistItems,
} from "../Redux/Actions";
import { useParams } from "react-router-dom"; // Import useParams to mock URL params

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(), // Mock useParams
}));

describe("ProductDetails", () => {
  const product: infoDataType[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      category: "men",
      imageurl: "dummy.jpg",
      inCart: false,
      inWishlist: false,
      description: "Description 1",
      rating: 4,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      category: "men",
      imageurl: "dummy.jpg",
      inCart: false,
      inWishlist: false,
      description: "Description 2",
      rating: 4,
    },
  ];

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ value: "men", id: "1" });
    act(() => {
      store.dispatch(saveProductDetails(product));
      store.dispatch(saveCartItems([]));
      store.dispatch(saveWishlistItems([]));
      localStorage.setItem("email", "test@ex.com");
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render product details", async () => {
    await waitFor(() => screen.getByTestId("product-name"));
    expect(screen.getByTestId("product-name")).toHaveTextContent(
      product[0].description
    );
  });

  it("should add product to cart when 'Add to Cart' button is clicked", async () => {
    screen.getByText("Add To Cart").click();
    const updatedCartItems = store.getState().cartItem;
    expect(updatedCartItems.length).toBe(1);
  });

  it("should add product to cwishlist when 'Add to wishlist' button is clicked", async () => {
    screen.getByText("Add To wishlist").click();
    const updatedWishlistItems = store.getState().wishlistItems;
    expect(updatedWishlistItems.length).toBe(1);
  });
});
