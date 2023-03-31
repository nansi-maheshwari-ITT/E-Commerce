export interface infoDataType {
	name: string;
	category: string;
	description: string;
	price: number;
	rating: number;
	imageurl: string;
	id: number;
  }
  export interface ProductDetailType {
	productDetails: infoDataType[];
  }
  