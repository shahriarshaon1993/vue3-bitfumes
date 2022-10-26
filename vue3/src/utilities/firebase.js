// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wv6WzhrrMBPOK6vxfoC6qeS5aTMtk_8",
  authDomain: "vue-full-course-d49f5.firebaseapp.com",
  projectId: "vue-full-course-d49f5",
  storageBucket: "vue-full-course-d49f5.appspot.com",
  messagingSenderId: "559636981319",
  appId: "1:559636981319:web:2f6dc7193bea2d34233362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);