import { cartItemType } from "../../Screens/CartScreen/CartScreenInterface";

export interface Field {
	label: string;
	name: string;
	type: string;
	value: string;
  }
  
  export interface FormFields {
	[key: string]: string;
  }

  export interface PlacingOrderProps {
	cartItems:cartItemType[];
	finalPrice:number;
  }
  