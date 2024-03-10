// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3V17I-0jJTm3URTlLcLSQEKNj2YK7cRQ",
  authDomain: "login-208de.firebaseapp.com",
  projectId: "login-208de",
  storageBucket: "login-208de.appspot.com",
  messagingSenderId: "753975540470",
  appId: "1:753975540470:web:5a7391fbf6de60b4008ad7",
  measurementId: "G-596XQXL4Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;