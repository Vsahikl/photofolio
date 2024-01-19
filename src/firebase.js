import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxCHyxHwNYTSqsc-PItYuzw_EfAwDPbe0",
  authDomain: "mysahil.firebaseapp.com",
  projectId: "mysahil",
  storageBucket: "mysahil.appspot.com",
  messagingSenderId: "779815938445",
  appId: "1:779815938445:web:461ee9a884624108c4f5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
