import { LoginBtn, SignupBtn } from "./Constant";
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
          {LoginBtn}
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          {SignupBtn}
        </button>
      </div>
    </ComponentWrapper>
  );
};
