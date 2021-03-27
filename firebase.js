import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKgsKDSDQrZnHYkLwBFpvMP-gPtK3Z7mI",
  authDomain: "whatsapp-2-55747.firebaseapp.com",
  projectId: "whatsapp-2-55747",
  storageBucket: "whatsapp-2-55747.appspot.com",
  messagingSenderId: "607595608459",
  appId: "1:607595608459:web:faed608d3f620cc5ae178e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
