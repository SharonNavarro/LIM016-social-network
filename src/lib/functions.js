import {
   savePublish,
   getDownloadURL,
   ref, storage,
   uploadBytesResumable

} from "../firebase/firestore.js"

import {
   showPublish,
   getFileAdd,
   displayName,
   photoURL,
   email,
   userid,
   formPublish,
   miModalPublishVoid,
   btnReturn

} from "../view/Home.js"


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

export const publishPosts = () => {
   formPublish.addEventListener("submit", async (e) => {
      e.preventDefault();
      const textPost = formPublish['textPost'].value;
      if (textPost == "" || textPost.trim() == "") {
         miModalPublishVoid.setAttribute("class", "show");
         btnReturn.addEventListener("click", () => {
            miModalPublishVoid.setAttribute("class", "closeModal");
         })
         return false;
      }
      if (getFileAdd != "") {
         uploadFiles(getFileAdd)
      } else {       
       
         const urlGetdescarga = ""
         let hoy = new Date();
         let dateOrder = new Date();
         let datePublish, hourPublish, dateOrderComplet;
         hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
         datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
         dateOrderComplet = dateOrder.getTime();
         await savePublish(textPost, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email, userid, urlGetdescarga);
         formPublish.reset();
         await showPublish();
      }
   
   });
}

async function getUrl(urlGetdescarga) {

  // getFileAdd=""
   let hoy = new Date();
   let dateOrder = new Date();
   let datePublish, hourPublish, dateOrderComplet;
   hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
   datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
   dateOrderComplet = dateOrder.getTime();
   await savePublish(textPost.value, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email, userid, urlGetdescarga);
   formPublish.reset();
   await showPublish();
  // getFileAdd=""

}


let urlDescarga;
let uploadFiles = (getFileAdd) => {
   const textPost = formPublish['textPost'].value;
   if (textPost == "" || textPost.trim() == "") {
      miModalPublishVoid.setAttribute("class", "show");
      btnReturn.addEventListener("click", () => {
         miModalPublishVoid.setAttribute("class", "closeModal");
      })
   } else {
      let storageRef = ref(storage, 'Images_Posts/' + getFileAdd.name)
      let uploadTask = uploadBytesResumable(storageRef, getFileAdd);
      uploadTask.on('state_changed', (snapshot) => {
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log('Upload is ' + progress + '% done');
         switch (snapshot.state) {
            case 'paused':
               console.log('Upload is paused');
               break;
            case 'running':
               console.log('Upload is running');
               break;
         }
      },
         (error) => {
            switch (error.code) {
               case 'storage/unauthorized':
                  break;
               case 'storage/canceled':
                  break;
               case 'storage/unknown':
                  break;
            }
         },
         () => {
            getDownloadURL(uploadTask.snapshot.ref)
               .then((downloadURL) => {
                  urlDescarga = downloadURL;
                  console.log("subio");
                  getUrl(urlDescarga);
                  getFileAdd="";
               });
         }

      );
   }

}

