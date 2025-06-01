// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnhhStXSJJP2CgQp3EuNst0glrBvE4gkc",
  authDomain: "heartvisual-a69f2.firebaseapp.com",
  projectId: "heartvisual-a69f2",
  storageBucket: "heartvisual-a69f2.firebasestorage.app",
  messagingSenderId: "455040273469",
  appId: "1:455040273469:web:b8f1e69c2a7e6e0f6aee54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);