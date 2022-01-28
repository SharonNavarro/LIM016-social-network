import { 
    userState
 } from "../firebase/auth.js";

import { 
    templateFavorite
 } from "./templates/templateFavorite.js";

import {
    templatePublishes,
    templatePublishesUsers
  } from "./templates/templateHome.js";

import {
    getPublishes,
    deletePublish,
    updatePublish,
    getPublish,
    getUsers,
    inLikes,
    desLikes,
    inHeart,
    desHeart,
} from "../firebase/firestore.js";

export default () => {

    const viewFavorite= templateFavorite;
    const divElemt = document.createElement('section');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewFavorite;

    let showPublishFavorite;
    let displayNameFavorite, photoURLFavorite, emailFavorite, useridFavorite;

    userState(async (user) => {
        if (user) {
          displayNameFavorite = user.displayName;
          photoURLFavorite = user.photoURL;
          emailFavorite = user.email;
          useridFavorite = user.uid;
          await showPublishFavorite();
        }
    })

    let idUsuarioLogin, followed, querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto;

    showPublishFavorite = async () => {
    
        await getIdUsers();
        async function getIdUsers() {
          const querySnapshot = await getUsers();
          querySnapshot.forEach((doc) => {
            if (displayNameFavorite == doc.data().nameUser) {
              idUsuarioLogin = doc.data().idUser;
              followed = doc.data().followed;
              console.log("aquyiiiiii", followed)
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
            let btnFollow = document.querySelectorAll(".btnFollow");
            
            (contStars.indexOf(idUsuarioLogin) !==-1)? iconStars = 'paint' : iconStars = '';
            
            (contHearts.indexOf(idUsuarioLogin) !==-1)? iconHearts = 'paintHeart' : iconHearts = ''; 

            (followed.indexOf(idUser) !== -1) ? btnFollow.value = "Siguiendo": btnFollow.value = "Seguir";

            if (displayNameFavorite == userName && iconStars == 'paint') {
                templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars, imagenAdd, iconHearts, contHearts.length);
            } else if (displayNameFavorite !== userName && iconStars == 'paint') {
                templatePosts += templatePublishesUsers(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars, imagenAdd, iconHearts, contHearts.length, btnFollow.value);
            }
        
        });

        const favoritesPublishes = divElemt.querySelector('.favoritesPublishes');
        favoritesPublishes.innerHTML = templatePosts;

        const selectEdition = document.querySelectorAll(".selectEdition");
        const miModal = document.querySelector("#miModal");
        const btnDelete = document.querySelector("#btnDelete");
        const btnCancel = document.querySelectorAll(".btnCancel");
        const btnCancelUpdate = document.querySelectorAll(".btnCancelUpdate");
        const contenido = document.querySelectorAll(".contenido");
        const containerIconsBtn = document.querySelectorAll(".containerIconsBtn");
        const groupBtnUpdate = document.querySelectorAll(".groupBtnUpdate");
        const btnSave = document.querySelectorAll(".btnSave");

        const btnFollow = document.querySelectorAll(".btnFollow");
        const iconPostStart = document.querySelectorAll(".iconPostStart");
        const iconPostHeart = document.querySelectorAll(".iconPostHeart");

        btnFollow.forEach((btn) => {
          btn.addEventListener("click", async() => {

              const getPost = await getPublish(btn.dataset.id)
              const idUserPost = (getPost.data().idUser);

              if (btn.value == "Seguir") {
                  btn.value = "Siguiendo"
                  inFollow(idUsuarioLogin, idUserPost).FieldValue;
                  console.log("empezo a seguirlo");
                  await showPublishFavorite();
              } else {
                  btn.value = "Seguir"
                  desFollow(idUsuarioLogin, idUserPost).FieldValue;
                  console.log("dejo de seguirlo");
                  await showPublishFavorite();
                }
          })
        })

        iconPostStart.forEach((icon) => {
            icon.addEventListener("click", async (e) => {
              const idPost = e.target.dataset.id;
              if (e.target.classList.contains('paint')) {
                desLikes(idPost, idUsuarioLogin).FieldValue;
                console.log("se despinto");
                await showPublishFavorite();
              } else {
                inLikes(idPost, idUsuarioLogin).FieldValue;
                e.target.classList.add('paint')
                console.log("se pinto");
                await showPublishFavorite();
              }
            })
        })
      
        iconPostHeart.forEach((iconHeart) => {
            iconHeart.addEventListener("click", async (e) => {
              const idPostHeart = e.target.dataset.id;
              if (e.target.classList.contains('paintHeart')) {
                desHeart(idPostHeart, idUsuarioLogin).FieldValue;
                await showPublishFavorite();
              } else {
                inHeart(idPostHeart, idUsuarioLogin).FieldValue;
                e.target.classList.add('paintHeart');
                await showPublishFavorite();
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
                await showPublishFavorite();
              }
              async function cancelarModal() {
                miModal.setAttribute("class", "modal");
                resetIconOption();
                await showPublishFavorite();
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
            })
          })

    }

    return divElemt;  
};