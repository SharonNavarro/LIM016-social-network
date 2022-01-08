import { userState } from "../firebase/auth.js"
import { templateHome, templatePublishes } from "./templates/templateHome.js"
import {
  savePublish, getDocs,
  doc,
  collection,
  getPublishes,
  db,
  deletePublish,
  updatePublish,
  deleteDoc,
  getPublish,
  /*  getPublishOrder */

} from "../firebase/firestore.js"

export default () => {
  const viewHome = templateHome;
  const divElemt = document.createElement('section');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;

  const nameUser = divElemt.querySelector("#nameUser");
  const photoUser = divElemt.querySelector("#photoUser");

  const formPublish = divElemt.querySelector("#formPublish");
  const postContainer = divElemt.querySelector("#postContainer");


  userState((user) => {
    if (user) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      nameUser.innerHTML = displayName;
      photoUser.src = photoURL;
    }
  })
  const miModalPublishVoid = divElemt.querySelector("#miModalPublishVoid");
  const btnReturn = divElemt.querySelector("#btnReturn");

  formPublish.addEventListener("submit", async (e) => {

    e.preventDefault();
    const textPost = formPublish['textPost'].value;

    if (textPost == "" || textPost.trim() == "") {
      miModalPublishVoid.setAttribute("class", "show");
      btnReturn.addEventListener("click", closeModal)


    } else {

      let hoy = new Date();
      let datePublish, hourPublish;
      hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
      datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();

      console.log("hora de publicacion es", hourPublish);
      console.log("fecha de publicacion es", datePublish);
      await savePublish(textPost, datePublish, hourPublish/* ,userName,urlPhoto,totalStars,totalHearts,comments */);
      formPublish.reset();

      await showPublish();

    }
  });

  function closeModal() {
    miModalPublishVoid.setAttribute("class", "closeModal");
  }

  return divElemt;
};

window.addEventListener('DOMContentLoaded', async (e) => {
  await showPublish();
})

async function showPublish() {

  let displayName = "";
  let photoURL = "";
  userState((user) => {
    if (user) {
      displayName = user.displayName;
      const email = user.email;
      photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    }
  })

  const querySnapshot = await getPublishes();
  let templatePosts = "";
  querySnapshot.forEach((doc) => {
    const post = doc.data();
    post.id = doc.id;
    let idPosts = post.id;
    let contentPosts = doc.data().content;
    const datePublish = doc.data().datePublish;
    const hourPublish = doc.data().hourPublish;
    // console.log(contentPosts);

    templatePosts += templatePublishes(photoURL, displayName, idPosts, contentPosts, datePublish, hourPublish)
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


  selectEdition.forEach(selectEdition => {
    selectEdition.addEventListener("change", async function () {

      const selectedOption = this.options[selectEdition.selectedIndex];
      /*   orderPublishes(); */



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
                  const texto = await getPublish(selectedOption.dataset.id)

                  const texte = (texto.data().content);
                  e.value = texte;

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

      /*   function orderPublishes() {
          const ordenado = getPublishOrder();
          
            console.log("aqui esta ordenado", getPublishOrder());
       
  
        } */
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




