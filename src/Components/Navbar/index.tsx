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
import {useDispatch } from "react-redux";
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
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <FontAwesomeIcon
            icon={faSearch as IconProp}
            onClick={() => {
              handleSubmit();
            }}
          />
        </SearchBar>
        <div>
          <Button
            onClick={() => {
              !emailId ? navigate(`/login`) : navigate("/wishlist");
            }}
          >
            <FontAwesomeIcon icon={faHeart as IconProp}></FontAwesomeIcon>
          </Button>
          <Button
            onClick={() => {
              !emailId ? navigate("/login") : navigate("/cart");
            }}
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
