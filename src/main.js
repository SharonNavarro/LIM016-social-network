// Este es el punto de entrada de tu aplicacion

import { loginTemplate} from './lib/index.js';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getAuth, FacebookAuthProvider,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
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
 const auth= getAuth();

// aqui exportaras las funciones que necesites
const login = document.getElementById('login');

login.innerHTML = loginTemplate();

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click',()=>{
    auth.signOut().then(()=>{
        console.log("saliste");
    })
})

btnLogin.addEventListener('click', loginEmail);

function loginEmail() {
    const email = document.getElementById("inputUser").value;
    const password = document.getElementById("inputPassword").value;
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("siii entre");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}




let loginGmail = document.getElementById("loginGmail");

const loginGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
  });
}
loginGmail.addEventListener("click", loginGoogle, false)

/*------AUTH WITH FACEBOOK------*/
let loginFacebook = document.getElementById("loginFacebook");

const loginAppFacebook = () => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
}
loginFacebook.addEventListener("click", loginAppFacebook, false)