import { components } from '../view/index.js';
//import  { header2 } from '../lib/index.js';

export const changeTmp = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById('container');
   // const sectionContent = document.getElementById('contenido');
    const containerHeader = document.getElementById('containerHeader');

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
                containerHeader.innerHTML="";
                containerHeader.appendChild(components.Menu())  
                sectionMain.appendChild(components[id]());
            break;
        default:
            return sectionMain.appendChild(components.Different())
            
    }
};