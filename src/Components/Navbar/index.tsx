import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavBar,
  Logo,
  SearchInput,
  SearchBar,
  NavItems,
  Button,
  LoginButton,
  NavItem,
} from "./NavbarStyle";
import { UserStatusInterface } from "./NavbarInterface";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser, User } from "../../Redux/Actions";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailId = localStorage.getItem("email");
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );

  return (
    <NavBar>
      <Logo>Shopify</Logo>
      <NavItems>
        <SearchBar>
          <SearchInput placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} />
        </SearchBar>
        <div>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faHome} />
          </Button>

          <Button
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button
            onClick={() => {
              !emailId ? navigate("/login") : navigate("/cart");
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
        {!emailId && (
          <LoginButton
            onClick={() => {
              navigate("/login");
            }}
          >
            Login / Signup
          </LoginButton>
        )}
        {emailId && (
          <LoginButton
            onClick={async () => {
              const userDocRef = doc(collection(db, "users"), emailId);
              try {
                await updateDoc(userDocRef, { cartItems, wishlistItems });
                console.log("Cart and wishlist updated successfully");
              } catch (error) {
                console.error("Error updating cart and wishlist: ", error);
              }
              localStorage.removeItem("email");
              dispatch(signOutUser());
              navigate("/");
            }}
          >
            Log Out
          </LoginButton>
        )}
      </NavItems>
    </NavBar>
  );
};
