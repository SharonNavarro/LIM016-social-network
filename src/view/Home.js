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
  getPublish

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
      await savePublish(textPost);
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
    let contentPosts = doc.data().content

    templatePosts += templatePublishes(photoURL, displayName, idPosts, contentPosts)
  });
  postContainer.innerHTML = templatePosts;

  const selectEdition = document.querySelectorAll(".selectEdition");
  const miModal = document.querySelector("#miModal");

  const btnDelete = document.querySelector("#btnDelete");
  const btnCancel = document.querySelector("#btnCancel");
  const btnCancelUpdate = document.querySelectorAll(".btnCancelUpdate");
  const btnEdit = document.querySelector("#btnEdit");
  const contenido = document.querySelectorAll(".contenido");
  const containerIconsBtn = document.querySelectorAll(".containerIconsBtn");
  const groupBtnUpdate = document.querySelectorAll(".groupBtnUpdate");
  const btnSave = document.querySelectorAll(".btnSave");


  selectEdition.forEach(selectEdition => {
    selectEdition.addEventListener("change", async function () {

      const selectedOption = this.options[selectEdition.selectedIndex];

      async function modalDelete() {
        console.log(btnDelete);
        miModal.setAttribute("class", "modal");
        await deletePublish(selectedOption.dataset.id);
        await showPublish();

      }
      async function cancelarModal() {
        miModal.setAttribute("class", "modal");
        console.log(selectedOption.value);
        if (selectedOption.value != "menuOptions")
          selectEdition.value = "menuOptions";
      }


      if (selectedOption.value === "delete") {
        miModal.setAttribute("class", "showDelete");       
        btnDelete.addEventListener("click", modalDelete);
        btnCancel.addEventListener("click", cancelarModal);
      }
      else if (selectedOption.value === "edit") {

        contenido.forEach((e) => {

          if (e.dataset.id == selectedOption.dataset.id) {
            e.disabled = false;

            containerIconsBtn.forEach((e) => {
              if (e.dataset.id == selectedOption.dataset.id) {

                e.style.display = "none";
              }
            });
            groupBtnUpdate.forEach((e) => {
              if (e.dataset.id == selectedOption.dataset.id) {

                e.style.display = "block"
              }
            });

//inicio de boton que modifica la publicacion
            btnSave.forEach((btn) => {

              btn.addEventListener("click", async () => {

                if (btn.dataset.id == selectedOption.dataset.id) {
                  const idUpdate = (selectedOption.dataset.id);
                  const textUpdate = (e.value);

                  await updatePublish(idUpdate, textUpdate);
                  groupBtnUpdate.forEach((e) => {
                    if (e.dataset.id == selectedOption.dataset.id) {

                      e.style.display = "none"
                    }
                  });
                  containerIconsBtn.forEach((e) => {
                    if (e.dataset.id == selectedOption.dataset.id) {

                      e.style.display = "block";
                    }
                  });
                  e.disabled = true;
                  if (selectedOption.value != "menuOptions") {
                    selectEdition.value = "menuOptions";
                  }

                }

              })

            });

//inicio de boton cuando se cancela la edicion
            btnCancelUpdate.forEach((btnUpdate) => {
           
              btnUpdate.addEventListener("click", () => {
                console.log(btnUpdate.dataset.id);
                if (btnUpdate.dataset.id == selectedOption.dataset.id) {

                  groupBtnUpdate.forEach((e) => {
                    if (e.dataset.id == selectedOption.dataset.id) {

                      e.style.display = "none"
                    }
                  });
                  containerIconsBtn.forEach((e) => {
                    if (e.dataset.id == selectedOption.dataset.id) {

                      e.style.display = "block";
                    }
                  });
                
                  if (selectedOption.value != "menuOptions"){
                    selectEdition.value = "menuOptions";
                  }
                  e.disabled = true;
                  
                }
              })

            })
            //fin de bpton cancelar cuando se edita
          }

        })
//fin de recorrer contenido

      }
      //fin del else

    })
  })

}




