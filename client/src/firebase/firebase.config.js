// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw4-ccZr4Ke7cn-Y_FIWuBHEaTF46U-qU",
  authDomain: "book-store-55114.firebaseapp.com",
  projectId: "book-store-55114",
  storageBucket: "book-store-55114.appspot.com",
  messagingSenderId: "903175515614",
  appId: "1:903175515614:web:04b0a48754b498b225814f",
  measurementId: "G-JF2D1KQTC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;