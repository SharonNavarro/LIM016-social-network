// Este es el punto de entrada de tu aplicacion

import { loginTemplate, RegistrarseTemplate } from './lib/index.js';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, FacebookAuthProvider,signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
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
const auth = getAuth();


const login = document.getElementById('login');
login.innerHTML = loginTemplate();
const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log("saliste");
    })
})

btnLogin.addEventListener('click', loginEmail);

function loginEmail() {
    const email = document.getElementById("inputUser").value;
    const password = document.getElementById("inputPassword").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("siii valido");
            email.innerHTML="";
            password.innerHTML="";           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


/*------LOGIN WITH GMAIL------*/

/* let loginGmail = document.getElementById("loginGmail");
const loginGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          
        });
}
loginGmail.addEventListener("click", loginGoogle, false) */

/*------LOGIN WITH FACEBOOK------*/

/* let loginFacebook = document.getElementById("loginFacebook");
const loginAppFacebook = () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email);
        });
}
loginFacebook.addEventListener("click", loginAppFacebook, false) */

const register = document.getElementById('linkRegistrate');
const sectionLogin = document.getElementById('sectionLogin');

register.addEventListener('click', registerUser);

function registerUser() {
    login.style.display = "none";
    sectionLogin.innerHTML = RegistrarseTemplate();
    const btnRegister = document.getElementById('btnRegister');
    btnRegister.addEventListener('click', registerEmail);
}

function registerEmail() {
 
        const email = document.getElementById("inputUserRegister").value;
        const password = document.getElementById("inputPasswordRegister").value;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("siii entre");
                email.reset();
                password.reset();           
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
}
