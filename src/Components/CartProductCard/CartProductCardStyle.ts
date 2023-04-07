import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding:10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
 

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const CartItemDetails = styled.div`
  flex: 1;
`;

const CartItemName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CartItemPrice = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top:15px;
`;

const CartItemQuantityButton = styled.button`
  background-color: rgb(225 221 221);
  border: none;
  font-size: 16px;
  padding: 5px 14px;
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(237 232 232);
  }
`;

const CartItemRemoveButton = styled.button`
  background-color: rgb(223 82 72);
  color: white;
  border: none;
  font-size: 16px;
  padding: 5px 10px;
  margin-left: auto;
  cursor: pointer;


  &:hover {
    background-color: #d32f2f;
  }
`;

export {CartItem,CartItemQuantity,CartItemName,CartItemRemoveButton,CartItemDetails,CartItemQuantityButton,CartItemImage,CartItemPrice}