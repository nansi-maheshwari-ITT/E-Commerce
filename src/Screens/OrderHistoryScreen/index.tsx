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
  console.log(orderHistory);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  return (
    <>
      {" "}
      {isDataLoading ? (
        <LoaderContainer>
          <Oval />
        </LoaderContainer>
      ) : (
        <>
          {" "}
          {orderHistory.length > 0 ? (
            <OrderHistoryContainer>
              <TotalItemsContainer>
                <h3>Order ID</h3>
                <h3>Total Items</h3>
                <h3>Purchased Items</h3>
                <h3>Total Amount</h3>
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
                &lt; Back to Home
              </ViewButton>
            </OrderHistoryContainer>
          ) : (
            <OrderHistoryEmptyMessage data-testid="EmptyMessage">
              <div>
                {" "}
                <img src={EmptyCart}></img>
              </div>

              <p>You Haven't ordered anything yet !</p>
            </OrderHistoryEmptyMessage>
          )}
        </>
      )}
    </>
  );
};
