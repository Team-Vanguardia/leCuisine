// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/compat/app";

import firebase from "firebase";

//import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/compat/auth"

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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore()

export { auth }
export { db }

export function signup(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}