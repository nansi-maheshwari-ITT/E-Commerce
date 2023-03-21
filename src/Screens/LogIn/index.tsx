import { InputField } from "../../Components/Atoms/InputField";
import { Link } from "react-router-dom";
import { LogInFormContainer } from "./LogInStyle";
import { AuthButton } from "../../Components/Atoms/AuthButton";
import { useState,useEffect } from "react";
import { LogInFormInterface } from "./LogInFormInterface";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const LogIn = () => {
	const [active, setActive] = useState(false);
	const [errorMessage,setErrorMessage]=useState("");
	const [formData,setFormData]=useState<LogInFormInterface>({
		email: "",
		password: "",
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
		  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			  email: formData.email,
			  password: formData.password,
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
    <LogInFormContainer>
      <div className={`form-container ${active && "active"}`}>
        <div className="form-heading">Log In</div>
        <form onSubmit={handleFormDataSubmit}>
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
          <AuthButton text="Log in"></AuthButton>
        </form>
		<p className="error-message">{errorMessage}</p>
        <p>
          Don't have an account?
          <Link to="/signup">Sign Up here</Link>
        </p>
      </div>
    </LogInFormContainer>
  );
};
