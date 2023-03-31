import styled from "styled-components";

const CategorySectionWrapper = styled.div`
  display: flex;
  height: 250px;
  margin: auto;
  align-items: center;
  justify-content: space-around;

  img {
    height: 55%;
    width: 10%;
    border-radius: 100%;
    object-fit: cover;
  }

  img:hover {
    border: 1px solid black;
  }
`;

export { CategorySectionWrapper };
