// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAv8DMl5ZE372pAlYHouqOG5qCabrWDVbg",
  authDomain: "baby-bliss-4486d.firebaseapp.com",
  projectId: "baby-bliss-4486d",
  storageBucket: "baby-bliss-4486d.appspot.com",
  messagingSenderId: "119420123053",
  appId: "1:119420123053:web:d18996519aa3e29937d324",
  measurementId: "G-1V7VYB5LCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

