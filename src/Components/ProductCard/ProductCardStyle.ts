import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../Theme";

const Card = styled.div`
  background-color: ${theme.colors.background};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 4%;
  width: 250px;
  color: ${theme.colors.primary};
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  }

  :hover .cart-icon {
    display: inline-block;
    opacity: 1;
  }

  :hover .wishlist-icon {
    display: inline-block;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 220px;
  }

  .icon-container {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin: 7px auto;
    width: 95%;
  }
  .wishlist-icon {
    color: ${theme.colors.primary};
    background-color: white;
    border-radius: 14px;
    cursor: pointer;
    display: none;
    font-size: 18px;
    padding: 3px;
  }
  .cart-icon {
    color: ${theme.colors.primary};
    background-color: white;
    border-radius: 20px;
    padding: 5px 2px 22px 2px;
    cursor: pointer;
    display: none;
    font-size: 22px;
  }
`;

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    height: 150px;
  }

  &:hover {
    opacity:0.5;
    &::after {
      content: "";
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: bottom 0.3s ease-in-out;
      z-index: 1;
    }

    transform: translateY(-10px);
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.text};
  margin: 10px;
  font-weight: 500;
`;

const Price = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 10px;

  .original-price {
    color: grey;
    text-decoration: line-through;
    font-size: 10px;
  }
  .discount {
    color: red;
    font-size: 14px;
    font-weight: 100;
  }
`;

// Rating text styles
const RatingText = styled.span``;

const RandomReviews = styled.span`
  color: #666; /* Set color to a muted gray */
`;

const Rating = styled.div`
  display: flex;
  color: #817777;
  font-size: 14px;
  align-items: center;
  margin: 10px auto;
  padding: 0px 16px;
  justify-content: space-between;
  width: 63%;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    display: inline-flex;
    align-items: center;
  }
`;

const Star = styled(FontAwesomeIcon)`
  color: rgb(255 155 31);
  margin-right: 5px;
  height: 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Wishlisted {
    pointer-events: none;
    border-color: #df4343;
    color: #df4343;
  }
`;

const AddToCartButton = styled.button`
  background-color: ${theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.quaternary};
  }
`;

const WishlistButton = styled.button`
  background-color: #fff;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary};
    color: #fff;
  }
`;

const ViewButton = styled.button`
  background-color: ${theme.colors.primary};
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  :hover {
    padding: 9px;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
  }
`;

export {
  Card,
  Image,
  Description,
  Price,
  Rating,
  Star,
  ButtonGroup,
  AddToCartButton,
  WishlistButton,
  ViewButton,
  RatingText,
};
