// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDg7KeAmPxSTdkCBri_AKZbzfGQZ9Hmbfs",
  authDomain: "plmdatabase.firebaseapp.com",
  projectId: "plmdatabase",
  storageBucket: "plmdatabase.firebasestorage.app",
  messagingSenderId: "664618022699",
  appId: "1:664618022699:web:722ebc9c86b55f83c0376e"
  // no databaseURL needed for Firestore
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function submitScore(name, score) {
  const scoresCol = collection(db, 'scores');
  await addDoc(scoresCol, {
    name,
    score,
    timestamp: Date.now()
  });
}

// Make submitScore global if you want to call it from HTML
window.submitScore = submitScore;