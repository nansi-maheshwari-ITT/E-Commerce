import { CartEmptyMessage } from "./SearchedProductStyle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductContainer } from "../../Components/ProductContainer";
import { ProductDetailType } from "../Home/HomeInterface";

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
        <ProductContainer productDetails={filteredProducts} searchingProduct={product}></ProductContainer>
      ) : (
		<CartEmptyMessage>
         <h1>No products matched your search {product}</h1>
        </CartEmptyMessage>
       
      )}
    </>
  );
};
