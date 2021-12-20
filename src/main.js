//import { header } from './lib/index.js';
import { changeTmp } from './view-controller/route.js';
import { login, loginGoogle} from './functions.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { collection, query, where, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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
function validateView() {
    if (containerHeader.innerHTML !== "") {
        console.log("entrooo");
        cerrarSesion();
    } else {
        console.log("esta bien ");
    }
}

const init = () => {
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeTmp(window.location.hash)
        validateView()
    });

    if (window.location.hash != "#/Home" || window.location.hash == "") {

       loginGoogle();
       
        login();
    }
    validateView()

}

window.addEventListener('load', init);

function cerrarSesion() {
    const containerHeader = document.getElementById('containerHeader')
    const container = document.getElementById('container')
    const btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener('click', () => {
        containerHeader.innerHTML = "";
        container.innerHTML = "";
        auth.signOut().then(() => {
            console.log("saliste");
            window.location.replace('#/')

        })
    })


}




//edirect();


/*------LOGIN WITH GMAIL------*/


//

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
            console.log("errorrr", errorCode, errorMessage, email);
        });
}
//loginFacebook.addEventListener("click", loginAppFacebook, false)

 const register = document.getElementById('linkRegistrate');
const sectionLogin = document.getElementById('sectionLogin');

register.addEventListener('click', registerUser);

function registerUser() {
    login.style.display = "none";
    sectionLogin.innerHTML = registrarseTemplate();
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

const db = getFirestore();
const sectionPosts = document.getElementById("sectionPosts");
const posts = document.getElementById("posts")

const setUpPosts = data => {
    if (data.length) {
        let html = "";
        data.forEach(doc => {
            const post = doc.data();
            const li = `
            <li class="list-group">
                <h3>${post.titulo}</h3>
                <p>${post.descripcion}</p>
            </li>
            `;
            html += li;
        });
        posts.innerHTML = html;
    } else {
        posts.innerHTML = '<p class=""> Login to see Posts</p>'
    }
}

/* onAuthStateChanged(auth, (user) => {
    if (user) {
        const intento = (collection(db, "posts"));
        getDocs(intento)
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
      })
      } else {
        setUpPosts([]);
      }
    }); */

//--------------------------------------------------------------------------

export { auth, getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult }
