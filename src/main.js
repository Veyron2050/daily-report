// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, addDoc} from "firebase/firestore";

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

// Cloud Firestoreの初期化

const db = getFirestore(app);

// Cloud Firestoreから取得したデータを表示する

const fetchHistoryData = async () => {
let tags = "";

//reportsコレクションのデータを取得
const querySnapshot = await getDocs(collection(db, "reports"));

// データをテーブル表の形式に合わせてHTMLに挿入
querySnapshot. forEach((doc) => {
console.log(`${doc. id} => ${doc. data()}`);
tags += `<tr><td>${doc.data().date}</td><td>${doc.data().name}</td><td>${doc.data().work}</td><td>${doc.data().comment}</td></tr>`
});
document.getElementById("js-history").innerHTML = tags;
};

// Cloud Firestoreから取得したデータを表示する
if (document.getElementById("js-history")) {
fetchHistoryData() ;
}


const submitData = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
try {
  const docRef = await addDoc(collection(db, "reports"), {
    date: formData.get("date"),
    name: formData.get("name"),
    work: formData.get("work"),
    comment: formData.get("comment")
  });
  console.log("Document written with ID: ", docRef.id);
 } catch (e) {
  console.error("Error adding document: ", e);
 }
}

if (document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", submitData);
};




