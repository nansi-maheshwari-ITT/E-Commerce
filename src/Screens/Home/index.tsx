import { useEffect, useState } from "react";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Firebase";
import { CategorySection } from "../../Components/CategorySection";
import { CardSection } from "../../Components/CardSection";
import { useDispatch, useSelector } from "react-redux";
import { saveProductDetails, saveCartItems } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import { ProductDetailType,infoDataType } from "./HomeInterface";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productDetail = useSelector(
    (state: ProductDetailType) => state.productDetails
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProductData = async () => {
    try {
      const dataSet = collection(db, "products");
      const query = await getDocs(dataSet);
      const data = query.docs.map((doc) => doc.data() as infoDataType);
      dispatch(saveProductDetails(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    {
      productDetail.length > 0 && setIsLoading(false);
    }
  }, [productDetail]);

  const applyFilter = (value: string) => {
    navigate(`/shop/${value}`);
  };

  return (
    <div>
      <CategorySection applyFilter={applyFilter}></CategorySection>
      {!isLoading && <CardSection productDetails={productDetail}></CardSection>}
    </div>
  );
};
