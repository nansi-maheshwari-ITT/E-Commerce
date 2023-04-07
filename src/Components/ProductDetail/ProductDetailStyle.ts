import styled from "styled-components";
import theme from "../../Theme";

const DetailedProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  margin: 30px auto;
`;

const ProductImage = styled.img`
  height: 400px;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 2px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
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
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
  }

  &:focus {
    outline: none;
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
  padding: 10px 20px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid ${theme.colors.quaternary};
    color: ${theme.colors.quaternary};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const OfferWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0px;
  font-size: 14px;
  line-height: 20px;

  img {
    margin-right: 8px;
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
  }

  .u8dYXW {
    font-weight: 500;
    margin-right: 8px;
  }

  .fGhUR2 {
    color: #2874f0;
    cursor: pointer;
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
