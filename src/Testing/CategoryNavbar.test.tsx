import { render, fireEvent } from "@testing-library/react";
import { CategoryNavbar } from "../Components/CategoryNavbar";

describe("CategorySelectionContainer", () => {
  const mockApplyFilter = jest.fn();

  it("renders category selection items correctly", () => {
    const { getByTestId, getByAltText, getByText } = render(
      <CategoryNavbar applyFilter={mockApplyFilter} />
    );

    const categorySelectionContainer = getByTestId("categorySelection");
    expect(categorySelectionContainer).toBeInTheDocument();

    const menCategoryImage = getByAltText("Men");
    expect(menCategoryImage).toBeInTheDocument();

    const womenCategoryImage = getByAltText("Women");
    expect(womenCategoryImage).toBeInTheDocument();

    const kidsCategoryImage = getByAltText("Kids");
    expect(kidsCategoryImage).toBeInTheDocument();

    const makeupCategoryImage = getByAltText("Makeup");
    expect(makeupCategoryImage).toBeInTheDocument();

    const electronicsCategoryImage = getByAltText("Electronics");
    expect(electronicsCategoryImage).toBeInTheDocument();

    const menCategoryLabel = getByText("Men");
    expect(menCategoryLabel).toBeInTheDocument();

    const womenCategoryLabel = getByText("Women");
    expect(womenCategoryLabel).toBeInTheDocument();

    const kidsCategoryLabel = getByText("Kids");
    expect(kidsCategoryLabel).toBeInTheDocument();

    const makeupCategoryLabel = getByText("Makeup");
    expect(makeupCategoryLabel).toBeInTheDocument();

    const electronicsCategoryLabel = getByText("Electronics");
    expect(electronicsCategoryLabel).toBeInTheDocument();
  });

  it("calls applyFilter function with correct value on category selection", () => {
    const { getByAltText } = render(
      <CategoryNavbar applyFilter={mockApplyFilter} />
    );

    const menCategoryImage = getByAltText("Men");
    fireEvent.click(menCategoryImage);
    expect(mockApplyFilter).toHaveBeenCalledWith("men");

    const womenCategoryImage = getByAltText("Women");
    fireEvent.click(womenCategoryImage);
    expect(mockApplyFilter).toHaveBeenCalledWith("women");

    const kidsCategoryImage = getByAltText("Kids");
    fireEvent.click(kidsCategoryImage);
    expect(mockApplyFilter).toHaveBeenCalledWith("kids");

    const makeupCategoryImage = getByAltText("Makeup");
    fireEvent.click(makeupCategoryImage);
    expect(mockApplyFilter).toHaveBeenCalledWith("makeup");

    const electronicsCategoryImage = getByAltText("Electronics");
    fireEvent.click(electronicsCategoryImage);
    expect(mockApplyFilter).toHaveBeenCalledWith("electronics");
  });
});
