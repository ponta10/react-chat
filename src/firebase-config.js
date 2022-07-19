// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACE5xGsqb5FD5HRal-7YbLnw-b0uybouI",
  authDomain: "react-chat-86c72.firebaseapp.com",
  projectId: "react-chat-86c72",
  storageBucket: "react-chat-86c72.appspot.com",
  messagingSenderId: "155736999673",
  appId: "1:155736999673:web:d9f8b270cde66798ae8428",
  measurementId: "G-PYBKX37KTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);