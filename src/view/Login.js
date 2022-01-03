import{ signIn, signInFacebook, userState, signInGoogle, signInTwitter, emailVerification }from "../firebase/auth.js"
import{ addErrorMessage, addErrorInput, removeErrorInput, removeErrorMessage }from "../lib/functions.js"

export default () => {
    const viewLogin = `
    <div class="containerLogin">
      <div class="sectionLogin" id="sectionLogin">

        <div class="login" id="login">  

          <div class="containerInputs">
            <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
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
            </div>

            <button type="submit" class="btn third" id= "btnLogin">Inicia Sesión</button>
            <label class="lbl" for=""> o ingresa con:</label>

            <div class="loginIcons">    
              <a id="loginFacebook"><img src="./images/logo-facebook.png" alt=""></a> 
              <a id="loginGmail"><img  src="./images/logo-gmail.png" alt=""></a>
              <a id="loginTwitter"><img  src="./images/logo-tu.png" alt=""></a>
            </div>

            <div class="groupLbl">  
              <label class="lblCuenta" for="">¿No tienes una cuenta?</label>
              <a href="#/Register" class="linkRegistrate" id="linkRegistrate" for="">Registrate</a>     
            </div>  

          </div>

        </div>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewLogin')
    divElemt.innerHTML = viewLogin;

    const email= divElemt.querySelector("#inputUser");
    const password=divElemt.querySelector("#inputPassword");
    const btnLogin = divElemt.querySelector('#btnLogin');

    const inactiveEmailErrorMessage = divElemt.querySelector('.inactiveEmailErrorMessage');
    const inactivePasswordErrorMessage = divElemt.querySelector('.inactivePasswordErrorMessage');
    const containerInputEmail = divElemt.querySelector('.containerInputEmail');
    const containerInputPassword = divElemt.querySelector('.containerInputPassword');

    btnLogin.addEventListener('click', ()=>{

      signIn(email.value, password.value)
      .then((userCredential)=>{
        const user = userCredential.user;
        divElemt.querySelector("#inputUser").value = "";
        divElemt.querySelector("#inputPassword").value = "";
        window.location.hash='#/Home';
        console.log(user)
      }) 
       .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (email.value === '' && password.value === '' ) {
            addErrorMessage(inactiveEmailErrorMessage, 'Campo inválido. Por favor, escriba su correo electrónico.');
            addErrorInput(containerInputEmail, 'error');
            addErrorMessage(inactivePasswordErrorMessage, 'Campo inválido. Por favor, escriba su contraseña.');
            addErrorInput(containerInputPassword, 'error');
          }
          else if (errorCode === 'auth/wrong-password') {
            removeErrorInput(containerInputEmail, 'error');
            removeErrorMessage(inactiveEmailErrorMessage, '');
            addErrorMessage(inactivePasswordErrorMessage, 'Contraseña incorrecta.');
            addErrorInput(containerInputPassword, 'error');
          } 
          else if (errorCode === 'auth/user-not-found') {
            removeErrorInput(containerInputPassword, 'error');
            removeErrorMessage(inactivePasswordErrorMessage, '');
            addErrorMessage(inactiveEmailErrorMessage, 'Usuario no encontrado. Por favor, vuelva a escribir su correo electrónico.');
            addErrorInput(containerInputEmail, 'error');
          } 
          else {
            removeErrorInput(containerInputPassword, 'error');
            removeErrorInput(containerInputEmail, 'error');
            removeErrorMessage(inactiveEmailErrorMessage, '');
            addErrorMessage(inactivePasswordErrorMessage, ' Ocurrió un error. Por favor, vuelva a escribir sus datos correctamente.')
          }
        })
    });
          

//login with Twitter
const loginTwitter= divElemt.querySelector("#loginTwitter");
loginTwitter.addEventListener("click", ()=>{

signInTwitter()
  .then((user)=>{
    window.location.hash='#/Home';
    console.log("iniciaste sesion con google")
    console.log(user);
    console.log(user.user.displayName);
    console.log(user.user.email);
    console.log(user.user.photoURL);
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  })
})


//login with Gmail
const loginGmaiL= divElemt.querySelector("#loginGmail");
loginGmaiL.addEventListener("click", ()=>{
     
signInGoogle()
  .then((user)=>{
    window.location.hash='#/Home';
    console.log("iniciaste sesion con google")  
    console.log(user);
    console.log(user.user.displayName);
    console.log(user.user.email);
    console.log(user.user.photoURL);
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  })

})
    

//login with Facebook 
const loginFacebook= divElemt.querySelector("#loginFacebook");
loginFacebook.addEventListener("click", ()=>{

  signInFacebook()
    .then((user)=>{
      window.location.hash='#/Home';
      console.log("iniciaste sesion con Facebook")
      console.log(user.user.displayName);
      console.log(user.user.email);
      console.log(user.user.photoURL);
    }) 
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    })
  })


//State
  userState((user) =>{
    if (user){
      window.location.hash='#/Home';
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    }
  })


return divElemt;
};



