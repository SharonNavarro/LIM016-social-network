export default () => {
    const viewLogin = `
    <div class="containerLogin">
    <div class="sectionWelcome">
     </div>
      <div class="sectionLogin" id="sectionLogin">
      <div class="login" id=login>  
      <div class="containerInputs">
      <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
      <h1 >Netcoins</h1>
      <input class="inputUser" id="inputUser"type="text" placeholder="Usuario">
      <input type="password" class="inputPassword" id="inputPassword" type="text" placeholder="Contraseña">
      <button class="btn third" id= "btnLogin">LogIn</button>
      <label class="lbl" for=""> o ingresa con:</label>
      <div class="loginIcons">    
       <a id="loginFacebook"><img  src="./images/logo-facebook.png" alt=""></a> 
        <a id="loginGmail"><img  src="./images/logo-gmail.png" alt=""></a>
         </div>
         <div class="groupLbl">  
         <label class="lblCuenta" for="">¿No tienes una cuenta?</label>
         <a class="linkRegistrate" id="linkRegistrate" for="">Registrate</a>
        
         </div>      
       </div>
      </div>
    </div>
  </div>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewLogin;
    return divElemt;
};