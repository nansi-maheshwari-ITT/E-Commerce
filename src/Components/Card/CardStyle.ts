import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
  background-color: #fff;
  box-shadow: #304231 0px 2px 6px;
  border-radius: 4px;
  margin-bottom: 4%;
  width: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 4px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #333;
  margin: 2px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 16px;
  justify-content: space-between;
`;

const Star = styled(FontAwesomeIcon)`
  color: #f8ce0b;
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .Wishlisted {
    pointer-events: none;
    border-color: #df4343;
    color: #df4343;
  }
`;

const AddToCartButton = styled.button`
  background-color: rgb(98 124 98);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const WishlistButton = styled.button`
  background-color: #fff;
  color: rgb(98 124 98);
  border: 2px solid rgb(98 124 98);
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

export { Card, Image, Description, Price, Rating, Star, ButtonGroup, AddToCartButton, WishlistButton }