export const templateViewLogin = ` 
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

`