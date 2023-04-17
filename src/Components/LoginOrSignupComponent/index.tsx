import React from "react";
import { ComponentWrapper } from "./LoginOrSignupStyle";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../Assets/Images/LoginImage.gif";

export const LoginOrSignup = () => {
  const navigate = useNavigate();
  return (
    <ComponentWrapper>
      <img src={LoginImage} alt="" />
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
      </div>
    </ComponentWrapper>
  );
};
