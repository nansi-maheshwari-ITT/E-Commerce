import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavBar,
  Logo,
  SearchInput,
  SearchBar,
  NavItems,
  Button,
} from "./NavbarStyle";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { LogoText } from "./Constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileIcon from "../ProfileComponent";
import { useSelector } from "react-redux";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";

export const Navbar = () => {
  const navigate = useNavigate();
  const emailId = localStorage.getItem("email");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setSearchQuery("");
    navigate(`/search/${searchQuery}`);
  };

  return (
    <NavBar>
      <Logo
        onClick={() => {
          navigate(`/`);
        }}
      >
        {LogoText}
      </Logo>
      <NavItems>
        <SearchBar>
          <SearchInput
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(event) => {
              handleSearchFieldChange(event);
            }}
          />
          <FontAwesomeIcon
            icon={faSearch as IconProp}
            onClick={() => {
              handleSearchButtonClick();
            }}
            data-testid="search-icon"
          />
        </SearchBar>
        <div>
          <Button
            onClick={() => {
              !emailId ? navigate("/loginOrSignup") : navigate("/wishlist");
            }}
            data-testid="wishlist-icon"
            className={!emailId ? "icon" : ""}
            id="icons"
          >
            <span>{wishlistItems.length>0 && wishlistItems.length}</span>
            <FontAwesomeIcon icon={faHeart as IconProp}></FontAwesomeIcon>
          </Button>
          <Button
            onClick={() => {
              !emailId ? navigate("/loginOrSignup") : navigate("/cart");
            }}
            data-testid="cart-icon"
            className={!emailId ? "icon" : ""}
            id="icons"
          >
            <span>{cartItems.length>0 && cartItems.length}</span>
            <FontAwesomeIcon icon={faCartShopping as IconProp} />
          </Button>
          <Button>
            <ProfileIcon></ProfileIcon>
          </Button>
        </div>
      </NavItems>
    </NavBar>
  );
};
