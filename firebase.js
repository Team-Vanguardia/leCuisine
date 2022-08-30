// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU63i12tPzhlSLOpiMnuhPNYN62v39S-4",
  authDomain: "lecuisine-59d15.firebaseapp.com",
  projectId: "lecuisine-59d15",
  storageBucket: "lecuisine-59d15.appspot.com",
  messagingSenderId: "579775863628",
  appId: "1:579775863628:web:a9ed5ad9b8b9e754494de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}