import { render, screen, waitFor } from "@testing-library/react";
import { Home } from "../Screens/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";

describe("Home", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  });

  test("renders the category selection component", async () => {
    const categorySelectionContainer = screen.getByTestId("categorySelection");

    await waitFor(() => {
      expect(categorySelectionContainer).toBeInTheDocument();
    });
  });
});
