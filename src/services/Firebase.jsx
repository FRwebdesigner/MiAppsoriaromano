import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZbsiYe7bgbKNgEDFlexvJG3vH3sqDNAA",
  authDomain: "miapp-c2e9c.firebaseapp.com",
  projectId: "miapp-c2e9c",
  storageBucket: "miapp-c2e9c.firebasestorage.app",
  messagingSenderId: "644225240823",
  appId: "1:644225240823:web:7a55badd11d10751b70df2"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)