import { signIn, signInFacebook, userState, signInGoogle, signInTwitter, passwordReset } from "../firebase/auth.js"
import { addErrorMessage, addErrorInput, removeErrorInput, removeErrorMessage } from "../lib/functions.js"

export default () => {
  const viewLogin = `
    <div class="containerLogin">
    <div class="sectionWelcome">
    </div>
      <div class="sectionLogin" id="sectionLogin">

        <div class="login" id="login">  

          <div class="containerInputs">

          <div class="icom">  
          <i class="fab fa-bitcoin"></i>
          </div>  

            <h1 >Netcoins</h1>

            <div class="containerInputEmail">
              <i class="fas fa-envelope"></i>
              <input class="inputUser" id="inputUser" name="email" type="text" placeholder="Correo electronico">
            </div>
            <div class="inactiveEmailErrorMessage">
              <i class="fas fa-exclamation-circle"></i>
              <small>Error Message</small>
            </div>

            <div class="containerInputPassword">
              <i class="fas fa-key"></i>
              <input type="password" class="inputPassword" name="password" id="inputPassword" type="text" placeholder="Contraseña">
            </div>
            <div class="inactivePasswordErrorMessage">
              <i class="fas fa-exclamation-circle"></i>
              <small>Error Message</small>
              <a id="link"> </a>
            </div>

            <button type="submit" class="btn third " id= "btnLogin">Inicia Sesión</button>
            <label class="lbl" for=""> o ingresa con:</label>

            <div class="loginIcons">    
              <a id="loginFacebook"><img src="./images/logo-facebook.png" alt=""></a> 
              <a id="loginGmail"><img  src="./images/logo-gmail.png" alt=""></a>
              <a id="loginTwitter"><img  src="./images/logo-tu.png" alt=""></a>
            </div>

            <div class="groupLbl">  
              <label class="lblCuenta" for="">¿No tienes una cuenta?</label>
              <a href="#/Register" class="linkRegistrate" id="linkRegistrate" for="">Regístrate</a>     
            </div>  

          </div>
          <footer id="containerFooter">

          <div class="bo-wrap clr4">
            <div class="bo-footer">
              <div class="bo-footer-social"></div>
            </div>
          </div>
          <div class="bo-wrap clr3">
            <div class="bo-footer">
              <div class="bo-footer-smap">
                <a class= "bo-footer-text " href="">Politica de Privacidad</a> <a class="rayita"> | </a> 
                <a class= "bo-footer-text" href="">Contact Us</a>
              </div>
              <div class="bo-footer-uonline">
                <div class="bo-footer-power">
                  Powered By  - <a class= "bo-footer-text" href="">SJM</a>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="bo-wrap clr4">
              <div class="bo-footer">
                <div class="bo-footer-copyright">&copy;2022 SJM  All rights reserved.</div>
              </div>
            </div>
            </footer>
        </div>
       
        
        
        
        `;




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
          addErrorMessage(inactiveEmailErrorMessage, 'Campo inválido. Por favor, escriba su correo electrónico.');
          addErrorInput(containerInputEmail, 'error');
          addErrorMessage(inactivePasswordErrorMessage, 'Campo inválido. Por favor, escriba su contraseña.');
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
          addErrorMessage(inactivePasswordErrorMessage, ' Ocurrió un error. Por favor, vuelva a escribir sus datos correctamente.')
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


  //uuuuuu



  const loginGmaiL = divElemt.querySelector("#loginGmail");
  loginGmaiL.addEventListener("click", () => {

    signInGoogle()
      //signInGoogleRedirectResult()
      .then((user) => {
        window.location.hash = '#/Home';
        console.log("iniciaste sesion con google")
        console.log(user);
        console.log(user.user.displayName);
        console.log(user.user.email);
        console.log(user.user.emailVerified);
        console.log(user.user.photoURL);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })

  })



  const loginFacebook = divElemt.querySelector("#loginFacebook");
  loginFacebook.addEventListener("click", () => {
    signInFacebook()
      .then((user) => {
        window.location.hash = '#/Home';
        console.log("iniciaste sesion con Facebook")

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

  userState((user) => {
    if (user) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;


    }

  })


  return divElemt;
};



