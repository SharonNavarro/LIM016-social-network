import { userState } from "../firebase/auth.js"
import { templateHome, templatePublishes } from "./templates/templateHome.js"
import {
  savePublish,
  getPublishes,
  deletePublish,
  updatePublish,
  getPublish,
} from "../firebase/firestore.js"
let displayName, photoURL, email;
export default () => {

  //Template Home
  const viewHome = templateHome;
  const divElemt = document.createElement('section');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  //Functions

  const nameUser = divElemt.querySelector("#nameUser");
  const photoUser = divElemt.querySelector("#photoUser");
  const formPublish = divElemt.querySelector("#formPublish");

  userState(async (user) => {
    if (user) {
      displayName = user.displayName;
      photoURL = user.photoURL;
      email = user.email;
      nameUser.innerHTML = displayName;
      photoUser.src = photoURL;

      await showPublish();

    }
  })


  const miModalPublishVoid = divElemt.querySelector("#miModalPublishVoid");
  const btnReturn = divElemt.querySelector("#btnReturn");
  //Enviar Publicación
  formPublish.addEventListener("submit", async (e) => {

    e.preventDefault();
    const textPost = formPublish['textPost'].value;

    if (textPost == "" || textPost.trim() == "") {
      miModalPublishVoid.setAttribute("class", "show");
      btnReturn.addEventListener("click", closeModal)
    } else {
      let hoy = new Date();
      let dateOrder = new Date();
      let datePublish, hourPublish, dateOrderComplet;
      hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
      datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
      dateOrderComplet = dateOrder.getTime();

      await savePublish(textPost, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email/*,totalStars,totalHearts,comments */);
      formPublish.reset();
      await showPublish();
    }
  });

  function closeModal() {
    miModalPublishVoid.setAttribute("class", "closeModal");
  }

  return divElemt;

};

let querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto;

window.addEventListener('DOMContentLoaded', async (e) => {
  await showPublish();
})

async function showPublish() {
  querySnapshot = await getPublishes();
  let templatePosts = "";
  querySnapshot.forEach((doc) => {
    post = doc.data();
    post.id = doc.id;
    idPosts = post.id;
    contentPosts = doc.data().content;
    dateOfPublish = doc.data().datePublish;
    hourPublish = doc.data().hourPublish;
    userName = doc.data().userName;
    urlPhoto = doc.data().urlPhoto;
    templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish)
/* 
    const selectEdition = document.querySelectorAll(".selectEdition");
    
    if (displayName !== userName) {
      templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish)
      setTimeout(() => {
        selectEdition.forEach(classele => {
          classele.classList.add("ocultar")
          console.log(classele);
        });
      }, 100);

    }
    else if (displayName === userName) {
      templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish)
      setTimeout(() => {

        selectEdition.forEach(classele => {
          classele.classList.remove("ocultar")
          console.log(classele);
        });
      }, 100);
    } */
    /*   function select2() {
        setTimeout(() => {
          const selectEdition = document.querySelector(".selectEdition");   
                 
         
             selectEdition.classList.add("ocultar") 
             console.log(selectEdition);
        }, 100);
  
      } */


  });
  //donde se ubica postContainer
  postContainer.innerHTML = templatePosts;

  const selectEdition = document.querySelectorAll(".selectEdition");
  const miModal = document.querySelector("#miModal");
  const btnDelete = document.querySelector("#btnDelete");
  const btnCancel = document.querySelectorAll(".btnCancel");
  const btnCancelUpdate = document.querySelectorAll(".btnCancelUpdate");
  const btnEdit = document.querySelector("#btnEdit");
  const contenido = document.querySelectorAll(".contenido");
  const containerIconsBtn = document.querySelectorAll(".containerIconsBtn");
  const groupBtnUpdate = document.querySelectorAll(".groupBtnUpdate");
  const btnSave = document.querySelectorAll(".btnSave");


  selectEdition.forEach(selectEdition => {

    /*    if (selectEdition.target.dataset.id == idPosts) {
         const getPost = await getPublish(selectEdition.dataset.id)
   
         const text = (getPost.data().content);
         const emailUser=getPost.data().email;
         if(emailUser==email){
           
         }
       } */
    /* 
    selectEdition.addEventListener("click",function(){
    
    
    }) */


    selectEdition.addEventListener("change", async function () {
      console.log("idpost", idPosts);
      console.log("idselect", selectEdition.dataset.id);
      const selectedOption = this.options[selectEdition.selectedIndex];

      if (selectedOption.value === "delete") {
        miModal.setAttribute("class", "showDelete");
        btnDelete.addEventListener("click", modalDelete);
        //preguntar por boton cancel
        btnCancel.forEach((btnCanc) => {
          btnCanc.addEventListener("click", cancelarModal);
        });
      }
      else if (selectedOption.value === "edit") {

        contenido.forEach((e) => {

          if (e.dataset.id == selectedOption.dataset.id) {
            e.disabled = false;
            const statusShowNone = "none";
            const statusShowBlock = "block";

            showIconosAndGroupBtnUpdate(containerIconsBtn, statusShowNone)
            showIconosAndGroupBtnUpdate(groupBtnUpdate, statusShowBlock)

            //inicio de boton que modifica la publicacion
            btnSave.forEach((btn) => {

              btn.addEventListener("click", async () => {

                if (btn.dataset.id == selectedOption.dataset.id) {
                  const idUpdate = (selectedOption.dataset.id);
                  const textUpdate = (e.value);

                  await updatePublish(idUpdate, textUpdate);
                  showIconosAndGroupBtnUpdate(groupBtnUpdate, statusShowNone)
                  showIconosAndGroupBtnUpdate(containerIconsBtn, statusShowBlock)

                  e.disabled = true;
                  resetIconOption();

                }

              })

            });

            //inicio de boton cuando se cancela la edicion
            btnCancelUpdate.forEach((btnCancelUp) => {

              btnCancelUp.addEventListener("click", async (btnCancel) => {
                if (btnCancel.target.dataset.id == selectedOption.dataset.id) {
                  const getPost = await getPublish(selectedOption.dataset.id)

                  const text = (getPost.data().content);
                  /*      const emailUser=getPost.data().email;
                       if(emailUser==email){
     
                       } */
                  e.value = text;

                  showIconosAndGroupBtnUpdate(groupBtnUpdate, statusShowNone)
                  showIconosAndGroupBtnUpdate(containerIconsBtn, statusShowBlock)

                  resetIconOption();
                  e.disabled = true;
                }
              })
            })
            //fin de bpton cancelar cuando se edita
          }
        })
        //fin de recorrer contenido
      }

      async function modalDelete() {
        console.log(btnDelete);
        miModal.setAttribute("class", "modal");
        await deletePublish(selectedOption.dataset.id);
        await showPublish();
      }
      async function cancelarModal() {
        miModal.setAttribute("class", "modal");
        resetIconOption();
        await showPublish();
      }

      function showIconosAndGroupBtnUpdate(container, statusShow) {
        container.forEach((e) => {
          if (e.dataset.id == selectedOption.dataset.id) {
            e.style.display = statusShow;
          }
        });
      }

      function resetIconOption() {
        if (selectedOption.value != "menuOptions") {
          selectEdition.value = "menuOptions";
        }
      }
      //fin del else

    })
  })

}




