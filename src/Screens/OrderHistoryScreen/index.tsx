import { useEffect, useState } from "react";
import { fetchUsersDetails } from "../../Services/Services";
import { cartItemType } from "../CartScreen/CartScreenInterface";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../../Assets/Images/EmptyCart.gif";
import { Oval } from "react-loader-spinner";
import {
  OrderHistoryContainer,
  OrderId,
  TotalAmount,
  TotalItemsContainer,
  TotalItemsDetailContainer,
  ItemContainer,
  TotalItems,
  PurchasedItems,
  ProductContainer,
  ProductDescription,
  ViewButton,
  LoaderContainer,
  OrderHistoryEmptyMessage,
} from "./OrderHistoryStyle";
import { OrderHistoryProps } from "./OrderHistoryInterface";
import { BackToHome, NoOrders, TotalPrice } from "./Constant";

export const OrderHistory = () => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = useState<OrderHistoryProps[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchOrderHistory = async () => {
    if (email) {
      const userData = await fetchUsersDetails(email);
      if (userData) {
        setOrderHistory(userData.orderHistory);
        setIsDataLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  return (
    <>
      {" "}
      {isDataLoading ? (
        <LoaderContainer data-testid="order-history-empty">
          <Oval />
        </LoaderContainer>
      ) : (
        <>
          {" "}
          {orderHistory.length > 0 ? (
            <OrderHistoryContainer>
              <TotalItemsContainer>
                <h3>{OrderId}</h3>
                <h3>{TotalItems}</h3>
                <h3>{PurchasedItems}</h3>
                <h3>{TotalPrice}</h3>
              </TotalItemsContainer>

              <TotalItemsDetailContainer>
                {orderHistory.map((order: OrderHistoryProps) => (
                  <ItemContainer key={order.orderId}>
                    <OrderId>{order.orderId}</OrderId>
                    <TotalItems>{order.purchasedProduct.length}</TotalItems>
                    <PurchasedItems>
                      <ProductContainer>
                        {order.purchasedProduct.map((product: cartItemType) => (
                          <ProductDescription key={product.id}>
                            {product.description}
                          </ProductDescription>
                        ))}
                      </ProductContainer>
                    </PurchasedItems>
                    <TotalAmount>Rs.{order.finalPrice}</TotalAmount>
                  </ItemContainer>
                ))}
              </TotalItemsDetailContainer>
              <ViewButton onClick={() => navigate("/")}>
                &lt; {BackToHome}
              </ViewButton>
            </OrderHistoryContainer>
          ) : (
            <OrderHistoryEmptyMessage data-testid="EmptyMessage">
              <div>
                {" "}
                <img src={EmptyCart}></img>
              </div>

              <p>{NoOrders}</p>
            </OrderHistoryEmptyMessage>
          )}
        </>
      )}
    </>
  );
};
