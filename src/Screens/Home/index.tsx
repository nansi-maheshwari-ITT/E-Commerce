import { useEffect, useState } from "react";
import { CategorySelectionContainer } from "../../Components/CategorySelectionContainer";
import { ProductContainer } from "../../Components/ProductContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductDetailType } from "./HomeInterface";

export const Home = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const productDetail = useSelector(
    (state: ProductDetailType) => state.productDetails
  );
  const navigate = useNavigate();

  useEffect(() => {
    {
      productDetail.length > 0 && setIsDataLoading(false);
    }
  }, [productDetail]);

  const applyCategoryFilter = (value: string) => {
    navigate(`/product/${value}`);
  };

  return (
    <div>
      <CategorySelectionContainer 
        applyFilter={applyCategoryFilter}
      ></CategorySelectionContainer>
      {!isDataLoading && (
        <ProductContainer productDetails={productDetail}></ProductContainer>
      )}
    </div>
  );
};
