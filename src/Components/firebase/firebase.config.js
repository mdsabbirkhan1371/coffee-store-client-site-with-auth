// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtKgZz1t0tKHIlSg6dU6VPwvrJI84xngI",
  authDomain: "coffee-auth-6c54c.firebaseapp.com",
  projectId: "coffee-auth-6c54c",
  storageBucket: "coffee-auth-6c54c.appspot.com",
  messagingSenderId: "121238895576",
  appId: "1:121238895576:web:f7ee8ff9d689cb62a310ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;