import { InputField } from "../../Components/Atoms/InputField";
import { Link, useNavigate } from "react-router-dom";
import { LogInFormContainer } from "./LogInStyle";
import { AuthButton } from "../../Components/Atoms/AuthButton";
import { useState, useEffect } from "react";
import { LogInFormInterface } from "./LogInFormInterface";
import { useDispatch } from "react-redux";
import { saveCartItems, saveWishlistItems } from "../../Redux/Actions";
import { db, auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInUser } from "../../Redux/Actions";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";

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

  const fetchUsersProductData = () => {
    if (formData.email) {
      const userDocRef = doc(collection(db, "users"), formData.email);
      getDoc(userDocRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          dispatch(saveCartItems(data.cartItems));
          dispatch(saveWishlistItems(data.wishlistItems));
        }
      });
    }
  };

  const handleFormDataSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill all the fields");
    } else {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log(user);
        setErrorMessage("Logged in successfully");
        localStorage.setItem("email", formData.email);
        dispatch(
          signInUser({
            userName: user.displayName,
            emailId: user.email,
            isLoggedIn: true,
          })
        );
        fetchUsersProductData();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error: any) {
        console.error(error.message);
        setErrorMessage(error.message);
      }
    }
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
