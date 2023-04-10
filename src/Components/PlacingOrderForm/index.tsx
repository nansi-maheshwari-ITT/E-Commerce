import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Configuration/Configuration";
import { useDispatch } from "react-redux";
import { doc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { saveCartItems } from "../../Redux/Actions";
import {
  Button,
  Message,
  PaymentOption,
  RadioButton,
  Input,
  FormContainer,
  FieldsContainer,
  FieldGroup,
  Label,
} from "./PlacingOrderFormStyle";
import {
  FormFields,
  Field,
  PlacingOrderProps,
} from "./PlacingOrderFormInterface";
import { inputFields } from "./Constant";
import cartItem from "../../Redux/Reducer/SetCartItems";
import { updateOrderHistoryInFirebase } from "../../Services/Services";

export const PlacingOrderForm: React.FC<PlacingOrderProps> = ({
  finalPrice,
  cartItems,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formFields, setFormFields] = useState<FormFields>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    paymentOption: "cod",
  });
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const fieldValue = event.target.value;
    setFormFields((prevFieldsData) => ({
      ...prevFieldsData,
      [fieldName]: fieldValue,
    }));
  };

  const handlePaymentOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const paymentOptionValue = event.target.value;
    setFormFields((prevFieldsData) => ({
      ...prevFieldsData,
      paymentOption: paymentOptionValue,
    }));
  };

  const handleConfirmOrder = async () => {
    const emptyFields = inputFields.filter((field) => !formFields[field.name]);
    if (emptyFields.length > 0) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      if (email) {
        updateOrderHistoryInFirebase(email, cartItems, formFields, finalPrice);
        dispatch(saveCartItems([]));
      }
    }
    navigate(`/orderplaced`);
  };

  return (
    <FormContainer>
      <form onSubmit={handleConfirmOrder}>
        <FieldsContainer>
          {inputFields.map((field) => (
            <FieldGroup key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                type={field.type}
                name={field.name}
                value={formFields[field.name]}
                onChange={(event) => handleFieldChange(event, field.name)}
              />
            </FieldGroup>
          ))}
        </FieldsContainer>
        <FieldGroup>
          <Label htmlFor="Payment Option">Payment Option</Label>
          <PaymentOption>
            <RadioButton
              id="Payment Option"
              type="radio"
              name="paymentOption"
              value="cod"
              checked={formFields.paymentOption === "cod"}
              onChange={handlePaymentOptionChange}
            />
            <span>Cash on Delivery</span>
          </PaymentOption>
          {formFields.paymentOption !== "card" && (
            <Message>Only Cash on Delivery is available</Message>
          )}
        </FieldGroup>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button type="submit">Confirm Order</Button>
      </form>
    </FormContainer>
  );
};
