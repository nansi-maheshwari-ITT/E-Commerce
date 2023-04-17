import styled from "styled-components";
import theme from "../../Theme";

const CategoryNavbarWrapper = styled.div`
  display: flex;
  height: 250px;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};

  @media (max-width: 768px) {
    height: 170px;
    width: 100%;
    font-size: 14px;
  }

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
    position: relative;
    transition: box-shadow 0.3s ease-in-out;
    cursor:pointer;

    @media (max-width: 768px) {
      height: 60px;
      width: 60px;
    }

    img {
      height: 100%;
      object-fit: contain;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -100%;
      left: 0;
      right: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      opacity: 0;
      pointer-events: none;
    }

    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

      &::after {
        transform: translateY(-100%);
        opacity: 1;
      }
    }
  }
}`;

export { CategoryNavbarWrapper };
