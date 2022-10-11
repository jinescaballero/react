// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyD_moWVyE-vdThZcza0pco_oizu3o65tNk",
    authDomain: "my-app-alegria.firebaseapp.com",
    projectId: "my-app-alegria",
    storageBucket: "my-app-alegria.appspot.com",
    messagingSenderId: "70106841248",
    appId: "1:70106841248:web:b962c01d13f745b34449c5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);