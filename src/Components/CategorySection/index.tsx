import MakeupImage from "../../Assets/Images/MakeupImage.jpg";
import MenProfile from "../../Assets/Images/MenProfile.jpg";
import WomenProfile from "../../Assets/Images/WomenProfile.jpg";
import KidProfile from "../../Assets/Images/KidProfile.jpg";
import Electronics from "../../Assets/Images/Electronics.jpg";
import { CategorySectionWrapper } from "./CategorySectionStyle";
import { CategorySectionProps } from "./CatergorySectionInterface";

export const CategorySection: React.FC<CategorySectionProps> = ({
  applyFilter,
}) => {
  const categories = [
    { label: "Men", value: "men", image: MenProfile },
    { label: "Women", value: "women", image: WomenProfile },
    { label: "Kids", value: "kids", image: KidProfile },
	{ label: "Makeup", value: "makeup", image: MakeupImage },
    { label: "Electronics ", value: "electronics", image: Electronics },
  ];
  return (
    <CategorySectionWrapper>
      {categories.map((category, index) => (
        <img
          key={index}
          src={category.image}
          alt={category.label}
          onClick={() => applyFilter(category.value)}
        />
      ))}
    </CategorySectionWrapper>
  );
};
