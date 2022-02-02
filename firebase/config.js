/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  getFirestore,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  orderBy,
  limit,
  FieldValue,
  arrayRemove,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {

  apiKey: "AIzaSyDLn-gLtWbPB0uo4YeVleQHoU--dUGFIjA",
  authDomain: "social-network-netcoins.firebaseapp.com",
  databaseURL: "https://social-network-netcoins-default-rtdb.firebaseio.com",
  projectId: "social-network-netcoins",
  storageBucket: "social-network-netcoins.appspot.com",
  messagingSenderId: "359714878827",
  appId: "1:359714878827:web:1856985dbf41196a7b882e",
  // eslint-disable-next-line no-dupe-keys
  storageBucket: "gs://social-network-netcoins.appspot.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const user = auth.currentUser;
const providerGoogle = new GoogleAuthProvider(app);
const providerFacebook = new FacebookAuthProvider(app);
const providerTwitter = new TwitterAuthProvider(app);

// exportando firebase auth
export {

  auth,
  user,
  app,
  providerFacebook,
  providerGoogle,
  providerTwitter,
  sendEmailVerification,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  getRedirectResult,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
};

// exportando firestore

export {
  db,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
  orderBy,
  limit,
  FieldValue,
  arrayRemove,
  arrayUnion,
};

// exportando storage

export {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
};
