
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export function login() {
    const btnLogin = document.getElementById('btnLogin');

    btnLogin.addEventListener('click', loginEmail);
    function loginEmail() {
        let email = document.getElementById("inputUser").value;
        let password = document.getElementById("inputPassword").value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("siii valido", user);
                document.getElementById("inputUser").value = "";
                document.getElementById("inputPassword").value = "";
                window.location.replace('#/Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}

export function loginGoogle() {
    let loginGmail = document.getElementById("loginGmail");
    loginGmail.addEventListener("click", googleGmail)
    function googleGmail() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
            .then(window.location.replace('#/Home'))
            .then(redirect())
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("No se pudo iniciar sesion", error);
            });
    }
}
function redirect() {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {           
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;
            console.log("🚀 ~ file: main.js ~ line 48 ~ redirect ", displayName, email, photoURL, emailVerified)

        } else {
            console.log("Inicia sesion");
        }
    });


}
/* onAuthStateChanged(auth, (user) => {

    if (user) {
        window.location.replace("#/Home")
        const containerHeader = document.getElementById('containerHeader');
        containerHeader.innerHtml = header;

        const displayName = user.displayName;

        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        const uid = user.uid;
        console.log("🚀 ~ file: main.js ~ line 48 ~ redirect ", displayName, email, photoURL, emailVerified)
        window.location.replace("holaaa")
    } else {
        console.log("inicia sesion");
    }
});
 */




/* const auth = getAuth();
onAuthStateChanged(auth, (user) => {

    if (user) {
window.location.replace("#/Home")
     const containerHeader = document.getElementById('containerHeader');
     containerHeader.innerHtml=header;
     
        const displayName = user.displayName;

        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        const uid = user.uid;
        console.log("🚀 ~ file: main.js ~ line 48 ~ redirect ", displayName, email, photoURL, emailVerified)
          window.location.replace("holaaa") 
    } else {
        console.log("inicia sesion");
    }
}); */