// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZC1muWJIIrVjT3ndgmFbTPT4grc-3n8Q",
  authDomain: "coffee-store-app-50954.firebaseapp.com",
  projectId: "coffee-store-app-50954",
  storageBucket: "coffee-store-app-50954.firebasestorage.app",
  messagingSenderId: "223518931501",
  appId: "1:223518931501:web:47291f9d29869442f4d6a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);