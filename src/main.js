// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI00_M2nItl4c-c4hGqQGkF8l6dWaUxK4",
  authDomain: "daily-report-e01ed.firebaseapp.com",
  projectId: "daily-report-e01ed",
  storageBucket: "daily-report-e01ed.firebasestorage.app",
  messagingSenderId: "952647953775",
  appId: "1:952647953775:web:873ce0efa9f7269fb98c9a",
  measurementId: "G-4EWD2PJNP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);