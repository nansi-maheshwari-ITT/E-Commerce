import styled from "styled-components";
import theme from "../../Theme";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 80px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  box-shadow: rgb(153 147 147 / 32%) 0px 1px 9px;
  .profile-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  background-color: rgb(255 255 255 / 39%);
  align-items: center;
  margin-left: 1.5rem;
  padding: 0rem 1rem 0rem 0rem;
  margin-left: 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${theme.colors.primary};

  svg {
    font-size: 22px;
    margin-left: 8px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 1rem 1rem;
  background-color: rgb(255 255 255 / 39%);
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.primary};
`;

const LoginButton = styled(Button)`
  font-size: 1.2rem;
  border: 2px solid;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 0px;
`;

const NavItem = styled.div`
  font-size: 1.2rem;
`;

const UserGreeting = styled.h3`
  font-family: ${theme.fonts.heading};
`;

export {
  NavBar,
  Logo,
  SearchInput,
  SearchBar,
  NavItems,
  Button,
  LoginButton,
  NavItem,
  UserGreeting,
};
