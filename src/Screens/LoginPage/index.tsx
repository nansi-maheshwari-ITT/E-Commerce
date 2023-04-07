import { InputField } from "../../Components/Atoms/InputField";
import { Link, useNavigate } from "react-router-dom";
import { LogInFormContainer } from "./LogInStyle";
import { AuthButton } from "../../Components/Atoms/AuthButton";
import { useState, useEffect } from "react";
import { LogInFormInterface } from "./LogInFormInterface";
import { useDispatch } from "react-redux";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInUser, User } from "../../Redux/Actions";
import { UserStatusInterface } from "../../Components/Navbar/NavbarInterface";
import Notification from "../../Components/Notification/Notification";
import { loginToAccount } from "../../Services/Services";

export const LoginPage = () => {
  const [active, setActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<LogInFormInterface>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputFields = [
    {
      type: "email",
      id: "email",
      placeholder: "Enter Your email id",
      label: "Email",
      name: "email",
      value: formData.email,
    },
    {
      type: "password",
      id: "password",
      placeholder: "Enter Your password",
      label: "Password",
      name: "password",
      value: formData.password,
    },
  ];

  useEffect(() => {
    setActive(true);
    return () => {
      setActive(false);
    };
  }, []);

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: value,
    }));
  };

  const handleFormDataSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill all the fields");
    } else {
      const user = await loginToAccount(formData, setErrorMessage);
      if (user) {
        if (user.displayName && user.email) {
          saveUserInfoInRedux(user.email, user.displayName);
        }
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
  };

  const saveUserInfoInRedux = (email: string, displayName: string) => {
    localStorage.setItem("email", email);
    localStorage.setItem("userName", displayName);
    dispatch(
      signInUser({
        userName: displayName,
        emailId: email,
        isLoggedIn: true,
      })
    );
  };

  return (
    <LogInFormContainer>
      <div className={`form-container ${active && "active"}`}>
        <div className="form-heading">Log In</div>
        <form onSubmit={handleFormDataSubmit}>
          {inputFields.map((field) => (
            <InputField
              key={field.id}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              label={field.label}
              name={field.name}
              value={field.value}
              handleFormDataChange={handleFormDataChange}
            />
          ))}
          <AuthButton text="Log in"></AuthButton>
          {errorMessage && <Notification text={errorMessage}></Notification>}
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
