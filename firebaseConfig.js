// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHuqcQC6fvNOrA1c-Pp4KZ1P162INrvuk",
  authDomain: "steady-strides-5a07c.firebaseapp.com",
  projectId: "steady-strides-5a07c",
  storageBucket: "steady-strides-5a07c.appspot.com",
  messagingSenderId: "495637271075",
  appId: "1:495637271075:web:f12f0ecc21434b59339796",
  measurementId: "G-Y45QEY5TBJ"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase}