import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBlc1vfdR4lTXBZalRDoL2LLoqk_k9itsM",
  authDomain: "the-family-guardian.firebaseapp.com",
  projectId: "the-family-guardian",
  storageBucket: "the-family-guardian.appspot.com",
  messagingSenderId: "339693893957",
  appId: "1:339693893957:web:585d6f430050a0d28f262c",
  measurementId: "G-41DK0HCV9H",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase Cloud Messaging 초기화 및 서비스 참조 가져오기
export const messaging = getMessaging(app);
