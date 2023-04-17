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
} from "./PurchaseOrderFormStyle";
import {
  FormFields,
  Field,
  PurchaseOrderProps,
} from "./PurchaseOrderFormInterface";
import { inputFields } from "./Constant";
import { updateOrderHistoryInFirebase } from "../../Services/Services";
import Notification from "../Notification";

export const PurchaseOrderForm: React.FC<PurchaseOrderProps> = ({
  finalPrice,
  cartItems,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formFields, setFormFields] = useState<FormFields>({
    email: "",
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

  const handleConfirmOrder = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event?.preventDefault();
    const emptyFields = inputFields.filter((field) => !formFields[field.name]);
    if (emptyFields.length > 0) {
      setErrorMessage("Please fill in all fields.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formFields.email)) {
        setErrorMessage("Please enter a valid email address.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        return;
      }
      const telephonePattern = /^\d{10}$/;
      if (!telephonePattern.test(formFields.phone)) {
        setErrorMessage("Please enter a valid 10-digit telephone number.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        return;
      }
      const pincodePattern = /^\d{6}$/;
      if (!pincodePattern.test(formFields.pincode)) {
        setErrorMessage("Please enter a valid pincode");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
      if (email) {
        updateOrderHistoryInFirebase(
          email,
          formFields.email,
          formFields.address,
          cartItems,
          finalPrice
        );
        dispatch(saveCartItems([]));
      }
      navigate(`/orderplaced`);
    }
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
        {errorMessage && <Notification text={errorMessage} />}
        <Button type="submit">Confirm Order</Button>
      </form>
    </FormContainer>
  );
};
