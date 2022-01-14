import { 
  templateViewAccount,
  templateViewAccountProfileUser,
  templateViewAccountProfileUserBio 
} from "./templates/templateAccount.js";

import { 
  userState,
} from "../firebase/auth.js";

import {
  savePublish
} from "../firebase/firestore.js";




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

  userState(async (user) => {
    if (user) {
      displayName = user.displayName;
      photoURL = user.photoURL;
      email = user.email;
      nameUser.innerHTML = displayName;
      name.innerHTML = displayName;
      photoUser.src = photoURL;  
      photoPerfil.src = photoURL;     
      // await showPublish();
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
      //await showPublish();
    }
  });

  function closeModal() {
    miModalPublishVoid.setAttribute("class", "closeModal");
  }





  return divElemt;
};

/* window.addEventListener('DOMContentLoaded', async (e) => {
  await showPublish();
}) */
