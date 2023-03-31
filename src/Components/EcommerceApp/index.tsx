import { Routes, Route, useParams } from "react-router-dom";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import { CartScreen } from "../../Screens/CartScreen";
import { Home } from "../../Screens/Home";
import { LoginPage } from "../../Screens/LoginPage";
import { ProductScreen } from "../../Screens/CategoryWiseProductScreen";
import { SignupPage } from "../../Screens/SignupPage";
import { Wishlist } from "../../Screens/Wishlist";
import DetailedCardSection from "../DetailedCardSection";
import Footer from "../Footer";
import { Navbar } from "../Navbar";

export const EcommerceApp = () => {

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
              <Route
                path="/shop/:value"
                element={<ProductScreen></ProductScreen>}
              ></Route>
              <Route
                path="/product/:id"
                element={<DetailedCardSection></DetailedCardSection>}
              ></Route>
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
