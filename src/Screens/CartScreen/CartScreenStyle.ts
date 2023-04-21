import styled from "styled-components";
import theme from "../../Theme";
import EmptyCart from "../../Assets/Images/EmptyCart.gif";

interface CartPageContainerProps {
  className?: string;
}

const CartPageContainer = styled.div<CartPageContainerProps>`
  display: flex;
  flex-direction: row;
  margin: 20px;
  gap: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &.empty-cart {
    background-color: rgb(251 250 250);
    margin: 1px 0px;
  }
`;

const CartItemsContainer = styled.div`
  flex: 1;
  height: 550px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CartSummaryContainer = styled.div`
  flex: 0 0 300px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const CartSummaryTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: bold;
`;

const CartSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartTotalPrice = styled(CartSummaryItem)`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
  font-weight: bold;
`;

const CartEmptyMessage = styled.div`
  margin: auto;
  height: 350px;

  p {
    font-size: 25px;
    text-align: center;
    margin: -80px;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;
const PlaceOrderButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  font-weight: bold;

  :hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
  }
`;

const GoBackToCartButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  font-weight: bold;

  :hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
  }
`;

export {
  CartPageContainer,
  CartItemsContainer,
  CartSummaryContainer,
  CartSummaryTitle,
  CartSummaryItem,
  CartTotalPrice,
  CartEmptyMessage,
  PlaceOrderButton,
  GoBackToCartButton,
};
