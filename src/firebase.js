import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCihqnY1Yi1dITgLqcEV63pUMinVWbMfmw",
  authDomain: "quota-b0891.firebaseapp.com",
  projectId: "quota-b0891",
  storageBucket: "quota-b0891.appspot.com",
  messagingSenderId: "331478502731",
  appId: "1:331478502731:web:f3e24d9c2b55cd180a2cce",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export const logout = () => {
  auth.signOut();
};

export { app, auth, db };
