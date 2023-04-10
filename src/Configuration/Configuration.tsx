import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
const storage = getStorage(app);

export { db, storage };
