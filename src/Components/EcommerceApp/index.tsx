import { Routes, Route } from "react-router-dom";
import { CartScreen } from "../../Screens/CartScreen";
import { Home } from "../../Screens/Home";
import { LoginPage } from "../../Screens/LoginPage";
import { ProductScreen } from "../../Screens/ProductScreen";
import { SignupPage } from "../../Screens/SignupPage";
import { Wishlist } from "../../Screens/Wishlist";
import ProductDetails from "../ProductDetail";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import { useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import {
  saveCartItems,
  saveProductDetails,
  saveWishlistItems,
} from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { infoDataType } from "../../Screens/Home/HomeInterface";
import { OrderPlaced } from "../../Screens/OrderPlacedScreen";
import { SearchedProduct } from "../../Screens/SearchedProduct";
import { fetchProductData, fetchUsersData } from "../../Services/Services";

export const EcommerceApp = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const fetchAllData = async () => {
    const productdata = await fetchProductData();
    if (productdata) {
      dispatch(saveProductDetails(productdata));
    }
    if (email) {
      const userData = await fetchUsersData(email);
      if (userData) {
        dispatch(saveCartItems(userData.cartItems));
        dispatch(saveWishlistItems(userData.wishlistItems));
      }
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orderplaced" element={<OrderPlaced />} />
              <Route
                path="/product/:value"
                element={<ProductScreen></ProductScreen>}
              ></Route>
              <Route
                path="/product/:value/:id"
                element={<ProductDetails></ProductDetails>}
              ></Route>
              <Route path="/search/:product" element={<SearchedProduct />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
