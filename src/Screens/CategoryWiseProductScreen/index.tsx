import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductDetailType } from "../Home/HomeInterface";
import { useEffect, useState } from "react";
import { infoDataType } from "../Home/HomeInterface";
import { CardSection } from "../../Components/CardSection";

export const ProductScreen = () => {
  const [filteredProductDetail, setFilteredProductDetail] = useState<
    infoDataType[]
  >([]);
  const { value } = useParams();
  const productDetail = useSelector(
    (state: ProductDetailType) => state.productDetails
  );

  useEffect(() => {
    setFilteredProductDetail(productDetail);
    if (value !== "all") {
      const filteredProducts = productDetail.filter(
        (product) => product.category === value
      );
      setFilteredProductDetail(filteredProducts);
    }
  }, []);

  return <CardSection productDetails={filteredProductDetail}></CardSection>;
};
