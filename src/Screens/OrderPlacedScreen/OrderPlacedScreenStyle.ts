import styled from "styled-components";
import theme from "../../Theme";

const OrderPlacedWrapper = styled.div`
  margin: auto;
  height: 400px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

p {
  font-size: 25px;
}
button{
  margin-top:20px;
  padding:10px ;
  width:20%;
  border-radius:5px;
  background-color:${theme.colors.primary};
  color:${theme.colors.background};
  font-weight:bold;
  border:none;

@media (max-width: 768px) {
  width: 40%;
  }

:hover{
	border:1px solid ${theme.colors.primary};
  background-color:${theme.colors.background};
  color:${theme.colors.primary};
}
`;

export { OrderPlacedWrapper };
