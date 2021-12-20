import{ signUp } from "../firebase/auth.js"
import{ auth } from "../firebase/config.js"


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

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewRegister')
    divElemt.innerHTML = viewRegister;

    const email= divElemt.querySelector("#inputUserRegister");
    const password= divElemt.querySelector("#inputPasswordRegister");

    const btnRegister= divElemt.querySelector("#btnRegister")
    btnRegister.addEventListener("click",()=>{    
      signUp(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById("inputUser").value = "";
        document.getElementById("inputPassword").value = "";
        window.location.hash('#/Home');
        console.log("usuario registrado");
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    });   
      //login.style.display = "none";
      //sectionLogin.innerHTML = registrarseTemplate();
    return divElemt;
};