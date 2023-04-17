import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db, auth } from "../Configuration/Configuration";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SignUpFormInterface } from "../Screens/SignupPage/SignUpFormInterface";
import { LogInFormInterface } from "../Screens/LoginPage/LogInFormInterface";
import { infoDataType } from "../Screens/Home/HomeInterface";
import { cartItemType } from "../Screens/CartScreen/CartScreenInterface";
import { FormFields } from "../Components/PurchaseOrderForm/PurchaseOrderFormInterface";
import { debug } from "console";

export const createAccount = async (
  formData: SignUpFormInterface,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    await updateProfile(user, {
      displayName: formData.username,
    });
    setErrorMessage("Account is created successfully");
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    return true;
  } catch (error: any) {
    if (error.message == "Firebase: Error (auth/email-already-in-use).") {
      setErrorMessage("Account is already in use");
    } else if (
      error.message ==
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      setErrorMessage("Password should be atleast 6 characters");
    } else if (error.message == "Firebase: Error (auth/invalid-email).") {
      setErrorMessage("Invalid email address");
    } else {
      setErrorMessage("Unknown error while creating account");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    return false;
  }
};

export const createUserCollection = async (formData: SignUpFormInterface) => {
  try {
    const userCollectionRef = collection(db, "users");
    const userDocRef = doc(userCollectionRef, formData.email);
    const initialUserData = {
      email: formData.email,
      wishlistItems: [],
      cartItems: [],
      orderHistory: [],
    };
    await setDoc(userDocRef, initialUserData);
  } catch (error) {
    throw error;
  }
};

export const loginToAccount = async (
  formData: LogInFormInterface,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    setErrorMessage("Logged in successfully");
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    return user;
  } catch (error: any) {
    if (error.message == "Firebase: Error (auth/wrong-password).") {
      setErrorMessage("Invalid Password");
    } else {
      setErrorMessage("User does not exist");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }
};

export const fetchProductDetails = async () => {
  try {
    const dataSet = collection(db, "products");
    const query = await getDocs(dataSet);
    const data = query.docs.map((doc) => doc.data() as infoDataType);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchUsersDetails = async (email: string) => {
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

export const updateDataInFirebase = async (
  emailId: string,
  cartItems: cartItemType[],
  wishlistItems: infoDataType[]
) => {
  const userDocRef = doc(collection(db, "users"), emailId);

  try {
    await updateDoc(userDocRef, {
      cartItems: cartItems,
      wishlistItems: wishlistItems,
    });
  } catch (error) {
    throw error;
  }
};

export const updateWishlistDataInFirebase = async (
  emailId: string,
  wishlistItems: infoDataType[]
) => {
  const userDocRef = doc(collection(db, "users"), emailId);

  try {
    await updateDoc(userDocRef, {
      wishlistItems: wishlistItems,
    });
  } catch (error) {
    throw error;
  }
};

export const updateCartDataInFirebase = async (
  emailId: string,
  cartItems: cartItemType[]
) => {
  const userDocRef = doc(collection(db, "users"), emailId);
  try {
    await updateDoc(userDocRef, {
      cartItems: cartItems,
    });
  } catch (error) {
    throw error;
  }
};

export const updateOrderHistoryInFirebase = async (
  email: string,
  purchaserEmail: string,
  address: string,
  cartItems: cartItemType[],
  finalPrice: number
) => {
  const userCollectionRef = collection(db, "users");
  const userDocRef = doc(userCollectionRef, email);
  const newOrder = {
    orderId: Date.now().toString(36).substr(2, 9),
    email: purchaserEmail,
    address: address,
    purchasedProduct: cartItems,
    finalPrice: finalPrice,
  };
  await updateDoc(userDocRef, {
    orderHistory: arrayUnion(newOrder),
    cartItems: [],
  });
};
