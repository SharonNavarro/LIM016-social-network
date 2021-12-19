 import{ signOutAccount }from "./auth "
 export default () => { 
 const menu = `
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
               `;

      const divElemt = document.createElement('div');
            divElemt.classList.add('classViewMenu')
            divElemt.innerHTML = menu;
            
      const containerHeader = document.getElementById('containerHeader')
      const container = document.getElementById('container')
      const btnLogout = menu.querySelector("#btnLogout");
      
      btnLogout.addEventListener('click', () => {
          containerHeader.innerHTML = "";
          container.innerHTML = "";
          auth.signOut().then(() => {
          console.log("saliste");
          window.location.replace('#/')          
          })
      })            
    
}   


