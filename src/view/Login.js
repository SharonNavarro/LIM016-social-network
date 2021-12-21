import{ signIn, signInFacebook, userState, signInGoogle, signInGoogleRedirectResult }from "../firebase/auth.js"

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
      <button type="submit" class="btn third" id= "btnLogin">LogIn</button>
      <label class="lbl" for=""> o ingresa con:</label>
      <div class="loginIcons">    
       <a id="loginFacebook"><img src="./images/logo-facebook.png" alt=""></a> 
        <a id="loginGmail"><img  src="./images/logo-gmail.png" alt=""></a>
         </div>
         <div class="groupLbl">  
         <label class="lblCuenta" for="">¿No tienes una cuenta?</label>
         <a href="#/Register" class="linkRegistrate" id="linkRegistrate" for="">Registrate</a>     
         </div>      
       </div>
      </div>
    </div>
  </div>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewLogin')
    divElemt.innerHTML = viewLogin;

    const email= divElemt.querySelector("#inputUser");
    const password=divElemt.querySelector("#inputPassword");
    const btnLogin = divElemt.querySelector('#btnLogin');
      
      
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
                console.log(errorCode, errorMessage)        
            })
          });
          
              
      const loginGmaiL= divElemt.querySelector("#loginGmail");
      loginGmaiL.addEventListener("click", ()=>{
     
        signInGoogle()
        //signInGoogleRedirectResult()
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

      userState((user)=>{
        if (user){
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;
      

        }
      
      })
    
    
    return divElemt;
};



