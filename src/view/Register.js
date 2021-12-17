export default () => {
    const viewRegister = `
    <div class="containerLogin">

  <div class="sectionWelcome">
  </div>

  <div class="sectionLogin" id="sectionLogin">
    <div class="login" id=login>

    <div class="register" id=register>  
    <div class="containerInputs">
    <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
    <h1 >Netcoins</h1>
    <input class="inputUser" id="inputUserRegister"type="text" placeholder="Usuario">
    <input type="password" class="inputPassword" id="inputPasswordRegister" type="text" placeholder="Contraseña">
    <button class="btn third" id= "btnRegister">Registrarse</button>
     <div class="loginIcons">    
      </div>  
     </div>
    </div>
    </div>
  </div>
</div>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewRegister;
    return divElemt;
};