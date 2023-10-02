import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhpS8VH1iMK-FePfIdRDq21erNB9NWJYs",
  authDomain: "webstore-5cc18.firebaseapp.com",
  projectId: "webstore-5cc18",
  storageBucket: "webstore-5cc18.appspot.com",
  messagingSenderId: "604991023399",
  appId: "1:604991023399:web:fa9f6e33e7ea40a4ace102",
};
initializeApp(firebaseConfig);

const db = getFirestore();
export const colRef = collection(db, "store");

export const addUser = (userName: string, password: string) => {
  addDoc(colRef, {
    userName: userName,
    Password: password,
    Role: "User",
  }).then(() => {
    localStorage.User = userName;
  });
};
