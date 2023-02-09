// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCaaQT1XfyDwSKBfrO3bFx7EUvmGKlso20",
  authDomain: "chat-gpt-messenger-dabd6.firebaseapp.com",
  projectId: "chat-gpt-messenger-dabd6",
  storageBucket: "chat-gpt-messenger-dabd6.appspot.com",
  messagingSenderId: "871321269384",
  appId: "1:871321269384:web:7808db79a67120a67d5b3d",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
