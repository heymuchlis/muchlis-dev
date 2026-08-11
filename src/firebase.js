import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrOBKd0Yhx2GhwUUlEnqJI1tH7MsfxvDw",
  authDomain: "muchlisdev.firebaseapp.com",
  projectId: "muchlisdev",
  storageBucket: "muchlisdev.firebasestorage.app",
  messagingSenderId: "1089654573107",
  appId: "1:1089654573107:web:de8f0f5b31a3e98cdb3b46"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
