// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8uWta_h1Ao3eISLgCtEf_8QEH9yoH0CA",
    authDomain: "project-pie-95984.firebaseapp.com",
    projectId: "project-pie-95984",
    storageBucket: "project-pie-95984.appspot.com",
    messagingSenderId: "841294542928",
    appId: "1:841294542928:web:771f7eb2ceaf3ada0eb955",
    measurementId: "G-0J46EP5903"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
