import styled from "styled-components";
import theme from "../../Theme";

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;

  .error-message {
    color: ${theme.colors.error};
    margin: 0px 10px;
  }
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid gray;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
    box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.4);
  }
`;

const RadioButton = styled.input`
  margin-right: 8px;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Message = styled.p`
  color: red;
`;

const Button = styled.button`
  padding: 10px;
  width: 20%;
  border-radius: 4px;
  border: none;
  background-color: ${theme.colors.primary};
  color: white;
  cursor: pointer;
  margin: 20px 10px;

  &:hover {
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export {
  Button,
  Message,
  PaymentOption,
  RadioButton,
  Input,
  FormContainer,
  FieldsContainer,
  FieldGroup,
  Label,
};
