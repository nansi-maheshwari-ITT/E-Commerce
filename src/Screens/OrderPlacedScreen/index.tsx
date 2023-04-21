import { useNavigate } from "react-router-dom";
import { OrderPlacedWrapper } from "./OrderPlacedScreenStyle";
import Notification from "../../Components/Notification";
import OrderPlacedIcon from "../../Assets/Images/OrderPlaced.gif";
import { ContinueShopping, OrderPlacedText } from "./Constant";

export const OrderPlaced = () => {
  const navigate = useNavigate();
  return (
    <OrderPlacedWrapper data-testid="order-placed-screen">
      <Notification text="Your order is successfully placed"></Notification>
      <img src={OrderPlacedIcon}></img>
      <p>{OrderPlacedText}</p>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        {ContinueShopping}
      </button>
    </OrderPlacedWrapper>
  );
};
