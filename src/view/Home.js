import { userState } from "../firebase/auth.js"
import { templateHome, templatePublishes, templatePublishesUsers } from "./templates/templateHome.js"
import { publishPosts } from "../lib/functions.js"
import {
  savePublish, getPublishes, deletePublish, updatePublish, getPublish, saveUser, getUsers,
  inLikes, desLikes, queryEmailUnique,
} from "../firebase/firestore.js"

import { emailUsuario, nombreUsuario, idUsuario } from "./Login.js"

let showPublish,getFile1;

export default () => {

  const viewHome = templateHome;
  const divElemt = document.createElement('section');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;

  let displayName, photoURL, email, userid;

  const nameUser = divElemt.querySelector("#nameUser");
  const photoUser = divElemt.querySelector("#photoUser");
  const formPublish = divElemt.querySelector("#formPublish");
  const miModalPublishVoid = divElemt.querySelector("#miModalPublishVoid");
  const btnReturn = divElemt.querySelector("#btnReturn");

  

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
      publishPosts(formPublish, miModalPublishVoid, btnReturn, displayName, photoURL, email, userid);


    }
  })
    (localStorage.setItem("IdUsuario", idUsuario));
  localStorage.setItem("Nombre", nombreUsuario);
  localStorage.setItem("Correo", emailUsuario);
  UserNotExistCreate();
  async function UserNotExistCreate() {

    const disName = localStorage.getItem("Nombre");
    const emailUsu = localStorage.getItem("Correo");
    const idUsu = localStorage.getItem("IdUsuario");
    const querySnapshote = await queryEmailUnique(emailUsu);
    if (querySnapshote.size > 0) {
      console.log("usuario registrado");
    } else {
      await saveUser(idUsu, disName, emailUsu);
      console.log("datos guardados");
      await showPublish();
    }

  }




  let idUsuarioLogin, querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto;

  
 

  showPublish = async () => {

    await getIdUsers();
    async function getIdUsers() {
      const querySnapshot = await getUsers();
      querySnapshot.forEach((doc) => {
        if (displayName == doc.data().nameUser) {
          idUsuarioLogin = doc.data().idUser;
        }
      });


    }
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

      (contStars.indexOf(idUsuarioLogin) !== -1) ? iconStars = 'paint' : iconStars = '';

      if (displayName == userName) {
        templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars)

      } else {
        templatePosts += templatePublishesUsers(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars)
      }

    });

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
    
    const iconPostStart = document.querySelectorAll(".iconPostStart");
    //--------------------------------------------
    const getFile = document.querySelector("#fichero");
    getFile.addEventListener("change", ff)  
  
     
  function ff(){
    console.log("entraaa");
    getFile1=getFile.files[0];
    console.log("se obtiene",getFile1); 

 }
  

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

export { showPublish,getFile1 }
