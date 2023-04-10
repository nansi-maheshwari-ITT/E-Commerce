export interface infoDataType {
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  imageurl: string;
  id: number;
  inCart: boolean;
  inWishlist: boolean;
}
export interface ProductDetailType {
  productDetails: infoDataType[];
}
