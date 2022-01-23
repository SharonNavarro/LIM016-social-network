import { userState, updatePhotoUser } from "../firebase/auth.js";

import { 
  publishPostsAccount,
  editBioProfile
 } from "../lib/functions.js";

import { 
  templateViewAccount,
  templateViewAccountProfileUser,
  templateForInsideBio
} from "./templates/templateAccount.js";

import {
  templatePublishes
} from "./templates/templateHome.js";

import {
  getPublishes,
  deletePublish,
  updatePublish,
  getPublish,
  getUsers,
  getUser,
  inLikes,
  desLikes,
  inHeart,
  desHeart,
  queryEmailUnique,
} from "../firebase/firestore.js";

let showPublishAccount, getFileAddAccount;
let displayNameAccount, photoURLAccount, emailAccount, useridAccount;
let formPublishAccount, miModalPublishVoidAccount;
let btnReturnAccount, registerForm, modal,  publishBio, idPosts;

export default () => {

  const viewAccount = templateViewAccount;
  const viewAccountProfileUser = templateViewAccountProfileUser;

  const divElemt = document.createElement('section');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccount;

  const userProfile =divElemt.querySelector('.userProfile');
  userProfile.innerHTML = viewAccountProfileUser;

  const photoUser = divElemt.querySelector('#photoUser');
  const nameUser = divElemt.querySelector('.nameUser');
  const photoPerfil = divElemt.querySelector('.photoPerfil');
  const name = divElemt.querySelector('.name');

  formPublishAccount = divElemt.querySelector("#formPublishAccount");
  miModalPublishVoidAccount = divElemt.querySelector("#miModalPublishVoidAccount");
  btnReturnAccount = divElemt.querySelector("#btnReturnAccount");

   /* ----OBSERVADOR---------*/

  userState(async (user) => {
    if (user) {
      displayNameAccount = user.displayName;
      photoURLAccount = user.photoURL;
      emailAccount = user.email;
      nameUser.innerHTML = displayNameAccount;
      name.innerHTML = displayNameAccount;
      photoUser.src = photoURLAccount;  
      photoPerfil.src = photoURLAccount;     
      useridAccount = user.uid;
      await publishBio();
      editBioProfile();
      await updatePhoto();
      publishPostsAccount(formPublishAccount, miModalPublishVoidAccount, btnReturnAccount);
      await showPublishAccount();
    }
  })

  /* ----ACTUALIZAR FOTO DE PERFIL---------*/

  const updateUserPhoto = divElemt.querySelector('#btnUpdateUserPhoto');
  updateUserPhoto.addEventListener("change", uploadFileAccount(updateUserPhoto));

    function uploadFileAccount(photo) {

      console.log("entraaa");
      getFileAddAccount = photo.files[0];
      console.log("se obtiene", getFileAddAccount);

    }

  /* ----MODAL PARA EDITAR BIO---------*/

  const openModalEditar = divElemt.querySelector('#editAccountUser');
    modal = divElemt.querySelector('.modal');
    const closeModalEditar = divElemt.querySelector('.modal__close');
    registerForm = divElemt.querySelector("#register-form");
    const containerBio = divElemt.querySelector('#containerBio');

    let querySnapshotBio;

    publishBio = async () => {
    
      openModalEditar.addEventListener("click", async (e)=>{
        e.preventDefault();
        modal.classList.add('modal--show'); 
        registerForm["userNameBio"].value = displayNameAccount;
      })

      closeModalEditar.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.remove('modal--show');
      });

      let interests = "";
      let locationBio = "";
      let socialNetwork = "";

      containerBio.innerHTML = templateForInsideBio(interests, locationBio, socialNetwork);

      let nameUserBio, emailUser, photo, frontPageURL;

      querySnapshotBio = await getUsers();
      let templateBio = "";

      querySnapshotBio.forEach((doc) => {
        nameUserBio = doc.data().nameUser;
        emailUser = doc.data().emailUser;
        photo = doc.data().photo;
        frontPageURL = doc.data().frontPageURL;
        interests = doc.data().interests;
        locationBio = doc.data().location;
        socialNetwork = doc.data().socialNetwork;

        if (displayNameAccount == nameUserBio) {
          templateBio = templateForInsideBio(interests, locationBio, socialNetwork);
          registerForm["userNameBio"].value = nameUserBio;
          registerForm["interestBio"].value = interests;
          registerForm["locacionBio"].value = locationBio;
          registerForm["socialNetworkBio"].value = socialNetwork;
        }
        containerBio.innerHTML = templateBio;
    });
  };

 /* ----MOSTRAR PUBLICACIONES---------*/

  let idUsuarioLogin, querySnapshot, post, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto;
 
  showPublishAccount = async () => {
    
    getFileAddAccount="";
    await getIdUsers();
    async function getIdUsers() {
      const querySnapshot = await getUsers();
      querySnapshot.forEach((doc) => {
        if (displayNameAccount == doc.data().nameUser) {
              idUsuarioLogin = doc.data().idUser;
              console.log(displayNameAccount)
        }
      });
    }
    
    let imagenAdd;
    let contStars = [];
    let contHearts = [];
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
      let idUser = doc.data().idUser;
      imagenAdd = doc.data().imagen;
      contHearts = doc.data().hearts;
     
      let iconStars;
      let iconHearts;
     
      (contStars.indexOf(idUsuarioLogin) !==-1)? iconStars = 'paint' : iconStars = '';
      
      (contHearts.indexOf(idUsuarioLogin) !==-1)? iconHearts = 'paintHeart' : iconHearts = ''; 

      if (idUser == idUsuarioLogin) {
        templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars, imagenAdd, iconHearts, contHearts.length);
      }

    });

    const postContainerAccount = divElemt.querySelector('#postContainerAccount');
    postContainerAccount.innerHTML = templatePosts;

    const selectEdition = document.querySelectorAll(".selectEdition");
    const miModal = document.querySelector("#miModal");
    const btnDelete = document.querySelector("#btnDelete");
    const btnCancel = document.querySelectorAll(".btnCancel");
    const btnCancelUpdate = document.querySelectorAll(".btnCancelUpdate");
    const contenido = document.querySelectorAll(".contenido");
    const containerIconsBtn = document.querySelectorAll(".containerIconsBtn");
    const groupBtnUpdate = document.querySelectorAll(".groupBtnUpdate");
    const btnSave = document.querySelectorAll(".btnSave");
   


    const iconPostStart = document.querySelectorAll(".iconPostStart");
    const iconPostHeart = document.querySelectorAll(".iconPostHeart");
//
    const getFile = document.querySelector("#fichero");
    getFile.addEventListener("change", uploadFile);


    function uploadFile() {

      console.log("entraaa");
      getFileAddAccount = getFile.files[0];
      console.log("se obtiene", getFileAddAccount);

    }

     

    iconPostStart.forEach((icon) => {
      icon.addEventListener("click", async (e) => {
        const idPost = e.target.dataset.id;
        if (e.target.classList.contains('paint')) {
          desLikes(idPost, idUsuarioLogin).FieldValue;
          console.log("se despinto");
          await showPublishAccount();
        } else {
          inLikes(idPost, idUsuarioLogin).FieldValue;
          e.target.classList.add('paint')
          console.log("se pinto");
          await showPublishAccount();
        }
      })
    })

    iconPostHeart.forEach((iconHeart) => {
      iconHeart.addEventListener("click", async (e) => {
        const idPostHeart = e.target.dataset.id;
        if (e.target.classList.contains('paintHeart')) {
          desHeart(idPostHeart, idUsuarioLogin).FieldValue;
          await showPublishAccount();
        } else {
          inHeart(idPostHeart, idUsuarioLogin).FieldValue;
          e.target.classList.add('paintHeart');
          await showPublishAccount();
        }
      })
    })


    selectEdition.forEach(selectEdition => {


      selectEdition.addEventListener("change", async function () {
        const selectedOption = this.options[selectEdition.selectedIndex];

        if (selectedOption.value === "delete") {
          miModal.setAttribute("class", "showDelete");
          btnDelete.addEventListener("click", modalDelete);
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

              btnCancelUpdate.forEach((btnCancelUp) => {

                btnCancelUp.addEventListener("click", async (btnCancel) => {
                  if (btnCancel.target.dataset.id == selectedOption.dataset.id) {
                    const getPost = await getPublish(selectedOption.dataset.id)
                    const text = (getPost.data().content);
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
          miModal.setAttribute("class", "modal");
          await deletePublish(selectedOption.dataset.id);
          await showPublishAccount();
        }
        async function cancelarModal() {
          miModal.setAttribute("class", "modal");
          resetIconOption();
          await showPublishAccount();
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

  

  return divElemt;

};

  
  export { 
    showPublishAccount, 
    getFileAddAccount, 
    displayNameAccount, 
    photoURLAccount, 
    emailAccount, 
    useridAccount, 
    formPublishAccount, 
    miModalPublishVoidAccount, 
    btnReturnAccount,
    registerForm,
    modal,
    publishBio
  }
  


