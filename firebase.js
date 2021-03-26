// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzqggJRZ_g_6L89QbftqXF4s-iP4yS0TM",
  authDomain: "bayoskop-website.firebaseapp.com",
  projectId: "bayoskop-website",
  storageBucket: "bayoskop-website.appspot.com",
  messagingSenderId: "54925581769",
  appId: "1:54925581769:web:a610e888bb4b80f92fdc18",
  measurementId: "G-8HCXSW1JTX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
