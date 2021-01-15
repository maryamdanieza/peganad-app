import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);
require("firebase/auth");

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const firebaseStorage = firebase.storage();
const dbNetStatus = firebase.database();

// db collection query
const animalsQuery = db.collection("animals");
const colorsQuery = db.collection("colors");
const numbersQuery = db.collection("numbers");
const wordsQuery = db.collection("words");

// export utils/refs
export {
  animalsQuery,
  colorsQuery,
  wordsQuery,
  numbersQuery,
  db,
  auth,
  firebaseStorage,
  dbNetStatus,
};
