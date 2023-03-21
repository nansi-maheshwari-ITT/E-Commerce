import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage}  from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDe-4MGDHMKh27wdEQlSossiLRy_nXfNg0",
  authDomain: "e-commerce-app-489b3.firebaseapp.com",
  projectId: "e-commerce-app-489b3",
  storageBucket: "e-commerce-app-489b3.appspot.com",
  messagingSenderId: "307253857492",
  appId: "1:307253857492:web:61ed44fcc6dbd27c623f41",
  measurementId: "G-GKR1W43RP4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
