import { Field } from "./PurchaseOrderFormInterface";

export const inputFields: Field[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    value: "",
  },
  {
    label: "Phone no",
    name: "phone",
    type: "tel",
    value: "",
  },

  {
    label: "Pincode",
    name: "pincode",
    type: "number",
    value: "",
  },
  {
    label: "Address",
    name: "address",
    type: "text",
    value: "",
  },

  {
    label: "City/District",
    name: "city",
    type: "text",
    value: "",
  },
  {
    label: "State",
    name: "state",
    type: "text",
    value: "",
  },
];
