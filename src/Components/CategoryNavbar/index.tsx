import MakeupImage from "../../Assets/Images/MakeupImage.jpg";
import MenProfile from "../../Assets/Images/MenProfile.jpg";
import WomenProfile from "../../Assets/Images/WomenProfile.jpg";
import KidProfile from "../../Assets/Images/KidProfile.jpg";
import Electronics from "../../Assets/Images/Electronics.jpg";
import { CategoryNavbarWrapper } from "./CategoryNavbarStyle";
import { CategoryNavbarProps } from "./CategoryNavbarInterface";

export const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
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
    <CategoryNavbarWrapper data-testid="categorySelection">
      {categories.map((category, index) => (
        <div key={index}>
          <div className="img-wrapper">
            <img
              src={category.image}
              alt={category.label}
              onClick={() => applyFilter(category.value)}
            />
          </div>
          <p>{category.label}</p>
        </div>
      ))}
    </CategoryNavbarWrapper>
  );
};
