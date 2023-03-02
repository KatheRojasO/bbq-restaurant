import { initializeApp } from "firebase/app"; //project
import { getFirestore } from "firebase/firestore"; //database


const firebaseConfig = {
  apiKey: "AIzaSyCGz40Bp3taJpGtd5XcvMgxWcqayxybkuM",
  authDomain: "kathe-rojas-bbq-restaurant.firebaseapp.com",
  projectId: "kathe-rojas-bbq-restaurant",
  storageBucket: "kathe-rojas-bbq-restaurant.appspot.com",
  messagingSenderId: "965735159242",
  appId: "1:965735159242:web:82892da94e48368c936b33",
};

const firebase = initializeApp(firebaseConfig); //initialize projetc

export const database = getFirestore(firebase); //initialize database


