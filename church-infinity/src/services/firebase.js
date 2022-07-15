import firebase from "firebase/app";
import "firebase/firestore";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBewlUkD_OXciTAcegRbAUP8QLfw2GEQJc",
  authDomain: "church-infinity.firebaseapp.com",
  projectId: "church-infinity",
  storageBucket: "church-infinity.appspot.com",
  messagingSenderId: "955163799278",
  appId: "1:955163799278:web:cebeb7f5f3077ed767cdff",
  measurementId: "G-RJH2ZJQ3QE",
};
firebase.initializeApp(firebaseConfig);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
