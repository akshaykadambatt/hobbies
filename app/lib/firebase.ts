import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig  = {
 apiKey: process.env.FIREBASE_APIKEY,
 authDomain: process.env.FIREBASE_AUTH_DOMAIN,
 projectId: process.env.FIREBASE_PROJECT_ID,
 storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
 appId: process.env.FIREBASE_APP_ID,
 measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const storage = getStorage(FirebaseApp)