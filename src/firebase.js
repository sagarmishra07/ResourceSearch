import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhYZ-Ko4bYr9pEyDiquXRMGu8DGr-M_yk",
  authDomain: "resourcesearch-dad50.firebaseapp.com",
  projectId: "resourcesearch-dad50",
  storageBucket: "resourcesearch-dad50.appspot.com",
  messagingSenderId: "991920636489",
  appId: "1:991920636489:web:7bb7103510bf3c8fb27598",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export const logout = () => {
  auth.signOut();
};

export { app, auth, db };
