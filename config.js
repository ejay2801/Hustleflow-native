
// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAesvps_B0juQZyAF1P3Eykv1xGnWD4QUw",
  authDomain: "hustle-and-flow-app.firebaseapp.com",
  projectId: "hustle-and-flow-app",
  storageBucket: "hustle-and-flow-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:exampleappid"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
