import styled from "styled-components";
import theme from "../../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 120px;
`;
const ProfileIconContainer = styled.div`
  position: relative;

  &:hover ${Dropdown} {
    display: block;
  }
`;

const ProfileImage = styled(FontAwesomeIcon)`
  border-radius: 50%;
  cursor: pointer;
`;

const DropdownLink = styled.a`
  display: block;
  padding: 0px 10px 10px 10px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    cursor:pointer;
    color: black;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.primary};
`;

const DropdownText = styled.p`
  font-size: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;


export {Dropdown,DropdownText,DropdownLink,Button ,ProfileIconContainer,ProfileImage};