import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCFfyOmRBf8ORnpQ7Rkx639Ycl1YsdwC0",
  authDomain: "metaloc-96f87.firebaseapp.com",
  projectId: "metaloc-96f87",
  storageBucket: "metaloc-96f87.firebasestorage.app",
  messagingSenderId: "887752423564",
  appId: "1:887752423564:web:b329b7db00be3d839ee3a9",
  measurementId: "G-R3KGM00QLS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
