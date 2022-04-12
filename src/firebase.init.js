// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-Y_esFK5XO_wheV2018M7ZXGbXGpGHMU",
    authDomain: "emajhon-simple-565c8.firebaseapp.com",
    projectId: "emajhon-simple-565c8",
    storageBucket: "emajhon-simple-565c8.appspot.com",
    messagingSenderId: "617496396789",
    appId: "1:617496396789:web:e039aa46ca9b3b402856bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;