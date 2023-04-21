import { Routes, Route, Navigate } from "react-router-dom";
import { CartScreen } from "../../Screens/CartScreen";
import { Home } from "../../Screens/Home";
import { LoginPage } from "../../Screens/LoginPage";
import { ProductScreen } from "../../Screens/ProductScreen";
import { SignupPage } from "../../Screens/SignupPage";
import { Wishlist } from "../../Screens/Wishlist";
import ProductDetails from "../ProductDetail";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";
import {
  saveCartItems,
  saveProductDetails,
  saveWishlistItems,
} from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { OrderPlaced } from "../../Screens/OrderPlacedScreen";
import { SearchedProduct } from "../../Screens/SearchedProduct";
import {
  fetchProductDetails,
  fetchUsersDetails,
} from "../../Services/Services";
import { LoginOrSignup } from "../LoginOrSignupComponent";
import { OrderHistory } from "../../Screens/OrderHistoryScreen";

export const EcommerceApp = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const fetchUserAndProductDetails = async () => {
    const productDetails = await fetchProductDetails();
    if (productDetails) {
      dispatch(saveProductDetails(productDetails));
    }
    if (email) {
      const userDetails = await fetchUsersDetails(email);
      if (userDetails) {
        dispatch(saveCartItems(userDetails.cartItems));
        dispatch(saveWishlistItems(userDetails.wishlistItems));
      }
    }
  };

  useEffect(() => {
    fetchUserAndProductDetails();
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  return (
    <>
      {!isOnline ? (
        <h1 data-testid="ecommerce-app">Please connect to internet</h1>
      ) : (
        <Routes data-testid="ecommerce-app">
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/*" element={<Home />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/orderplaced" element={<OrderPlaced />} />
                  <Route path="/product/:value" element={<ProductScreen />} />
                  <Route
                    path="/product/:value/:id"
                    element={<ProductDetails />}
                  />
                  <Route
                    path="/search/:product"
                    element={<SearchedProduct />}
                  />
                  <Route
                    path="/wishlist"
                    element={email ? <Wishlist /> : <LoginOrSignup />}
                  />
                  <Route
                    path="/cart"
                    element={email ? <CartScreen /> : <LoginOrSignup />}
                  />
                  <Route path="/loginOrSignup" element={<LoginOrSignup />} />
                  <Route path="/orderHistory" element={<OrderHistory />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      )}
    </>
  );
};
