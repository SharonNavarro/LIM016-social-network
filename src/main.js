// Este es el punto de entrada de tu aplicacion

import { loginTemplate, RegistrarseTemplate } from './lib/index.js';


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { collection, query, where, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
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
//const auth = getAuth();



const login = document.getElementById('login');
login.innerHTML = loginTemplate();
/* const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log("saliste");
    })
}) */

btnLogin.addEventListener('click', loginEmail);

function loginEmail() {
    let email = document.getElementById("inputUser").value;
    let password = document.getElementById("inputPassword").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("siii valido");
            document.getElementById("inputUser").value = "";
            document.getElementById("inputPassword").value = "";

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


/*------LOGIN WITH GMAIL------*/

let loginGmail = document.getElementById("loginGmail");
const loginGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("google entro");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          
        });
}
loginGmail.addEventListener("click", loginGoogle, false)

/*------LOGIN WITH FACEBOOK------*/

let loginFacebook = document.getElementById("loginFacebook");
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
loginFacebook.addEventListener("click", loginAppFacebook, false)

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
            document.getElementById("inputUser").value = "";
            document.getElementById("inputPassword").value = "";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
//-------------------SECTION POSTS------------------------
const sectionPosts = document.getElementById("sectionPosts");
const posts = document.getElementById("posts")
const setupPosts = data => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
            console.log(post);
            const li = `
    <li class="list-group-item">
    <h3>${doc.titulo}</h3>
    <p>${doc.descripcion}</p>
    </li>

    `;
            html += li;
        });
        posts.innerHTML = html;
    } else {
        posts.innerHTML = " <p>logueate para ver las publicaciones</p> "
    }
}


//listar datos para usuarios autenticados
const auth = getAuth();
auth.onAuthStateChanged(user => {

    if (user) {
        const db = getFirestore();
         // fs.collection('posts')
          //  .get()
           // .then((snapshot)=>{
                //console.log(snapshot.docs);
               // setupPosts(snapshot.docs)
           // }) 

        const q = query(collection(db, "posts"));
        getDocs(q)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                });
            })


    } else {
        console.log("usuario no lgueado");
    }

})

//aqui empiezo de nuevo vamossss si se puede!!!!