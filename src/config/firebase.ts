import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ltaIOO-ZxNf65KX4Cb4uFxGpsHU-pD8",
  authDomain: "https://pdf-app-65a58.firebaseapp.com/",
  projectId: "pdf-app-65a58",
  // storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "1094167268194",
  appId: "1:1094167268194:android:6219209b6549c71ef7fa3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

