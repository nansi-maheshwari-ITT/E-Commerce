import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import VerificationIcon from "../../Assets/Images/VerificationIcon.jpg";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "./ProductCardPropsInterface";
import {
  ViewButton,
  Card,
  Image,
  Description,
  Price,
  Rating,
  Star,
  ButtonGroup,
  RatingText,
} from "./ProductCardStyle";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  
  const generateRandomReviews = (): number => {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  };
  const generateDiscount = (): number => {
    return Math.floor(Math.random() * (80 - 10 + 1));
  };
  const originalPrice: number = Math.floor(
    product.price / (1 - generateDiscount() / 100)
  );
  const viewDetailedProductPage = (productId: number) => {
    navigate(`/product/${product.category}/${product.id}`);
  };
  return (
    <Card key={product.id}>
      <Image
        src={product.imageurl}
        alt={product.description}
        onClick={() => viewDetailedProductPage(product.id)}
      />
      <Description>{product.description}</Description>
      <Rating>
        <RatingText>
          <Star icon={faStar as IconProp} /> {product.rating} |{" "}
          <img src={VerificationIcon}></img>{" "}
          <span> {generateRandomReviews()} Reviews</span>
        </RatingText>
      </Rating>
      <Price>
        Rs.{product.price} {"  "}
        <span className="original-price">
          {"   "}Rs.{originalPrice}
        </span>
        <span className="discount"> ({generateDiscount()}% off)</span>
      </Price>
      <ButtonGroup>
        <ViewButton
          onClick={() => {
            viewDetailedProductPage(product.id);
          }}
        >
          View
        </ViewButton>
      </ButtonGroup>
    </Card>
  );
};
