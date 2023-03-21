import { SignUpFormContainer } from "./SignUpStyle";
import { InputField } from "../../Components/Atoms/InputField";
import { AuthButton } from "../../Components/Atoms/AuthButton";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import { SignUpFormInterface } from "./SignUpFormInterface";

export const SignUp = () => {
	const [active, setActive] = useState<boolean>(false);
	const [errorMessage,setErrorMessage]=useState("");
	const [formData,setFormData]=useState<SignUpFormInterface>({
		email: "",
		password: "",
		username:"",
	});

	useEffect(() => {
		setActive(true);
		return () => {
		  setActive(false);
		};
	  }, []);

	  const handleFormDataChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
		const {name,value}=event.target;
		setFormData((oldFormData)=>(
			{
				...oldFormData,
				[name]:value,
			}
		))
	  }


	  const handleFormDataSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let apiKey = "AIzaSyDe-4MGDHMKh27wdEQlSossiLRy_nXfNg0";
		try {
		  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			  email: formData.email,
			  password: formData.password,
			  displayName:formData.username,
			  returnSecureToken: true
			})
		  });
		  const data = await response.json();
		  console.log(data);
		} catch (error) {
		  console.log(error);
		}
	  }
	
	return (
		<SignUpFormContainer>
		    <div className={`form-container ${active && "active"}`}>
			<div className="form-heading">Create Account</div>
			<form onSubmit={handleFormDataSubmit}>
			<InputField
				type="text"
				id="username"
				placeholder="Enter Your username"
				label="User Name"
				name="username"
				value={formData.username}
				handleFormDataChange={handleFormDataChange}
			  ></InputField>
			  <InputField
				type="email"
				id="email"
				placeholder="Enter Your email id"
				label="Email"
				name="email"
				value={formData.email}
			handleFormDataChange={handleFormDataChange}
			  ></InputField>
			  <InputField
				type="password"
				id="password"
				placeholder="Enter Your password"
				label="Password"
				name="password"
				value={formData.password}
			handleFormDataChange={handleFormDataChange}
			  ></InputField>
			  <p className="error-message">{errorMessage}</p>
			  <AuthButton text="Create account "></AuthButton>
			</form>
	
			<p>
			  Already a member?
			  <Link to="/">Log in here</Link>
			</p>
		  </div>
		</SignUpFormContainer>
	  );
}
