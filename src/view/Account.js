import { 
  templateViewAccount,
  templateViewAccountProfileUser,
  templateViewAccountProfileUserBio 
} from "./templates/templateAccount.js";

import { 
  templateHome,
  templatePublishes
} from "./templates/templateHome.js"

import {
  savePublish,
  getPublishes,
  deletePublish,
  updatePublish,
  getPublish,
  saveUser,
  getUsers,
  upLikes,
  downLikes,
  updatePublishStars,
} from "../firebase/firestore.js"

import { userState } from "../firebase/auth.js"

let displayName, photoURL, email;
let arrayStart = [];

export default () => {

  const viewAccount = templateViewAccount;
  const viewAccountProfileUser = templateViewAccountProfileUser;
  const viewAccountProfileUserBio = templateViewAccountProfileUserBio;

  const divElemt = document.createElement('section');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccount;

  const userProfile =divElemt.querySelector('.userProfile');
  userProfile.innerHTML = viewAccountProfileUser;
  const userBio =divElemt.querySelector('.userBio');
  userBio.innerHTML = viewAccountProfileUserBio;

  const photoUser = divElemt.querySelector('#photoUser');
  const nameUser = divElemt.querySelector('.nameUser');
  const photoPerfil = divElemt.querySelector('.photoPerfil');
  const name = divElemt.querySelector('.name');

  const formPublishAccount = divElemt.querySelector("#formPublishAccount");

  userState(async (user) => {
    if (user) {
      displayName = user.displayName;
      photoURL = user.photoURL;
      email = user.email;
      nameUser.innerHTML = displayName;
      name.innerHTML = displayName;
      photoUser.src = photoURL;  
      photoPerfil.src = photoURL;     
      await showPublish();
    }
  })

  const miModalPublishVoid = divElemt.querySelector("#miModalPublishVoid");
  const btnReturn = divElemt.querySelector("#btnReturnAccount");

  formPublishAccount.addEventListener("submit", async (e) => {

    e.preventDefault();
    const textPostAccount = formPublishAccount['textPostAccount'].value;

    if (textPostAccount == "" || textPostAccount.trim() == "") {     
      miModalPublishVoid.setAttribute("class", "show");
      btnReturn.addEventListener("click", closeModal)
    } else {
      let hoy = new Date();
      let dateOrder = new Date();
      let datePublish, hourPublish, dateOrderComplet;
      hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
      datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
      dateOrderComplet = dateOrder.getTime();

      await savePublish(textPostAccount, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email, arrayStart);
      formPublishAccount.reset();
      await showPublish();
    }
  });

  function closeModal() {
    miModalPublishVoid.setAttribute("class", "closeModal");
  }

  return divElemt;
};

let querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto, TotalStarsPost;

window.addEventListener('DOMContentLoaded', async (e) => {
  await showPublish();
})

async function showPublish() {
  let contHeart=[];
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
     contHeart = doc.data().likesPost;
    console.log("imprimir", contHeart);
    if(contHeart.length!==0){  
    }
    const iconHeart = (contHeart.indexOf(idPosts) !== -1) ? 'paint' : '';
   
    if (displayName == userName) {
      templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contHeart.length, iconHeart);
    }
    
  });

  const postContainerAccount = document.querySelector("#postContainerAccount");
  postContainerAccount.innerHTML = templatePosts;

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



  let queryUsers1, users2, idUser1, nameUsers1, stars;
  /*  contenido.forEach((e) => {
 
   
 
 
   }) */
  const iconPostStart = document.querySelectorAll(".iconPostStart");
  iconPostStart.forEach((icon) => {
    icon.addEventListener("click", async (e) => {
      console.log("haces click");
      const idPost = e.target.dataset.id;
      console.log("idPost", idPost);
      console.log("idPost", idPosts);
      if (e.target.classList.contains('paint')) {
        downLikes(idPost, idPosts);
        console.log("se despinto");
        await showPublish();
      } else {
        upLikes(idPost, idPosts);
        //e.target.classList.add('paint')
        console.log("se pinto");
        await showPublish();
      }


    })


  })







  selectEdition.forEach(selectEdition => {


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
                  const getPost = await getPublish(selectedOption.dataset.id);

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

