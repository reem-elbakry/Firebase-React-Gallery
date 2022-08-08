// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
//import firestore & storage sdk
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ_LxurdXV8U1PzAP3obrvXMiyiALeqH4",
  authDomain: "gallery-76fd6.firebaseapp.com",
  projectId: "gallery-76fd6",
  storageBucket: "gallery-76fd6.appspot.com",
  messagingSenderId: "671691853172",
  appId: "1:671691853172:web:09765a3de7a686081e3021",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services
const appStorage = firebase.storage();

const appFirestore = firebase.firestore();

export { appStorage, appFirestore };
