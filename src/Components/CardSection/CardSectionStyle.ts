import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


const CardDiv = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgb(98 124 98);

  h1 {
    margin-bottom: 4%;
	color:white;
  }
`;

export {CardDiv,Container,}