import styled from "styled-components";
import theme from "../../Theme";

const DetailedProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-around;
  margin: 30px auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ProductImage = styled.img`
  height: 400px;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 768px) {
    height: 320px;
    width: 150px;
    object-fit: none;
  }
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 10px;
    p {
      margin: 5px 0px;
    }
  }

  .product-offer {
    color: green;
  }

  .Wishlisted {
    pointer-events: none;
    background-color: ${theme.colors.quaternary};
  }

  .inCart {
    pointer-events: none;
    background-color: ${theme.colors.quaternary};
    border: none;
    color: ${theme.colors.background};
  }

  .quantity-selection-bar {
    margin: 10px 0px;
    color: ${theme.colors.text};
  }

  #quantity {
    margin: 0px 10px;
    width: 40px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 2px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0px;
  }
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const WishlistButton = styled.button`
  margin-right: 10px;
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.background};
    cursor: pointer;
    padding: 8px 20px;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 9px;
    padding: 4px;
  }
`;

const AddToCartButton = styled.button`
  margin-right: 10px;
  background-color: ${theme.colors.background};
  border: 2px solid ${theme.colors.primary};
  border-radius: 5px;
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  padding: 8px 20px;
  transition: all 0.2s ease;

  &:hover {
    border: none;
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
    cursor: pointer;
    padding: 10px 20px;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 9px;
    padding: 3px;
    margin-right: 6px;
  }
`;

const OfferWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0px;
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 10px;
    margin: 5px 0px;
  }

  img {
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }

  a {
    color: #2874f0;
    text-decoration: none;
    margin-left: 4px;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    display: flex;
    align-items: center;
    margin: 5px 0px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      font-size: 10px;
      margin: 1px 0px;
    }
  }

  .u8dYXW {
    font-weight: 500;
    margin-right: 8px;
  }

  .fGhUR2 {
    color: #2874f0;
    cursor: pointer;
  }

  span {
    white-space: pre-wrap;

    @media (max-width: 768px) {
      line-height: 1.2;
    }
  }
`;

const RatingButton = styled.button`
  color: #fff;
  padding: 2px 4px 2px 6px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  vertical-align: middle;
  background-color: rgb(255 155 31);
  border: none;
  width: 60px;
  margin: 5px 0px;

  svg {
    margin: 2px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    padding: 2px;
    width: 40px;
  }
`;

export {
  DetailedProductWrapper,
  ProductImage,
  RatingButton,
  ProductInfoWrapper,
  ProductName,
  OfferWrapper,
  ProductPrice,
  WishlistButton,
  AddToCartButton,
};
