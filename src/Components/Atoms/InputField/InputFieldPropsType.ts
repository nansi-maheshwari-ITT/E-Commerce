export interface InputFieldPropsType{
id:string;
placeholder:string;
type:string;
label:string;
name:string;
value:string;
handleFormDataChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}