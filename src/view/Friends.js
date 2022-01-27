import { userState } from "../firebase/auth.js"

import { 
  templateViewFriends,
  templateFriend
} from "./templates/templateFriends.js";

import {
  getPublish,
  getUsers,
  getUser,
  inFollow,
  desFollow
} from "../firebase/firestore.js"

export default () => {
  
  const viewFriends = templateViewFriends;

  const divElemt = document.createElement("section");
  divElemt.classList.add("position");
  divElemt.innerHTML = viewFriends;

  let idUsuarioLogin, followed;
  let showPFollowed, displayName, userid, idUserFollow;
  let query, nameUserFollow, photoURLFollow;

  userState(async (user) => {
    if (user) {
      displayName = user.displayName;
      // photoURL = user.photoURL;
      // email = user.email;
      userid = user.uid;
      showPFollowed();
    }
  })

showPFollowed = async () => {

  await getIdUsers();
  async function getIdUsers() {
    const querySnapshot = await getUsers();

    querySnapshot.forEach((doc) => {
      if (displayName == doc.data().nameUser) {
        idUsuarioLogin = doc.data().idUser;
        followed = doc.data().followed;
        
      }
    })
  };

let templatePosts;

let containerAllFriends = document.querySelector(".containerAllFriends");
templatePosts = "";
  followed.forEach( async (idUserFollower) => {
    query = await getUser(idUserFollower);
    nameUserFollow = query.data().nameUser;
    idUserFollow = query.data().idUser;
    photoURLFollow = query.data().photoURL;

    let btnFollow = document.querySelectorAll(".btnFollows");
    btnFollow.value = "Siguiendo";
    if (btnFollow.value=="Siguiendo") {
      templatePosts += templateFriend(btnFollow.value, photoURLFollow, nameUserFollow);
      containerAllFriends.innerHTML = templatePosts;
    } 

  })

  
  const btnFollow = divElemt.querySelectorAll(".btnFollows");

  btnFollow.forEach((btn) => {
    btn.addEventListener("click",  () => {
      console.log("dksndjksn")

      // const getPost = await getPublish(btn.dataset.id)
      // const idUserPost = (getPost.data().idUser);

      // if (btn.value == "Seguir")  {
      //      btn.value = "Seguir"
      //     desFollow(idUsuarioLogin, idUserPost).FieldValue;
      //     console.log("dejo de seguirlo");
      //     await showPFollowed();
      // }
    })
  })

};


// let query;
// query = await getUser(userid);
// query.forEach((doc) => {
//   idUser = doc.data().followed;
//   if (followed.indexOf(idUser) !==-1) {
//     let nombre = doc.data().nameUser;
//     console.log(nombre);
//   }
// })  



  return divElemt;
};
