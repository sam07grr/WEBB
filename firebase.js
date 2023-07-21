
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getFirestore, collection, getDocs, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDek1aaKln3F_hqzB7j7qv6laydmct54hM",
    authDomain: "utp2023-cf543.firebaseapp.com",
    projectId: "utp2023-cf543",
    storageBucket: "utp2023-cf543.appspot.com",
    messagingSenderId: "134618220405",
    appId: "1:134618220405:web:bc50a824dc51f92592753c",
    measurementId: "G-XW0MELMD6Y"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const fs = getFirestore(app);

  export { auth, app, signInWithEmailAndPassword, getFirestore, collection, getDocs, setDoc, doc, getDoc, fs };
  
  