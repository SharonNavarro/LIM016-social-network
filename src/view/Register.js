import{ signUp } from "../firebase/auth.js"
import{ auth } from "../firebase/config.js"


export default () => {
    const viewRegister = `
    <form action="" class="containerLogin" id="formulario">
  <div class="sectionWelcome">
  </div>

  <div class="sectionLogin" id="sectionLogin">
    <div class="login" id=login>

    <div class="register" id=register> 
    <div class="loginImg">
    <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
    </div>
    <h1 >Netcoins</h1> 

    <div class="containerInputs">

      <div class="formulario__grupo" id="grupo__usuario">
				<div class="formulario__grupo-input">
          <input class="formulario__input" id="inputUserRegister"type="text" name="usuario" placeholder="Usuario" >
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

      <div class="formulario__grupo" id="grupo__nombre">
				<div class="formulario__grupo-input">
          <input class="formulario__input" id="inputUserName"type="text" name="nombre" placeholder="Nombre" required >					
          <i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
        <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>
        <div class="formulario__grupo-input">
          <input class="formulario__input" id="inputUserLastName"type="text" name="apellido" placeholder="Apellido" required >				
          <i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
        <div class="formulario__grupo" id="grupo__correo">
          <div class="formulario__grupo-input">
            <input class="formulario__input" id="inputUserEmail"type="email" name="email" placeholder="Email" > 
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
        </div>
      <div class="formulario__grupo" id="grupo__password">
				<div class="formulario__grupo-input">
				  <input type="password" class="formulario__input" id="inputPasswordRegister" name="password" type="text" placeholder="Contraseña nueva" >
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
			</div>
    
      <div class="formulario__grupo" id="grupo__terminos">
				<label class="terminos">
					<input class="terminosCheckbox" type="checkbox" name="terminos" id="terminos" >
					Acepto los Terminos y Condiciones
				</label>
		</div>
    <div class="formulario__mensaje" id="formulario__mensaje">
    <p class="texto">¿Ya tienes una cuenta? <a id="registrate" href="#/Login"> Iniciar Sesión</a></p> 
		</div>
    <button type= "submit" class="btn third" id= "btnRegister">Registrarse</button>
    
     <div class="loginIcons">    
      </div>  
     </div>
    </div>
    </div>
    </form>
  </div>
</div>
`;


   
    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewRegister')
    divElemt.innerHTML = viewRegister;

    const email= divElemt.querySelector("#inputUserRegister");
    const password= divElemt.querySelector("#inputPasswordRegister");
    const name= divElemt.querySelector("#inputUserName");
    

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