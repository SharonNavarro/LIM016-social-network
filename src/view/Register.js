import { signUp, EmailVerification } from "../firebase/auth.js"
import { addErrorMessage, addErrorInput, removeErrorInput, removeErrorMessage } from "../lib/functions.js"


export default () => {
  const viewRegister = `
  <div class="containerLogin">
  <div class="sectionWelcomeRegister" id="sectionWelcomeRegister">
  </div>

  <div class="sectionLoginRegister" id="sectionLoginRegister">
    <div class="loginRegister" id="loginRegister">
    <div class="containerInputs">
    <div class="loginImg">
    <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
    </div>
    <h1 >Netcoins</h1> 
   
      <div action="" class="containerInputsRegister">
        <div class="intento">
        <div class="formulario__grupo" id="grupo__usuario">
        <div class="formulario__grupo-input inputUserRegister">
          <input class="formulario__input" id="inputNameUserRegister"type="text" name="usuario" placeholder="Usuario" >
          <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <div class="inactiveUserErrorMessage">
        <i class="fas fa-exclamation-circle"></i>
        <small>Error Message</small>
      </div>        
      </div>
      <div class="formulario__grupo" id="grupo__nombre">
        <div class="formulario__grupo-input  inputUserName">
          <input class="formulario__input" id="inputUserName"type="text" name="nombre" placeholder="Nombre" required >					
          <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <div class="inactiveNameErrorMessage">
            <i class="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>
      </div>
    </div>
    <div class="intento1">
      <div class="formulario__grupo" id="grupo__email">
        <div class="formulario__grupo-input inputUserEmail">
            <input class="formulario__input" id="inputUserRegister" type="email" name="email" placeholder="Email" required > 
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <div class="inactiveEmailErrorMessage">
            <i class="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>
        </div>
        <div class="formulario__grupo" id="grupo__password">
          <div class="formulario__grupo-input  ">
              <input class="formulario__input" id="inputPasswordRegister" type="password" name="password" placeholder="Contraseña" > 
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <div class="inactivePasswordErrorMessage">
            <i class="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
          </div>
          </div>
        </div>

      <div class="formulario__grupo" id="grupo__terminos">
        <div class ="terminosCondiciones">
        <label class="terminos">
          <input class="terminosCheckbox" type="checkbox" name="terminos" id="terminos" value="check" >
          Acepto los Terminos y Condiciones
        </label>
        </div>
          <div class="inactiveTerminosErrorMessage">
          <i class="fas fa-exclamation-circle"></i>
          <small>Error Message</small>
      </div>

     <div class="btnRegister"> 
    <button type= "submit" class="btn third" id= "btnRegister">Registrarse</button>
  </div> 
  </div>
</div>
     <div class="loginIcons">
      </div>    
      </div>  
    </div>
  </div>
  </div>
</div>
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
        <a class= "bo-footer-text" href="">Politica de Privacidad</a> |  
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
   `;


  const divElemt = document.createElement('section');
  divElemt.classList.add('classViewRegister')
  divElemt.innerHTML = viewRegister;
  
  const email = divElemt.querySelector("#inputUserRegister")
  const user = divElemt.querySelector("#inputNameUserRegister");
  const name = divElemt.querySelector("#inputUserName");
  const password = divElemt.querySelector("#inputPasswordRegister");
  const btnRegister = divElemt.querySelector('#btnRegister');
  const terminos= divElemt.querySelector('#terminos');
  

  
  const inactiveEmailErrorMessage = divElemt.querySelector('.inactiveEmailErrorMessage');
  const inactivePasswordErrorMessage = divElemt.querySelector('.inactivePasswordErrorMessage');
  const inactiveUserErrorMessage = divElemt.querySelector('.inactiveUserErrorMessage');
  const inactiveNameErrorMessage = divElemt.querySelector('.inactiveNameErrorMessage');
  const containerInputEmail = divElemt.querySelector('.inputUserEmail');
  const containerInputPassword = divElemt.querySelector('.inputPasswordRegister');
  const containerInputUsuario = divElemt.querySelector('.inputUserRegister');
  const containerInputName = divElemt.querySelector('.inputUserName');
  const inactiveTerminosErrorMessage = divElemt.querySelector('.inactiveTerminosErrorMessage');
  const containerInputCheckbox=  divElemt.querySelector('.terminosCheckbox');
  const emailRegex= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const userRegex=/^[a-zA-Z0-9\_\-]{4,16}$/;

  
  btnRegister.addEventListener("click", () => {
    signUp(email.value, password.value)
      .then(() => {

        divElemt.querySelector("#inputUserRegister").value = "";
        divElemt.querySelector("#inputPasswordRegister").value = "";
        divElemt.querySelector("#inputUserName").value = "";
        divElemt.querySelector("#inputNameUserRegister").value = "";

        EmailVerification()
          .then(() => {
            console.log("Revisa tu correo para verificarlo");

            
          });

       
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        console.log("error", error);
        
        if (user.value=== '' && name.value=== '' &&  email.value === '' && password.value === ''&& terminos.checked === false) {
         
          addErrorMessage(inactiveUserErrorMessage, 'Por favor, ingresa tu usuario.');
          addErrorInput(containerInputUsuario, 'error'); 
          addErrorMessage(inactiveNameErrorMessage, ' Por favor, ingresa tu nombre.');
          addErrorInput(containerInputName, 'error');  
          addErrorMessage(inactiveEmailErrorMessage, ' Por favor, escriba su correo electrónico.');
          addErrorInput(containerInputEmail, 'error');
          addErrorMessage(inactivePasswordErrorMessage, ' Por favor, escriba su contraseña.');
          addErrorInput (password, 'error');
          addErrorMessage(inactiveTerminosErrorMessage, ' Por favor, acepta los terminos y condiciones.');
          addErrorInput(containerInputCheckbox, 'error');


        }  else if (name.value === '') {
          addErrorMessage(inactiveNameErrorMessage, 'Campo inválido. Por favor, escriba su nombre.');
          addErrorInput(containerInputName, 'error');   

        } if(userRegex.test(email.value) ){       
          addErrorMessage(inactiveUserErrorMessage, 'El usuario debe tener de 4 a 16 dígitos y solo puede contener números, letras y guion bajo.');
          addErrorInput(containerInputUsuario, 'error');         
        }else if (user.value === '') {
          addErrorMessage(inactiveUserErrorMessage, 'Por favor, ingresa tu usuario.');
          addErrorInput(containerInputUsuario, 'error');   
        } if (password.value === '') {
          addErrorMessage(inactivePasswordErrorMessage, 'Por favor, ingresa tu contraseña.');
          addErrorInput(password, 'error');

        }else if (errorCode === 'auth/weak-password') {
            addErrorMessage(inactivePasswordErrorMessage, 'Tu password debe contar con minimo 6 caracteres.');
            addErrorInput(password, 'error');
  
        }if (!emailRegex.test(email.value)){
          addErrorMessage(inactiveEmailErrorMessage, 'Ingrese un correo válido.');
          addErrorInput(containerInputEmail, 'error');
        }else if (email.value === '') {
          addErrorMessage(inactiveEmailErrorMessage, 'Campo inválido. Por favor, escriba su correo electrónico.');
          addErrorInput(containerInputEmail, 'error');
        } else if (errorCode === 'auth/email-already-in-use'){
          addErrorMessage(inactiveEmailErrorMessage, 'Este email ya figura como registrado.');
          addErrorInput(email, 'error');

        }if(terminos.checked === false){
          addErrorMessage(inactiveTerminosErrorMessage, ' Por favor, acepta los terminos y condiciones.');
          addErrorInput(containerInputCheckbox, 'error');
        }
        })
  });



  return divElemt;
};