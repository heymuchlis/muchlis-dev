import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from "firebase/app-check";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrOBKd0Yhx2GhwUUlEnqJI1tH7MsfxvDw",
  authDomain: "muchlisdev.firebaseapp.com",
  projectId: "muchlisdev",
  storageBucket: "muchlisdev.firebasestorage.app",
  messagingSenderId: "1089654573107",
  appId: "1:1089654573107:web:de8f0f5b31a3e98cdb3b46"
};

const RECAPTCHA_ENTERPRISE_SITE_KEY =
  "6LepX4ctAAAAANjpZvSb5pSeTXqWC4bCm6HtW0TW";

const app = initializeApp(firebaseConfig);

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_ENTERPRISE_SITE_KEY),
  isTokenAutoRefreshEnabled: true
});

export const db = getFirestore(app);
export const auth = getAuth(app);
