// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXzjP0pyJLDr1anzQMd5ZPQlJU4pNjhY",
  authDomain: "fantasyferment.firebaseapp.com",
  projectId: "fantasyferment",
  storageBucket: "fantasyferment.firebasestorage.app",
  messagingSenderId: "89488302023",
  appId: "1:89488302023:web:163e005e1d360f4e2e83e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);