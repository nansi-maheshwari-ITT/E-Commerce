import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../Theme";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 235px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  margin: 0.5em;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100px;
    margin: 0.5em;
    height:220px;
  }
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 0px;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: red;
`;

const AddToCartButton = styled.button`
  background-color: ${theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 5px;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em;
  height: 400px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media(max-width:768px){
    margin: 1em;
    height: 500px;
  }
`;
const CartEmptyMessage = styled.div`
  margin: auto;
  height: 300px;

  p {
    font-size: 25px;
    text-align: center;
    margin: -60px;
  }

  @media (max-width: 768px) {
    margin: -40px;
  }
`;

const WishlistHeading = styled.h1`
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 5px;
  }
`;

export {
  CardContainer,
  CardDiv,
  CartEmptyMessage,
  WishlistHeading,
  AddToCartButton,
  CloseIcon,
  IconContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
};
