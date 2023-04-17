import styled from "styled-components";
import theme from "../../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardDiv = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 2px;
  background: ${theme.colors.secondary};
  h1 {
    margin-bottom: 4%;
    color: ${theme.colors.primary};
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterDiv = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  width: 10%;

  .close-icon {
    height: 25px;
    cursor: pointer;
  }
`;

const SidebarButton = styled.button`
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

const FilterIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.sidebar-open {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
  }
`;

const SidebarContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

const SidebarTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SidebarCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  color: #666;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PriceSlider = styled.input`
  width: 100%;
  margin-bottom: 16px;
`;

const RatingSlider = styled.input`
  width: 100%;
  margin-bottom: 16px;
`;

const ApplyFiltersButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 16px;
`;

const FilterLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;
export {
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
};
