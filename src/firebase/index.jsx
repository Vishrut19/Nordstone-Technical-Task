import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIh1nvccokiqsCryNOxLXoVVxk6UEzMKI",
  authDomain: "nordstone-project-2e2c7.firebaseapp.com",
  projectId: "nordstone-project-2e2c7",
  storageBucket: "nordstone-project-2e2c7.appspot.com",
  messagingSenderId: "26463473471",
  appId: "1:26463473471:web:1f5b3b85b2ab6bdc108d8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
