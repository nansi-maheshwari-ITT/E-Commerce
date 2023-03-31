import { SignUpFormContainer } from "./SignUpStyle";
import { InputField } from "../../Components/Atoms/InputField";
import { AuthButton } from "../../Components/Atoms/AuthButton";
import {Link,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { SignUpFormInterface } from "./SignUpFormInterface";
import { collection, getDocs,doc,setDoc } from "firebase/firestore";
import { db,auth } from "../../Firebase";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";


export const SignupPage = () => {
	const [active, setActive] = useState<boolean>(false);
	const [errorMessage,setErrorMessage]=useState("");
	const [formData,setFormData]=useState<SignUpFormInterface>({
		email: "",
		password: "",
		username:"",
	});
	const navigate=useNavigate();

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
		if(!formData.email||!formData.password||!formData.username){
			setErrorMessage("Please fill all the fields");
		}else{
			try {
				const { user } = await createUserWithEmailAndPassword(
				  auth,
				 formData.email,
				  formData.password
				);
				await updateProfile(user, {
					displayName: formData.username
				  });
				  console.log(user);
				 
				  setErrorMessage("Signed up successfully");
				  createUserCollection ();
				  setTimeout(()=>{
					navigate('/login');
				  },2000);
			  } catch (error: any) {
				console.error(error.message);
				setErrorMessage(error.message);
			  }
		}
		
	  }

	  const createUserCollection = async () => {
		try {
		
		  const userCollectionRef = collection(db, 'users');
		  const userDocRef = doc(userCollectionRef, formData.email);
		  const initialUserData = {
			email: formData.email,
			wishlistItems: [],
			cartItems: []
		  };
		  await setDoc(userDocRef, initialUserData);
		  
		  console.log(`User collection created for ${formData.email}`);
		} catch (error) {
		  console.error(error);
		}
	  };
	
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
			  <Link to="/login">Log in here</Link>
			</p>
		  </div>
		</SignUpFormContainer>
	  );
}
