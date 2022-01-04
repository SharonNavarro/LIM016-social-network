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
 signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


import { 
    collection,
    query, 
    where, 
    getDocs, 
    getFirestore,
    doc, setDoc,
    addDoc 
} from  "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";



const firebaseConfig = {

    apiKey: "AIzaSyDLn-gLtWbPB0uo4YeVleQHoU--dUGFIjA",
    authDomain: "social-network-netcoins.firebaseapp.com",
    databaseURL: "https://social-network-netcoins-default-rtdb.firebaseio.com",
    projectId: "social-network-netcoins",
    storageBucket: "social-network-netcoins.appspot.com",
    messagingSenderId: "359714878827",
    appId: "1:359714878827:web:1856985dbf41196a7b882e"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);
const user= auth.currentUser;
const providerGoogle= new GoogleAuthProvider(app);
const providerFacebook= new FacebookAuthProvider(app);
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
    signOut,
};

// exportando firestore

export{ 
    db,
    collection,
    query, 
    where, 
    getDocs,
    doc, setDoc,
    addDoc 

};