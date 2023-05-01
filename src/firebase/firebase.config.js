// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqNqV9JA4FNG-dwldE6SuBU5Atv8oSJw",
  authDomain: "travel-guru-client-tailwind.firebaseapp.com",
  projectId: "travel-guru-client-tailwind",
  storageBucket: "travel-guru-client-tailwind.appspot.com",
  messagingSenderId: "851154168392",
  appId: "1:851154168392:web:399751808f827e4ce0067d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;