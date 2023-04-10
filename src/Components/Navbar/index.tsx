import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
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

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileIcon from "../ProfileComponent";

export const Navbar = () => {
  const navigate = useNavigate();
  const emailId = localStorage.getItem("email");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = () => {
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
        Shopify
      </Logo>
      <NavItems>
        <SearchBar>
          <SearchInput
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <FontAwesomeIcon
            icon={faSearch as IconProp}
            onClick={() => {
              handleSubmit();
            }}
            data-testid="search-icon"
          />
        </SearchBar>
        <div>
          <Button
            onClick={() => {
              !emailId ? navigate("/login") : navigate("/wishlist");
            }}
            data-testid="wishlist-icon"
            className="wishlist-icon"
          >
            <FontAwesomeIcon icon={faHeart as IconProp}></FontAwesomeIcon>
          </Button>
          <Button
            onClick={() => {
              !emailId ? navigate("/login") : navigate("/cart");
            }}
            data-testid="cart-icon"
            className="cart-icon"
          >
            <FontAwesomeIcon icon={faShoppingCart as IconProp} />
          </Button>
          <Button>
            <ProfileIcon></ProfileIcon>
          </Button>
        </div>
      </NavItems>
    </NavBar>
  );
};
