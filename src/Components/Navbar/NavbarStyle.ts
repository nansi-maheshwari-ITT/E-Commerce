import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 80px;
  background-color: rgb(44 72 44);
  opacity:0.9;
color:white;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.8rem 2.2rem;
  background-color: white;
  margin-left: 1rem;
  border-radius: 1.7rem;

  svg{
	color:grey;
	font-size:22px;
	margin-left:8px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
 
 
`
;


const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
font-size: 1.2rem;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
`;

const NavItem=styled.div`
color:white;
font-size: 1.2rem;
`

export {NavBar,Logo,SearchInput,SearchBar,NavItems,Button,LoginButton,NavItem}