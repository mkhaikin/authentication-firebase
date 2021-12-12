import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC5MkbeSHbWqnmbziLkE9dgMz6BmAiniw",
  authDomain: "react-firebase-auth-42cdc.firebaseapp.com",
  projectId: "react-firebase-auth-42cdc",
  storageBucket: "react-firebase-auth-42cdc.appspot.com",
  messagingSenderId: "446977423162",
  appId: "1:446977423162:web:02fc999697da537d220203",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;