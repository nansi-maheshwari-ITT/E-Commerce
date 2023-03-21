import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { LogIn } from "../../Screens/LogIn";
import { SignUp } from "../../Screens/SignUp";
import AddProductForm from "../AddProducts/AddProducts";

export const PageContainer = () => {
  return (
	<Router>
		<Routes>
			<Route path="/" element={<LogIn></LogIn>}></Route>
			<Route path="/signup" element={<SignUp></SignUp>}></Route>
			<Route path="/addProducts" element={<AddProductForm></AddProductForm>}></Route>
		</Routes>
	</Router>
  )
}
