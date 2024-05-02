// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId,
  apiKey: "AIzaSyAdl93kqAlPs1db5HL1wYiA5SawMSF-sh0",
  authDomain: "hackathon-3d193.firebaseapp.com",
  projectId: "hackathon-3d193",
  storageBucket: "hackathon-3d193.appspot.com",
  messagingSenderId: "57427326347",
  appId: "1:57427326347:web:8f5e687d4e266352066b8e",
  measurementId: "G-PJNBY3RSRN",
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GithubAuthProvider();
const analytics = getAnalytics(app);
export { db, auth, provider, analytics };
