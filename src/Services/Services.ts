import { collection,doc,setDoc, getDocs,getDoc,updateDoc,arrayUnion
	 } from "firebase/firestore";
import { db,auth } from "../Firebase";
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword  } from "firebase/auth";
import { SignUpFormInterface } from "../Screens/SignupPage/SignUpFormInterface";
import { LogInFormInterface } from "../Screens/LoginPage/LogInFormInterface";
import { infoDataType } from "../Screens/Home/HomeInterface";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";
import { FormFields } from "../Components/PlacingOrderForm/PlacingOrderFormInterface";



export const createAccount=async(formData:SignUpFormInterface,setErrorMessage:React.Dispatch<React.SetStateAction<string>>)=>{
	try {
		const { user } = await createUserWithEmailAndPassword(
		  auth,
		 formData.email,
		  formData.password
		);
		await updateProfile(user, {
			displayName: formData.username
		  });
		  setErrorMessage("Account is created successfully");
		 return true;
		
	  } catch (error: any) {
		setErrorMessage(error.message);
		return false;
	  }
}

export const createUserCollection = async (formData:SignUpFormInterface) => {
	try {
	
	  const userCollectionRef = collection(db, 'users');
	  const userDocRef = doc(userCollectionRef, formData.email);
	  const initialUserData = {
		email: formData.email,
		wishlistItems: [],
		cartItems: [],
		orderHistory:[]
	  };
	  await setDoc(userDocRef, initialUserData);
	} catch (error) {
	  console.error(error);
	}
  };


  export const loginToAccount=async(formData:LogInFormInterface,setErrorMessage:React.Dispatch<React.SetStateAction<string>>)=>{
	try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
		setErrorMessage("Logged in successfully");
		return user;
	}
	catch (error: any) {
        setErrorMessage(error.message);
      }
  }

  export const fetchProductData = async () => {
    try {
      const dataSet = collection(db, "products");
      const query = await getDocs(dataSet);
      const data =  query.docs.map((doc) => doc.data() as infoDataType);
	return data;  
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchUsersData = async (email: string) => {
	try {
	  const userDocRef = doc(collection(db, "users"), email);
	  const docSnapshot = await getDoc(userDocRef);
	  if (docSnapshot.exists()) {
		const data = docSnapshot.data();
		return data;
	  } 
	} catch (error) {
	  throw error;
	}
  };

  export const updateDataInFirebase = async (emailId:string,cartItems:cartItemType[],wishlistItems:infoDataType[]) => {
      const userDocRef = doc(collection(db, "users"), emailId);
      try {
		console.log(userDocRef);
        await updateDoc(userDocRef, { cartItems, wishlistItems });
        console.log("Cart and wishlist updated successfully");
      } catch (error) {
        console.error("Error updating cart and wishlist: ", error);
      }
    }

	export  const updateOrderHistoryInFirebase=async(email:string,cartItems:cartItemType[],formFields:FormFields,finalPrice:number)=>{
        const userCollectionRef = collection(db, "users");
        const userDocRef = doc(userCollectionRef, email);
        const newOrder = {
          orderId: Date.now().toString(36).substr(2, 9),
          ...formFields,
		  ...cartItems,
		  finalPrice
        };
        await updateDoc(userDocRef, {
          orderHistory: arrayUnion(newOrder),
          cartItems: [],
        })
	}
