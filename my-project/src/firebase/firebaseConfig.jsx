// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixOSUUt3MILpy-Yrq9xIgdnpbBtlEBek",
  authDomain: "crud-app-45df3.firebaseapp.com",
  projectId: "crud-app-45df3",
  storageBucket: "crud-app-45df3.appspot.com",
  messagingSenderId: "498978576860",
  appId: "1:498978576860:web:20e65b0b0e7e3642b8d719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;