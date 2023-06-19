// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqhZcqReEKULjmUYxCEkubJzhDv1FoPj4",
  authDomain: "borgeswingsba-edbc3.firebaseapp.com",
  projectId: "borgeswingsba-edbc3",
  storageBucket: "borgeswingsba-edbc3.appspot.com",
  messagingSenderId: "182896632498",
  appId: "1:182896632498:web:407fd79fae771a9e701fab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
