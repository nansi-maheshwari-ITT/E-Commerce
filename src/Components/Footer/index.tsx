import { FooterContainer } from "./FooterStyle";

import { categories } from "./Constant";

const Footer = () => {

  return (
    <FooterContainer>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.title}</h3>
          <div>
            {category.items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </FooterContainer>
  );
};

export default Footer;
