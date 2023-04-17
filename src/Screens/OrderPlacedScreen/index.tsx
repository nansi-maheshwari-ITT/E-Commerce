import { useNavigate } from "react-router-dom";
import { OrderPlacedWrapper } from "./OrderPlacedScreenStyle";
import Notification from "../../Components/Notification";
import OrderPlacedIcon from "../../Assets/Images/OrderPlaced.gif";

export const OrderPlaced = () => {
  const navigate = useNavigate();
  return (
    <OrderPlacedWrapper data-testid="order-placed-screen">
      <Notification text="Your order is successfully placed"></Notification>
      <img src={OrderPlacedIcon}></img>
      <p>Your Order is Placed</p>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Continue Shopping
      </button>
    </OrderPlacedWrapper>
  );
};
