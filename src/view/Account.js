import { 
  templateViewAccount,
  templateViewAccountProfileUser,
  templateViewAccountProfileUserBio 
} from "./templates/templateAccount.js";

import { 
  templatePublishes
} from "./templates/templateHome.js";

import {
  savePublish,
  getPublishes,
  deletePublish,
  updatePublish,
  getPublish,
  saveUser,
  getUsers,
  queryEmailUnique,
} from "../firebase/firestore.js";

import {
  emailUsuario,
  nombreUsuario
} from "./Login.js";

import { publishPosts } from "../lib/functions.js";

import { 
  userState,
  updateProfileUser
 } from "../firebase/auth.js";

let showPublish;

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
  let displayName, photoURL, email;
  let arrayStart = [];

  const btnReturn = divElemt.querySelector("#btnReturn");

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
      publishPosts(formPublishAccount, miModalPublishVoid, btnReturn, displayName, photoURL, email);
    }
  })

  localStorage.setItem("Nombre", nombreUsuario);
  localStorage.setItem("Correo",emailUsuario );
  const disName = localStorage.getItem("Nombre");
  const emailUsu = localStorage.getItem("Correo");

  UserNotExistCreate();

  async function UserNotExistCreate() {
    const querySnapshote = await queryEmailUnique(emailUsu);
    console.log(querySnapshote.size);
    if (querySnapshote.size > 0) {
      console.log("usuario registrado");
    } else {
      await saveUser(disName, emailUsu);
      console.log("datos guardados");
    }
  }

  let idUsuarioLogin;
  
  async function getIdUsers() {
    const querySnapshot= await getUsers();
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {   
      if(displayName==doc.data().nameUser){       
        idUsuarioLogin=doc.id;
        console.log(idUsuarioLogin);
      }
    });
  
  }

  getIdUsers();
  let querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto;
  showPublish = async () => {
    let contStars = [];
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
      contStars = doc.data().likesPost;
     
      let iconStars;
     
    
      (contStars.indexOf(idUsuarioLogin) !==-1)? iconStars = 'paint' : iconStars = '';
      
      if (displayName == userName) {
        templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars)

      }

    });

    const postContainerAccount = document.querySelector('#postContainerAccount');
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

    const iconPostStart = document.querySelectorAll(".iconPostStart");
//



///
    iconPostStart.forEach((icon) => {
      icon.addEventListener("click", async (e) => {
        console.log("haces click");
        const idPost = e.target.dataset.id;
        console.log("idPost", idPost);
        if (e.target.classList.contains('paint')) {
          downLikes(idPost, idUsuarioLogin).FieldValue;
          console.log("se despinto");
          await showPublish();
        } else {
          upLikes(idPost, idUsuarioLogin).FieldValue;
          e.target.classList.add('paint')
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

  //  const editAccountUser = divElemt.querySelector("#editAccountUser");
  //  editAccountUser.addEventListener("click", async function () {})



  return divElemt;

}

