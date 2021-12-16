export const loginTemplate = () => {

  return `<div class="containerInputs">
  <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
  <h1 >Netcoins</h1>
  <input class="inputUser" id="inputUser"type="text" placeholder="Usuario">
  <input type="password" class="inputPassword" id="inputPassword" type="text" placeholder="Contraseña">
  <button class="btn third" id= "btnLogin">LogIn</button>
  <label class="lbl" for=""> o ingresa con:</label>
  <div class="loginIcons">    
   <a id="loginFacebook"><img  src="./images/logo-facebook.png" alt=""></a> 
    <a id="loginGmail"><img  src="./images/logo-gmail.png" id="authGoogle" alt=""></a>
     </div>
     <div class="groupLbl">  
     <label class="lblCuenta" for="">¿No tienes una cuenta?</label>
     <a class="linkRegistrate" id="linkRegistrate" for="">Registrate</a>
     <button class="btn third" id= "btnLogout">LogOut</button> 
     </div>
  
  </div>`;
}

{/* <button class="btn third" id= "btnLogout">LogIn</button> */}

export const registrarseTemplate = () => {
  return `
  
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
  </div>`;
}
/* 
<a id="loginFacebook"><img  src="./images/logo-facebook.png" alt=""></a> 
<a id="loginGmail"><img  src="./images/logo-gmail.png" id="authGoogle" alt=""></a>
 <a id="loginTwitter"><img  src="./images/icono-twitter.png" alt=""></a> */

 export const generalTemplate = () => {
   return `
   <div class="containerGeneral" id="containerGeneral"> 

   <header>
     <div class="menu">
       <ul>
         <input type="checkbox" id="btn-menu" />
         <label for="btn-menu">
           <img src="https://image.flaticon.com/icons/png/128/1215/1215141.png" alt="" />
         </label>
         <li>
           <a id="account"><img src="" id="iconAccount" alt="">Account</a>
         </li>
         <li>
           <a id="friends"><img src="" id="iconFriends" alt="">Friends</a>
         </li>
         <li>
           <a id="messages"><img src="" id="iconMessages" alt="">Messages</a>
         </li>
         <li>
           <a id="netChange"><img src="" id="iconNetChange" alt="">NetChange</a>
         </li>
       </ul>
     </div>

     <div class="textNetcoin">
       <h1>Netcoins</h1>
     </div>

     <img class="logoLogin" src="./images/logoNetcoins.png" alt="">
   </header>

   <div class="containerMenuIcons">
     <div class="containerIconHome">
       <a id="home"><img src="" id="iconHome" alt=""></a>
     </div>
     <div class="containerIconFavorite">
       <a id="favorite"><img src="" id="iconFavorite" alt=""></a>
     </div>
     <div class="containerIconNotifications">
       <a id="notifications"><img src="" id="iconNotifications" alt=""></a>
     </div>
   </div>
   
   <main>
   </main>

 </div>
   `
 }

 export const homeTemplate = () => {
  return `
  <section id="containerHome">
  <div class="netHistories">
    <div class="containerNetHistories">
      <!--Generar dinamicamente las histories
      -->
    </div>
  </div>

  <div class="publicPost">
    <div class="containerPublicPost">
       <!--Generar dinamicamente la seccion para publicar un estado-->
    </div>
  </div>

  <div class="posts">
    <div class="containerPosts">
      <!--Generar dinamicamente los posts-->
   </div>
  </div>
</section>
  `
 }

 
