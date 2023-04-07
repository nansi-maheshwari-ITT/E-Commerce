import styled from "styled-components";
import theme from "../../Theme";

const CategorySelectionContainerWrapper = styled.div`
  display: flex;
  height: 250px;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 33.33%;
  }

  .img-wrapper {
    height: 125px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  img {
    height: 100%;
    object-fit: contain;
  }

  .img-wrapper:hover {
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  }
`;

export { CategorySelectionContainerWrapper };
