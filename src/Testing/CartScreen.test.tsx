import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { CartScreen } from "../Screens/CartScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";

describe("CartScreen", () => {
  const cartItems: cartItemType[] = [
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
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <CartScreen />
        </Router>
      </Provider>
    );
  });

  test("renders the cart Page component", async () => {
    const CartPageContainer = screen.getByTestId("cart-page-container");

    await waitFor(() => {
      expect(CartPageContainer).toBeInTheDocument();
    });
  });

  test("displays a message when the cart is empty", () => {
    store.dispatch({ type: "UPDATE_CART_ITEMS", payload: [] });
    const emptyCartMessage = screen.getByTestId("empty-cart-message");
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test("adds item to cart when Add to Cart button is clicked", () => {
    act(() => {
      store.dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
    });
    const removeButton = screen.getByTestId("removeButton-1");
    fireEvent.click(removeButton);

    const updatedCartItems = store.getState().cartItem;
    expect(updatedCartItems.length).toBe(1);
    expect(updatedCartItems[0].id).toBe(2);
  });

  test("increase quantity", () => {
    act(() => {
      store.dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
    });
    const incrementButton = screen.getByTestId("incrementButton-1");
    fireEvent.click(incrementButton);
    const updatedCartItems = store.getState().cartItem;
    const updatedProduct = updatedCartItems.find((item) => item.id == 1);
    expect(updatedProduct?.quantity).toBe(2);
  });

  test("decrease quantity", () => {
    act(() => {
      store.dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
    });
    const decrementButton = screen.getByTestId("decrementButton-2");
    fireEvent.click(decrementButton);
    const updatedCartItems = store.getState().cartItem;
    const updatedProduct = updatedCartItems.find((item) => item.id == 2);
    expect(updatedProduct?.quantity).toBe(1);
  });
});
