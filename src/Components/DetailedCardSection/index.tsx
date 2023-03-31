import { useSelector } from "react-redux";
import { ProductDetailType } from "../../Screens/Home/HomeInterface";
import { useParams } from "react-router-dom";
import OfferIcon from "../../Assets/Images/OfferIcon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  DetailedProductWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  WishlistButton,
  AddToCartButton,
  OfferWrapper,RatingButton
} from "./DetailedCardSectionStyle";

const DetailedCardSection = () => {
  const { id } = useParams();
  const productId = parseInt(id ?? "");
  const productDetail = useSelector((state: ProductDetailType) =>
    state.productDetails.find((product) => product.id === productId)
  );

  return (
    <DetailedProductWrapper>
      <ProductImage src={productDetail?.imageurl} alt="product image" />
      <ProductInfoWrapper>
        <ProductName>{productDetail?.description}</ProductName>
		<RatingButton>{productDetail?.rating}<FontAwesomeIcon icon={faStar} /></RatingButton>
		<p className="product-offer">30% off Only for today</p>
        <ProductPrice>{`Price: ₹${productDetail?.price}`}</ProductPrice>
        <p>Detailed description goes here...</p>
		
        <div>
          <AddToCartButton>Add to Cart</AddToCartButton>
          <WishlistButton>Add to Wishlist</WishlistButton>
        </div>
		<OfferWrapper>
     
      
        {[...Array(4)].map((_, index) => (
			
			 
  <li key={index} >
  <img src={OfferIcon} width="18" height="18" />
    <span className="u8dYXW">Combo Offer</span>
    <span>Buy 3-4 items save 5%; Buy 5 or more save 7%</span>
    <a>See all products</a>
    <div ><span >T&amp;C</span></div>
  </li>
))}
     
	 </OfferWrapper>
      </ProductInfoWrapper>
    </DetailedProductWrapper>
  );
};

export default DetailedCardSection