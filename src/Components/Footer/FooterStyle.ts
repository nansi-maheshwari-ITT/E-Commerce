import styled from "styled-components";
import theme from "../../Theme";

const FooterContainer = styled.footer`
  color: ${theme.colors.text};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 14px;
    h3 {
      font-size: 16px;
    }
  }
`;

export { FooterContainer };
