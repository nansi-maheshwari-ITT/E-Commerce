import styled from "styled-components";
import theme from "../../Theme";

const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 50px auto;
  width: 70%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

 
`;

const TotalItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  align-items: center;
  justify-items: center;
  background-color: #c9c5c5;
  padding: 10px;

  h3 {
    margin: 0;
    text-align: center;
  }

  @media(max-width:768px){
 h3{
	font-size:11px;
 }
  }
`;

const TotalItemsDetailContainer = styled.div`
  height: 350px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c9c5c5;
    border-radius: 4px;
  }
  @media(max-width:768px){
 font-size:10px;
  }
`;

export const LoaderContainer=styled.div`
height:300px;
display:flex;
align-items:center;
justify-content:center;
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: #f1f1f1;
  margin-bottom: 2px;
`;

const ProductDescription = styled.p`
  margin: 0;
`;

const ViewButton = styled.button`
  background-color: ${theme.colors.primary};
  border: none;
  padding: 4px 10px;
  height: 30px;

  color: ${theme.colors.background};
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
    padding: 3px 8px;
    border: 1px solid ${theme.colors.primary};
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #c9c5c5;
  padding: 8px;
`;

const OrderId = styled.div`
  display: flex;
  justify-content: center;
`;

const TotalItems = styled.div`
  display: flex;
  justify-content: center;
`;

const PurchasedItems = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OrderHistoryEmptyMessage = styled.div`
  margin-bottom:40px;
  height: 300px;
  display:flex;
  flex-direction:column;
align-items:center;


  p {
    font-size: 25px;
    text-align: center;
    margin:-80px;
  }

  div{
	width:500px;
	hegiht:500px;
  }

  img{
    height:100%;
    width:100%;
  }
`;
export {OrderHistoryContainer,OrderHistoryEmptyMessage,OrderId,TotalAmount,TotalItemsContainer,TotalItemsDetailContainer,ItemContainer,TotalItems,PurchasedItems,ProductContainer,ProductDescription,ViewButton}