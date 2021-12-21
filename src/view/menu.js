 import{ signOutAccount }from "../firebase/auth.js"
 export default () => { 
 const viewMenu = `
  <div class= "containerMenu">
  <div class="respmenu">
  <input type="checkbox" >
  <label for="btn-menu">
  <img class ="imagen" src="./images/menuuu.png" alt="" />
  </label> 
  <nav>
    <ul>
    <li><a href="#/Account">Account</a></li>
    <li><a href="#/Friends">Friends</a> </li>
    <li><a href="#/Messages">Messages</a> </li>
    <li><a href="#/Netchange">Netchanges</a> </li>   
    <li><a id="btnLogout" style="cursor:pointer" >Cerrar Sesión</a> </li>   
    </ul>
  </nav>
</div>      
               
       
      <div class="containerMenuIcons">      
       <nav>
        <ul class="ulMenu2">
          <li class="liMenu" ><a href="#/Home"><img src="./images/home.png" id="iconHome" alt=""></a></li>        
          <li class="liMenu"><a href="#/Favorite"><img src="./images/favorite.png" id="iconFavorite" alt=""></a></li>
          <li class="liMenu"><a href="#/Notifications"><img src="./images/notificacion.png" id="iconNotifications" alt=""></a> </li>         
        </ul>
        </nav>
        
        </div>
        </div>           
               `;

      const divElemt = document.createElement('section');
            divElemt.classList.add('classViewMenu')
            divElemt.innerHTML = viewMenu;
            
      const containerHeader = document.getElementById('containerHeader')
      const container = document.getElementById('container')
      const btnLogout =divElemt.querySelector("#btnLogout");
      
      btnLogout.addEventListener('click', () => {
          containerHeader.innerHTML = "";
          container.innerHTML = "";
          signOutAccount()
          .then(() => {
          console.log("cerraste sesion");
          window.location.hash='#/';        
          })
      })            
    return divElemt;
}   


