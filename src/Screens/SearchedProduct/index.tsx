import { CartEmptyMessage } from "./SearchedProductStyle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductContainer } from "../../Components/ProductContainer";
import { ProductDetailType } from "../Home/HomeInterface";
import {  NoProductsMatched } from "./Constant";

export const SearchedProduct = () => {
  const { product } = useParams();
  const productDetail = useSelector(
    (state: ProductDetailType) => state.productDetails
  );
  const productName = product ?? "";
  const filteredProducts = productDetail.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  return (
    <>
      {filteredProducts.length > 0 ? (
        <ProductContainer
          productDetails={filteredProducts}
          searchingProduct={product}
        ></ProductContainer>
      ) : (
        <CartEmptyMessage data-testid="cartEmptyMessage">
          <h1>{NoProductsMatched} {product}</h1>
        </CartEmptyMessage>
      )}
    </>
  );
};
