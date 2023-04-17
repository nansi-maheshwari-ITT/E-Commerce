import { useEffect, useState } from "react";
import { CategoryNavbar } from "../../Components/CategoryNavbar";
import { ProductContainer } from "../../Components/ProductContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductDetailType } from "./HomeInterface";
import { Oval } from  'react-loader-spinner'
import {
  fetchProductDetails,
  fetchUsersDetails,
  updateDataInFirebase,
} from "../../Services/Services";
import { useDispatch } from "react-redux";
import { saveCartItems, saveWishlistItems } from "../../Redux/Actions";
import { LoaderContainer } from "./HomeStyle";

export const Home = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const productDetail = useSelector(
    (state: ProductDetailType) => state.productDetails
  );
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    if (email) {
      const userData = await fetchUsersDetails(email);
      if (userData) {
        dispatch(saveCartItems(userData.cartItems));
        dispatch(saveWishlistItems(userData.wishlistItems));
      }
    }
  };

  useEffect(() => {
    {
      productDetail.length > 0 && setIsDataLoading(false);
    }
    fetchUserData();
  }, [productDetail]);

  const applyCategoryFilter = (value: string) => {
    navigate(`/product/${value}`);
  };

  return (
    <div>
      <CategoryNavbar applyFilter={applyCategoryFilter}></CategoryNavbar>
      
      {isDataLoading?  
      <LoaderContainer><Oval/></LoaderContainer>
:(
        <ProductContainer productDetails={productDetail}></ProductContainer>
      )}
    </div>
  );
};
