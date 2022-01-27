import { userState } from "../firebase/auth.js"

import { publishPosts } from "../lib/functions.js"

import {
  templateHome,
  templatePublishes,
  templatePublishesUsers
} from "./templates/templateHome.js"

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
  inFollow,
  desFollow
} from "../firebase/firestore.js"


let showPublish, getFileAdd;
let displayName, photoURL, email, userid;
let formPublish, miModalPublishVoid, btnReturn;

export default () => {

  const viewHome = templateHome;
  const divElemt = document.createElement('section');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;



  const nameUser = divElemt.querySelector("#nameUser");
  const photoUser = divElemt.querySelector("#photoUser");
  formPublish = divElemt.querySelector("#formPublish");
  miModalPublishVoid = divElemt.querySelector("#miModalPublishVoid");
  btnReturn = divElemt.querySelector("#btnReturn");



  userState(async (user) => {

    if (user) {
      displayName = user.displayName;
      photoURL = user.photoURL;
      email = user.email;
      nameUser.innerHTML = displayName;
      photoUser.src = photoURL;
      userid = user.uid;
      //console.log("para la publicacion",userid);
      await showPublish();
      publishPosts(formPublish, miModalPublishVoid, btnReturn);
    }
  })

  let idUsuarioLogin, followed, querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto;

  showPublish = async () => {
    getFileAdd=""
    await getIdUsers();
    async function getIdUsers() {
      const querySnapshot = await getUsers();

      querySnapshot.forEach((doc) => {
        if (displayName == doc.data().nameUser) {
          idUsuarioLogin = doc.data().idUser;
          followed = doc.data().followed;
          console.log(doc.data(), followed)
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

      (contStars.indexOf(idUsuarioLogin) !== -1) ? iconStars = 'paint' : iconStars = '';
      
      (contHearts.indexOf(idUsuarioLogin) !==-1)? iconHearts = 'paintHeart' : iconHearts = '';
      
      (followed.indexOf(idUser) !==-1)? btnFollow.value="Siguiendo" : btnFollow.value="Seguir"; 

      if (idUser == idUsuarioLogin) {
        templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars, imagenAdd, iconHearts, contHearts.length);

      } else {
        templatePosts += templatePublishesUsers(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars, imagenAdd, iconHearts, contHearts.length, btnFollow.value);
      }

    });

    const postContainer = document.querySelector("#postContainer");
    postContainer.innerHTML = templatePosts;

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
    //--------------------------------------------
    const getFile = document.querySelector("#fichero")

    getFile.addEventListener("change", uploadFile)

    function uploadFile() {

      console.log("entraaa");
      getFileAdd = getFile.files[0];
      console.log("se obtiene", getFileAdd);

    }

    btnFollow.forEach((btn) => {
      btn.addEventListener("click", async () => {

        const getPost = await getPublish(btn.dataset.id)
        const idUserPost = (getPost.data().idUser);

        if (btn.value == "Seguir") {
            btn.value = "Siguiendo"
            inFollow(idUsuarioLogin, idUserPost).FieldValue;
            console.log("empezo a seguirlo");
            await showPublish();
        } else {
          btn.value = "Seguir"
            desFollow(idUsuarioLogin, idUserPost).FieldValue;
            console.log("dejo de seguirlo");
            await showPublish();
        }
      })
    })

    iconPostStart.forEach((icon) => {
      icon.addEventListener("click", async (e) => {
        const idPost = e.target.dataset.id;
        if (e.target.classList.contains('paint')) {
          desLikes(idPost, idUsuarioLogin).FieldValue;
          console.log("se despinto");
          await showPublish();
        } else {
          inLikes(idPost, idUsuarioLogin).FieldValue;
          e.target.classList.add('paint')
          console.log("se pinto");
          await showPublish();
        }
      })
    })

    iconPostHeart.forEach((iconHeart) => {
      iconHeart.addEventListener("click", async (e) => {
        const idPostHeart = e.target.dataset.id;
        if (e.target.classList.contains('paintHeart')) {
          desHeart(idPostHeart, idUsuarioLogin).FieldValue;
          await showPublish();
        } else {
          inHeart(idPostHeart, idUsuarioLogin).FieldValue;
          e.target.classList.add('paintHeart');
          await showPublish();
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
            }
          })
        }

        async function modalDelete() {
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
      })
    })

  }

  return divElemt;

};

export { showPublish, getFileAdd, displayName, photoURL, email, userid, formPublish, miModalPublishVoid, btnReturn }
