// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
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
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();

export { auth };