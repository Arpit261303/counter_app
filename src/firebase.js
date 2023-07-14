// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC26wAAZTHj0vP34QtKHnCT8lv5nRyXcV0",
  authDomain: "counting-app-cefe1.firebaseapp.com",
  projectId: "counting-app-cefe1",
  storageBucket: "counting-app-cefe1.appspot.com",
  messagingSenderId: "1098493183953",
  appId: "1:1098493183953:web:b4eeaf159325ef4416c2f0",
  measurementId: "G-G6JS6V6355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};
