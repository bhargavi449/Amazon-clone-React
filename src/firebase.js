import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiKriMz0GH589_fON8nCZiwMeAvgGLa6I",
  authDomain: "app-clone-a9066.firebaseapp.com",
  databaseURL: "https://app-clone-a9066.firebaseio.com",
  projectId: "app-clone-a9066",
  storageBucket: "app-clone-a9066.appspot.com",
  messagingSenderId: "229029031560",
  appId: "1:229029031560:web:ba38a1f99b386e349b793d",
  measurementId: "G-8DBTYWBFMF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
