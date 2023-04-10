import styled from "styled-components";
import theme from "../../../Theme";

const Input = styled.input`
  padding: 18px;
  display: block;
  border-radius: 5px;
  background-color: ${theme.colors.secondary};
  margin: 5px 0px;
  border: none;
  width: 80%;

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 12px;
  }
`;

const InputDiv = styled.div`
  margin: 25px 0px;
  text-align: left;
`;

export { Input, InputDiv };
