import { InputFieldPropsType } from "./InputFieldPropsType";
import { Input,InputDiv } from "./InputFieldStyle";
export const InputField: React.FC<InputFieldPropsType> = ({
  type,
  id,
  placeholder,
  label,
  name,
  value,
  handleFormDataChange
}) => {
  return (
    <InputDiv>
      <label>{label}</label>
      <Input type={type} id={id} placeholder={placeholder} name={name} value={value} onChange={handleFormDataChange}/>
    </InputDiv>
  );
};
