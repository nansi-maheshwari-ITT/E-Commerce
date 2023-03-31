import styled from "styled-components";
const CartPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  gap: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
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

  height: 200px;

  p {
    font-size: 25px;
    text-align: center;
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
  }