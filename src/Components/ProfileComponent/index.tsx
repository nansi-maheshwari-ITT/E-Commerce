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
import {
  saveCartItems,
  saveWishlistItems,
  signOutUser,
} from "../../Redux/Actions";
import { updateDataInFirebase } from "../../Services/Services";
import Notification from "../Notification";
import { Cart, Hello, LoginText, Logout, OrderHistory, Usertext, Wishlist } from "./Constant";

const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = localStorage.getItem("userName");
  const emailId = localStorage.getItem("email");
  const [notificationMessage,setNotificationMessage]=useState("");
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
 setNotificationMessage("User Logged Out");
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    dispatch(signOutUser());
    dispatch(saveWishlistItems([]));
    dispatch(saveCartItems([]));
    navigate("/");
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <> {notificationMessage && <Notification text={notificationMessage}/>} <ProfileIconContainer>
    <Button>
      <ProfileImage
        data-testid="profile-image"
        icon={faUser as IconProp}
        onClick={toggleDropdown}
      />
    </Button>

    {dropdownOpen && (
      <Dropdown data-testid="dropdown">
        {!emailId ? (
          <>
            <DropdownText>{Usertext}</DropdownText>
            <DropdownLink
              data-testid="login/signup"
              onClick={() => {
                navigate("/login");
              }}
            >
              {LoginText}
            </DropdownLink>
          </>
        ) : (
          <>
            <DropdownText>{Hello} {userName} !</DropdownText>
            <DropdownLink
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              {Wishlist}
            </DropdownLink>
            <DropdownLink
              onClick={() => {
                navigate("/cart");
              }}
            >
              {Cart}
            </DropdownLink>
            <DropdownLink
              onClick={() => {
                navigate("/orderHistory");
              }}
            >
              {OrderHistory}
            </DropdownLink>
            <DropdownLink onClick={handleUserLogout}>{Logout}</DropdownLink>
          </>
        )}
      </Dropdown>
    )}
  </ProfileIconContainer></>
   
  );
};

export default ProfileIcon;
