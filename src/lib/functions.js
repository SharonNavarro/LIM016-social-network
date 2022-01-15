import {
   savePublish,
   getPublishes,
   deletePublish,
   updatePublish,
   getPublish,
   saveUser,
   getUsers,
  

} from "../firebase/firestore.js"

import { showPublish } from "../view/Home.js"


// errores registro 
export const addErrorMessage = (formControl, message) => {
   const small = formControl.querySelector('small');
   formControl.classList.add('activeLoginErrorMessage');
   return small.innerText = message;
}

export const addErrorInput = (formControl, classControl) => {
   return formControl.classList.add(classControl);
}

export const removeErrorMessage = (formControl, message) => {
   const small = formControl.querySelector('small');
   formControl.classList.remove('activeLoginErrorMessage');
   return small.innerText = message;
}

export const removeErrorInput = (formControl, classControl) => {
   return formControl.classList.remove(classControl);
}

//Funcion que envia las publicaciones a la base de datos

export const publishPosts = (formPublish, miModalPublishVoid, btnReturn, displayName, photoURL, email,idUser) => {
   formPublish.addEventListener("submit", async (e) => {
      e.preventDefault();
      const textPost = formPublish['textPost'].value;
      if (textPost == "" || textPost.trim() == "") {
         miModalPublishVoid.setAttribute("class", "show");
         btnReturn.addEventListener("click", () => {
            miModalPublishVoid.setAttribute("class", "closeModal");
         })
      } else {
         let hoy = new Date();
         let dateOrder = new Date();
         let datePublish, hourPublish, dateOrderComplet;
         hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
         datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
         dateOrderComplet = dateOrder.getTime();
         await savePublish(textPost, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email,idUser/*,totalHearts,comments */);
         formPublish.reset();
         await showPublish();
      }
   });
}




