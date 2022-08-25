import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCDDmGA7GKdvdtSMkdj80xZ7iqbdXp6R7s",
  authDomain: "spiderversestore.firebaseapp.com",
  projectId: "spiderversestore",
  storageBucket: "spiderversestore.appspot.com",
  messagingSenderId: "295970328159",
  appId: "1:295970328159:web:3ce7d8ccf3a5ee87f915ea"
};


const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);