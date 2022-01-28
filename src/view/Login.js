import {
    templateViewLogin
} from "./templates/templateLogin.js";

import {
    signIn,
    signInFacebook,
    signInGoogle,
    signInTwitter,
    passwordReset
} from "../firebase/auth.js"

import {
    addErrorMessage,
    addErrorInput,
    removeErrorInput,
    removeErrorMessage,
    UserNotExistCreate,
    UserNotExistCreateWithEmailAndPassword
} from "../lib/functions.js"

let nombreUsuario, idUsuario, emailUsuario;
let nameUserForSigIn, idUserForSignIn, emailUserForSignIn;
let nameUserForTwitter, idUserForTwitter, emailUserForTwitter;
let nameUserForFacebook, idUserForFacebook, emailUserForFacebook;

export default () => {

    const viewLogin = templateViewLogin;



    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewLogin')
    divElemt.innerHTML = viewLogin;

    const email = divElemt.querySelector("#inputUser");
    const password = divElemt.querySelector("#inputPassword");
    const btnLogin = divElemt.querySelector('#btnLogin');
    const link = divElemt.querySelector('#link');

    const inactiveEmailErrorMessage = divElemt.querySelector('.inactiveEmailErrorMessage');
    const inactivePasswordErrorMessage = divElemt.querySelector('.inactivePasswordErrorMessage');
    const containerInputEmail = divElemt.querySelector('.containerInputEmail');
    const containerInputPassword = divElemt.querySelector('.containerInputPassword');

    btnLogin.addEventListener('click', () => {

        signIn(email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                nameUserForSigIn = (user.displayName);
                idUserForSignIn = (user.uid);
                emailUserForSignIn = (user.email);
                console.log(user.emailVerified);
                console.log("idusuario de login", idUserForSignIn);

                UserNotExistCreateWithEmailAndPassword(idUserForSignIn, emailUserForSignIn, nameUserForSigIn);

                divElemt.querySelector("#inputUser").value = "";
                divElemt.querySelector("#inputPassword").value = "";

                if (user.emailVerified === false) {
                    console.log("correo no verificado");

                } else {
                    console.log("correo registrado y verificado");
                    window.location.hash = '#/Home';
                }

            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                if (email.value === '' && password.value === '') {
                    addErrorMessage(inactiveEmailErrorMessage, 'Campo inválido.');
                    addErrorInput(containerInputEmail, 'error');
                    addErrorMessage(inactivePasswordErrorMessage, 'Campo inválido.');
                    addErrorInput(containerInputPassword, 'error');
                    link.innerHTML = "";
                } else if (password.value === '') {
                    addErrorMessage(inactivePasswordErrorMessage, 'Campo inválido. Por favor, escriba su contraseña.');
                } else if (email.value === '') {
                    link.innerHTML = "";
                    addErrorMessage(inactiveEmailErrorMessage, 'Campo inválido. Por favor, escriba su correo electrónico.');
                } else if (errorCode === 'auth/wrong-password') {
                    removeErrorInput(containerInputPassword, 'error');
                    removeErrorInput(containerInputEmail, 'error');
                    removeErrorMessage(inactiveEmailErrorMessage, '');
                    addErrorMessage(inactivePasswordErrorMessage, 'Email/contraseña incorrecta. ¿Olvidaste tu contraseña?');
                    link.innerHTML = "Reestablecela";
                    addErrorInput(containerInputPassword, 'error');
                    reestablecer(email.value);
                } else if (errorCode === 'auth/user-not-found') {
                    removeErrorInput(containerInputPassword, 'error');
                    removeErrorInput(containerInputEmail, 'error');
                    removeErrorMessage(inactiveEmailErrorMessage, '');
                    addErrorMessage(inactivePasswordErrorMessage, 'Email/contraseña incorrecta. ¿Olvidaste tu contraseña?');
                    link.innerHTML = "Reestablecela";
                    addErrorInput(containerInputPassword, 'error');
                    reestablecer(email.value);
                } else {
                    link.innerHTML = "";
                    removeErrorInput(containerInputPassword, 'error');
                    removeErrorInput(containerInputEmail, 'error');
                    removeErrorMessage(inactiveEmailErrorMessage, '');
                    addErrorMessage(inactivePasswordErrorMessage, ' Ocurrió un error. Por favor, vuelva a escribir sus datos.')
                }
            })
    });








    //Restablecer contraseña
    function reestablecer(email) {
        link.addEventListener("click", () => {
            passwordReset(email)
                .then(console.log("verifica tu correo"))

        })
    }

    //twiter
    const loginTwitter = divElemt.querySelector("#loginTwitter");
    loginTwitter.addEventListener("click", () => {

        signInTwitter()
            .then((user) => {
                window.location.hash = '#/Home';
                console.log("iniciaste sesion con Twitter")
                nameUserForTwitter = (user.user.displayName);
                idUserForTwitter = (user.user.uid);
                emailUserForTwitter = (user.user.email);
                console.log("idusuario de login", idUserForTwitter);

                UserNotExistCreate(idUserForTwitter, nameUserForTwitter, emailUserForTwitter);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })

    })

    //gmail
    const loginGmaiL = divElemt.querySelector("#loginGmail");

    loginGmaiL.addEventListener("click", () => {
        signInGoogle()
            .then((user) => {
                window.location.hash = '#/Home';
                console.log("iniciaste sesion con google")
                nombreUsuario = (user.user.displayName);
                emailUsuario = (user.user.email);
                idUsuario = (user.user.uid);
                photoUserGoogle = (user.user.photoURL);
                console.log("idusuario de login", idUsuario);

                UserNotExistCreate(idUsuario, nombreUsuario, emailUsuario, photoUserGoogle);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    })

    //facebook
    const loginFacebook = divElemt.querySelector("#loginFacebook");
    loginFacebook.addEventListener("click", () => {
        signInFacebook()
            .then((user) => {
                window.location.hash = '#/Home';
                console.log("iniciaste sesion con Facebook")
                nameUserForFacebook = (user.user.displayName);
                emailUserForFacebook = (user.user.email);
                idUserForFacebook = (user.user.uid);
                photoUserFacebook = (user.user.photoURL);

                UserNotExistCreate(idUserForFacebook, nameUserForFacebook, emailUserForFacebook, photoUserFacebook);

            })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    })

    return divElemt;

}