import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz4dEWFtd6z4llTxzrZI5TyslM0gFbWi0",
  authDomain: "app-react-7fbb7.firebaseapp.com",
  databaseURL: "https://app-react-7fbb7.firebaseio.com",
  projectId: "app-react-7fbb7",
  storageBucket: "app-react-7fbb7.appspot.com",
  messagingSenderId: "96554039661",
  appId: "1:96554039661:web:f32870195a48dbf0a40264",
  measurementId: "G-JMBL0EKJDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
