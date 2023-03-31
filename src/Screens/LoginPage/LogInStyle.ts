import styled from "styled-components";

const LogInFormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(98 124 98), rgb(28 62 28));
  color: white;
  position: fixed;

  .form-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 35%;
    height: 75%;
    background-color: rgb(98 124 98);
    margin: 20px auto;
    padding-bottom: 20px;
	opacity: 0;
	transform: translateX(-20px);
	transition: all 0.3s ease-in-out;
  }
  .form-container.active {
    opacity: 1;
    transform: translateX(0);
  }

  .error-message{
	color:#7a0303;
}
  form {
    display: inline-block;
    width: 80%;
  }

  .form-heading {
    border-bottom: solid 1px #808d80;
    width: 70%;
    width: 70%;
    text-align: center;
    padding: 25px;
    font-size: 28px;
    font-weight: bold;
  }

  button {
    width: 90%;
    background-color: #2b362b;
    padding: 18px;
    border-radius: 5px;
    margin: 20px 0px;
    border: none;
    color: #c9c9c9;
    font-size: 15px;
    font-weight: bold;
  }

  a {
    margin: 0px 20px;
    color: #2b362b;
  }
`;

export { LogInFormContainer };
