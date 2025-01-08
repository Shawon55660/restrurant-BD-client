// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAi5F1Uec9I9YTbrIXjfCWb3f1fT5EH58",
  authDomain: "restrurant-28876.firebaseapp.com",
  projectId: "restrurant-28876",
  storageBucket: "restrurant-28876.firebasestorage.app",
  messagingSenderId: "339531537464",
  appId: "1:339531537464:web:f5615f78a77dc68466dacd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app)