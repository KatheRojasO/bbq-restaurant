import { initializeApp } from "firebase/app"; //project
import { getFirestore } from "firebase/firestore"; //database


const firebaseConfig = {
  apiKey: "",
  authDomain: "kathe-rojas-bbq-restaurant.firebaseapp.com",
  projectId: "kathe-rojas-bbq-restaurant",
  storageBucket: "kathe-rojas-bbq-restaurant.appspot.com",
  messagingSenderId: "",
  appId: "",
};

const firebase = initializeApp(firebaseConfig); //initialize projetc

export const database = getFirestore(firebase); //initialize database


