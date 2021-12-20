 import{ signOutAccount }from "../firebase/auth.js"
 export default () => { 
 const viewMenu = `
  <div class= "containerMenu">
    <input type="checkbox" id="btn-menu" />
        <label for="btn-menu">
            <img src="https://image.flaticon.com/icons/png/128/1215/1215141.png" alt="" />
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
      <div class="containerMenuIcons">      
       <nav>
        <ul>
          <li><a href="#/Home"><img src="" id="iconHome" alt="">Home </a></li>        
          <li><a href="#/Favorite"><img src="" id="iconFavorite" alt="">Favorite</a></li>
          <li><a href="#/Notifications"><img src="" id="iconNotifications" alt="">Notifications</a> </li>         
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


