import { components } from '../view/index.js';
//import  { header2 } from '../lib/index.js';

export const changeTmp = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById('container');
    const containerHeader = document.getElementById('containerHeader');

   //console.log("aquiiiiiiiii",header2);


    switch (hash) {
        case '':
        case '#':
        case '#/':
                  sectionMain.innerHTML="";
                  containerHeader.innerHTML="";
                  sectionMain.appendChild(components.Login())
        break;
        case '#/Register':
                  sectionMain.innerHTML="";
                  containerHeader.innerHTML="";
                  sectionMain.appendChild(components.Register())                
        break;

        case '#/Account':
        case '#/Friends':
        case '#/Messages':
        case '#/Netchange':
        case '#/Favorite':
        case '#/Notifications':
        case '#/Home':
                         
                sectionMain.innerHTML="";
                containerHeader.innerHTML= `
 
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
                sectionMain.appendChild(components[id]());
            break;
        default:
            return sectionMain.appendChild(components.Different())
    }
};