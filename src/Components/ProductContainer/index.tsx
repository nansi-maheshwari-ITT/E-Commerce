import React from "react";
import { ProductContainerProps } from "./ProductContainerInterface";
import {
  CardDiv,
  Container,
  CardWrapper,
  FilterDiv,
  SidebarButton,
  SidebarCloseButton,
  SidebarContent,
  FilterContainer,
  FilterIcon,
  FilterLabel,
  ApplyFiltersButton,
  SidebarWrapper,
  RatingSlider,
  PriceSlider,
  SidebarTitle,
} from "./ProductContainerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faTimes,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { infoDataType } from "../../Screens/Home/HomeInterface";
import { FilterBtnText,RatingText,PriceText,SearchHeading,ProductsHeading,Filters } from "./Constant";

export const ProductContainer: React.FC<ProductContainerProps> = ({
  productDetails,
  searchingProduct,
}) => {
  const [price, setPrice] = useState(500);
  const [rating, setRating] = useState(2.5);
  const [filterApplied, setFilterApplied] = useState(false);
  const [filteredProductDetail, setFilteredProductDetail] = useState<
    infoDataType[]
  >([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const applyFilters = () => {
    const filteredProduct = productDetails.filter(
      (product) => product.rating >= rating && product.price <= price
    );
    setFilterApplied(true);
    setFilteredProductDetail(filteredProduct);
    handleSidebarClick();
  };

  return (
    <CardDiv data-testid="productContainer">
      {searchingProduct ? (
        <h1>{SearchHeading} "{searchingProduct}"</h1>
      ) : (
        <h1>{ProductsHeading}</h1>
      )}

      <CardWrapper>
        <FilterDiv>
          <SidebarButton onClick={handleSidebarClick}>
            <FilterIcon icon={faSlidersH as IconProp}></FilterIcon>
          </SidebarButton>
          {filterApplied && (
            <>
              <FontAwesomeIcon
                className="close-icon"
                icon={faClose as IconProp}
                onClick={() => {
                  setFilterApplied(false);
                }}
              ></FontAwesomeIcon>
            </>
          )}
        </FilterDiv>

        <SidebarWrapper
          className={isSidebarOpen ? "sidebar-open" : "sidebar-closed"}
        >
          <SidebarContent>
            <SidebarTitle>{Filters}</SidebarTitle>
            <SidebarCloseButton onClick={handleSidebarClick}>
              <FontAwesomeIcon icon={faTimes as IconProp} />
            </SidebarCloseButton>
            <FilterContainer>
              <FilterLabel>{PriceText}{price}</FilterLabel>
              <PriceSlider
                type="range"
                min="100"
                max="6000"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
            </FilterContainer>
            <FilterContainer>
              <FilterLabel>{RatingText}{rating.toFixed(1)}</FilterLabel>
              <RatingSlider
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
              />
            </FilterContainer>

            <ApplyFiltersButton onClick={applyFilters}>
             {FilterBtnText}
            </ApplyFiltersButton>
          </SidebarContent>
        </SidebarWrapper>
        <Container>
          {filterApplied
            ? filteredProductDetail.map((product, index) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))
            : productDetails.map((product, index) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
        </Container>
      </CardWrapper>
    </CardDiv>
  );
};
