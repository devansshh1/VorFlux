// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV88IB5hlGKHoPT8zVICsLwpnaGSJBp9g",
  authDomain: "vorflux-e03f9.firebaseapp.com",
  projectId: "vorflux-e03f9",
  storageBucket: "vorflux-e03f9.firebasestorage.app",
  messagingSenderId: "303811733446",
  appId: "1:303811733446:web:6edaa21c4b74ece82eb4c7",
  measurementId: "G-28HBE72ZNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()