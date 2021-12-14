export const loginTemplate = () => {

  return `<div class="containerInputs">
  <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
  <h1 >Netcoins</h1>
  <input class="inputUser" id="inputUser"type="text" placeholder="Usuario">
  <input class="inputPassword" id="inputPassword" type="text" placeholder="Contraseña">
  <button class="btn third" id= "btnLogin">LogIn</button>
  <label class="lbl" for=""> o ingresa con:</label>
  <div class="loginIcons">    
   <a id="loginFacebook"><img  src="./images/logo-facebook.png" alt=""></a> 
    <a id="loginGmail"><img  src="./images/logo-gmail.png" id="authGoogle" alt=""></a>
     <a id="loginTwitter"><img  src="./images/icono-twitter.png" alt=""></a>
     </div>
     <div class="groupLbl">  
     <label class="lblCuenta" for="">¿No tienes una cuenta?</label>
     <a class="linkRegistrate" id="linkRegistrate" for="">Registrate</a>
     <button class="btn third" id= "btnLogout">LogIn</button>
     </div>
  
  </div>`;
}

export const RegistrarseTemplate = () => {
  return `
  
  <div class="register" id=register>  
  <div class="containerInputs">
  <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
  <h1 >Netcoins</h1>
  <input class="inputUser" id="inputUserRegister"type="text" placeholder="Usuario">
  <input class="inputPassword" id="inputPasswordRegister" type="text" placeholder="Contraseña">
  <button class="btn third" id= "btnRegister">Registrarse</button>
   <div class="loginIcons">    
   <a id="loginFacebook"><img  src="./images/logo-facebook.png" alt=""></a> 
    <a id="loginGmail"><img  src="./images/logo-gmail.png" id="authGoogle" alt=""></a>
     <a id="loginTwitter"><img  src="./images/icono-twitter.png" alt=""></a>
     </div>
     
  
  </div>
  </div>`;
}

