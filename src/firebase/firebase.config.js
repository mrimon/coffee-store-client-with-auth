// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByPVl86A_bMMrCzC72smyCqTeCnrKvEmk",
  authDomain: "coffee-store-app-acb87.firebaseapp.com",
  projectId: "coffee-store-app-acb87",
  storageBucket: "coffee-store-app-acb87.firebasestorage.app",
  messagingSenderId: "484316039665",
  appId: "1:484316039665:web:135671b60699e645975c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)