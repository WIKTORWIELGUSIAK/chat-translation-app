import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXPY7NTyIPDkvvN9xr9F5bxwhWJgoRSus",
  authDomain: "chat-app-8639a.firebaseapp.com",
  projectId: "chat-app-8639a",
  storageBucket: "chat-app-8639a.appspot.com",
  messagingSenderId: "518950730649",
  appId: "1:518950730649:web:17a30b194ff5b16918f108",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
