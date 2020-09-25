import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAksLH1sOFWQ_ZVFG9G-Va9BRNPXb1CoGY",
  authDomain: "clients-phonebook.firebaseapp.com",
  databaseURL: "https://clients-phonebook.firebaseio.com",
  projectId: "clients-phonebook",
  storageBucket: "clients-phonebook.appspot.com",
  messagingSenderId: "463736085897",
  appId: "1:463736085897:web:3bff9c07e44d9438e7d558",
  measurementId: "G-DKFLQHVRXV",
};

export const db = firebase.initializeApp(firebaseConfig);
export const fs = firebase.firestore();
