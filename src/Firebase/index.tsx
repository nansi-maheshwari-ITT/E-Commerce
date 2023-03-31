import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {initializeFirestore} from 'firebase/firestore';
import {getStorage}  from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDe-4MGDHMKh27wdEQlSossiLRy_nXfNg0",
  authDomain: "e-commerce-app-489b3.firebaseapp.com",
  projectId: "e-commerce-app-489b3",
  storageBucket: "e-commerce-app-489b3.appspot.com",
  appId: "1:307253857492:web:61ed44fcc6dbd27c623f41",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = initializeFirestore(app, {
	experimentalAutoDetectLongPolling: true
  })
const storage = getStorage(app);

export { db, storage };
