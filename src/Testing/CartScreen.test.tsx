import { render, screen ,waitFor} from "@testing-library/react";
import { CartScreen } from "../Screens/CartScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";

describe("CartScreen", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <CartScreen />
        </Router>
      </Provider>
    );
  });

  test("renders the category selection component",async () => {
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


  
});
