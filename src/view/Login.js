import { 
  templateViewLogin
} from "./templates/templateLogin.js";

import { 
  signIn,
  signInFacebook,
  signInGoogle, 
  signInTwitter, 
  passwordReset,
  updateNameUser,
  updatePhotoUser
} from "../firebase/auth.js"

import { 
  addErrorMessage, 
  addErrorInput, 
  removeErrorInput, 
  removeErrorMessage,
  UserNotExistCreate
} from "../lib/functions.js"

import {
  queryEmailUnique,
  saveUser
} from "../firebase/firestore.js"

let nombreUsuario,idUsuario,emailUsuario;
let nameUserForSigIn,idUserForSignIn,emailUserForSignIn;
let nameUserForTwitter,idUserForTwitter,emailUserForTwitter;
let nameUserForFacebook,idUserForFacebook,emailUserForFacebook;
 
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
        // e.preventDefault();
        //sharonnm2002@gmail.com
        signIn(email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                divElemt.querySelector("#inputUser").value = "";
                divElemt.querySelector("#inputPassword").value = "";

                console.log(user.email);
                console.log(user.emailVerified);
                if (user.emailVerified === false) {
                    console.log("correo no verificado");
                    window.location.hash = '#/Home';
                } else {
                    console.log("correo registrado y verificado");
                    window.location.hash = '#/Home';
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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

    //twiterrrrrr
    const loginTwitter = divElemt.querySelector("#loginTwitter");
    loginTwitter.addEventListener("click", () => {

        signInTwitter()
            //signInGoogleRedirectResult()
            .then((user) => {
                window.location.hash = '#/Home';
                console.log("iniciaste sesion con Twitter")
                console.log(user);
                console.log(user.user.displayName);
                console.log(user.user.email);
                console.log(user.user.photoURL);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })

    })

  btnLogin.addEventListener('click', () => {
    signIn(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        nameUserForSigIn = (user.displayName);
        idUserForSignIn = (user.uid);
        emailUserForSignIn = (user.email);
        console.log(user.emailVerified);
        console.log("idusuario de login",idUserForSignIn);

        let photo, frontPageURL, interests, location, socialNetwork;

          localStorage.setItem("IdUsuario", idUserForSignIn);
          localStorage.setItem("Nombre", nameUserForSigIn);
          localStorage.setItem("Correo", emailUserForSignIn);
          localStorage.setItem("photoURL", photo);
          localStorage.setItem("frontPageURL", frontPageURL);
          localStorage.setItem("interests", interests);
          localStorage.setItem("location", location);
          localStorage.setItem("socialNetwork", socialNetwork);


          UserNotExistCreate();

          async function UserNotExistCreate() {

            const idUsu = localStorage.getItem("IdUsuario");
            const disName = localStorage.getItem("Nombre");
            const emailUsu = localStorage.getItem("Correo");
            const photoURLUsu = localStorage.getItem("photoURL");
            const frontPageURLUsu = localStorage.getItem("frontPageURL");
            const interestsUsu = localStorage.getItem("interests");
            const locationUsu = localStorage.getItem("location");
            const socialNetworkUsu = localStorage.getItem("socialNetwork");


            const querySnapshote = await queryEmailUnique(emailUsu);
            if (querySnapshote.size > 0) {
              console.log("usuario registrado SIGN IN");
              nameUserForSigIn = "Usuario nuevo";
              await updatePhotoUser()
              await updateNameUser(nameUserForSigIn);
              await saveUser(idUsu, nameUserForSigIn, emailUsu, photoURLUsu, frontPageURLUsu, interestsUsu, locationUsu, socialNetworkUsu);
              
            } else {
              nameUserForSigIn = "Usuario nuevo";
              await updateNameUser(nameUserForSigIn);
              await saveUser(idUsu, nameUserForSigIn, emailUsu, photoURLUsu, frontPageURLUsu, interestsUsu, locationUsu, socialNetworkUsu);
              console.log("datos guardados SIGN IN");
            }

          }

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
        }
        else if (errorCode === 'auth/wrong-password') {
          removeErrorInput(containerInputPassword, 'error');
          removeErrorInput(containerInputEmail, 'error');
          removeErrorMessage(inactiveEmailErrorMessage, '');
          addErrorMessage(inactivePasswordErrorMessage, 'Email/contraseña incorrecta. ¿Olvidaste tu contraseña?');
          link.innerHTML = "Reestablecela";
          addErrorInput(containerInputPassword, 'error');
          reestablecer(email.value);
        }
        else if (errorCode === 'auth/user-not-found') {
          removeErrorInput(containerInputPassword, 'error');
          removeErrorInput(containerInputEmail, 'error');
          removeErrorMessage(inactiveEmailErrorMessage, '');
          addErrorMessage(inactivePasswordErrorMessage, 'Email/contraseña incorrecta. ¿Olvidaste tu contraseña?');
          link.innerHTML = "Reestablecela";
          addErrorInput(containerInputPassword, 'error');
          reestablecer(email.value);
        }
        else {
          link.innerHTML = "";
          removeErrorInput(containerInputPassword, 'error');
          removeErrorInput(containerInputEmail, 'error');
          removeErrorMessage(inactiveEmailErrorMessage, '');
          addErrorMessage(inactivePasswordErrorMessage, ' Ocurrió un error. Por favor, vuelva a escribir sus datos.')
        }
      })
  });

    const loginGmaiL = divElemt.querySelector("#loginGmail");
    loginGmaiL.addEventListener("click", () => {

        signInGoogle()
            //signInGoogleRedirectResult()
            .then((user) => {
                window.location.hash = '#/Home';
                console.log("iniciaste sesion con google")
                    //console.log(user);
                nombreUsuario = (user.user.displayName);
                emailUsuario = (user.user.email);
                idUsuario = user.user.uid;
                console.log("idusuario de login", idUsuario);
                // console.log(user.user.emailVerified);
                // console.log(user.user.photoURL);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })

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
        nombreUsuario=(user.user.displayName);
        emailUsuario=(user.user.email);
        idUsuario = (user.user.uid);
        console.log("idusuario de login",idUsuario);
      
        UserNotExistCreate(idUsuario, nombreUsuario, emailUsuario);
      
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

        UserNotExistCreate(idUserForFacebook, nameUserForFacebook, emailUserForFacebook);

      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  })

  return divElemt;
};
