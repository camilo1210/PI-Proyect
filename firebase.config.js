// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtincaLZ6JNujUu80ZxcydcNBoJbQ9g0Y",
  authDomain: "heartvisuals-fbcb4.firebaseapp.com",
  projectId: "heartvisuals-fbcb4",
  storageBucket: "heartvisuals-fbcb4.firebasestorage.app",
  messagingSenderId: "692980784644",
  appId: "1:692980784644:web:7f5f49e8f63063a83d9f51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);