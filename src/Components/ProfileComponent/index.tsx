import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownText,
  DropdownLink,
  Button,
  ProfileIconContainer,
  ProfileImage,
} from "./ProfileComponentStyle";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { WishlistState } from "../../Redux/Reducer/SetWishlistItems";
import { CartItemState } from "../../Redux/Reducer/SetCartItems";
import { useSelector } from "react-redux";
import { signOutUser } from "../../Redux/Actions";
import { updateDataInFirebase } from "../../Services/Services";

const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = localStorage.getItem("userName");
  const emailId = localStorage.getItem("email");
  const cartItems = useSelector((state: CartItemState) => state.cartItem);
  const wishlistItems = useSelector(
    (state: WishlistState) => state.wishlistItems
  );
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserLogout = async () => {
    if(emailId){
      updateDataInFirebase(emailId,cartItems,wishlistItems);
    }
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    dispatch(signOutUser());
    navigate("/");
   setDropdownOpen(!dropdownOpen);
  };

  return (
    <ProfileIconContainer>
      <Button>
        <ProfileImage icon={faUser as IconProp} onClick={toggleDropdown} />
      </Button>

      {dropdownOpen && (
        <Dropdown>
          {!emailId ? (
            <>
              <DropdownText>Hello User !</DropdownText>
              <DropdownLink
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login/Signup
              </DropdownLink>
            </>
          ) : (
            <>
              <DropdownText>Hello {userName} !</DropdownText>
              <DropdownLink onClick={handleUserLogout}>Logout</DropdownLink>
            </>
          )}
        </Dropdown>
      )}
    </ProfileIconContainer>
  );
};

export default ProfileIcon;
