// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU82z-0WWHertVQHMZVDCbG6WMhwxrihU",
  authDomain: "ntflix-media.firebaseapp.com",
  projectId: "ntflix-media",
  storageBucket: "ntflix-media.firebasestorage.app",
  messagingSenderId: "423454360546",
  appId: "1:423454360546:web:afe2db7a872aee81006fbb",
  measurementId: "G-NLCW4N324Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);