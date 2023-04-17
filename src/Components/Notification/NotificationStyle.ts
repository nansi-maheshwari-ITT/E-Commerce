import styled, { keyframes } from "styled-components";
import theme from "../../Theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const NotificationWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 80px;
  padding: 0px 5px;
  right: 0;
  padding: 16px;
  background-color: rgb(113 203 76 / 89%);
  color: ${theme.colors.background};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }

  .show {
    display: inline-block;
  }

  .hide {
    display: none;
  }
`;
