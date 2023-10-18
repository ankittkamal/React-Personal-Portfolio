import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "ankittkamal-d5e97.firebaseapp.com",
  projectId: "ankittkamal-d5e97",
  storageBucket: "ankittkamal-d5e97.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: "1:898505172831:web:f0fb41898cd5d017eab8ea",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
