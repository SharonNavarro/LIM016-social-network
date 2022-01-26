import { 
  templateViewFriends,
  templateFriend
} from "./templates/templateFriends.js";

import { userState } from "../firebase/auth.js"

export default () => {
  
  const viewFriends= templateViewFriends;

  const divElemt = document.createElement("section");
  divElemt.classList.add("position");
  divElemt.innerHTML = viewFriends;

  userState(async (user) => {

    if (user) {
      // displayName = user.displayName;
      // photoURL = user.photoURL;
      // email = user.email;
      // nameUser.innerHTML = displayName;
      // photoUser.src = photoURL;
      // userid = user.uid;
      showFollowed();
    }
  })

  let idUsuarioLogin, followed, querySnapshot, post, idPosts, contentPosts, dateOfPublish, hourPublish, userName, urlPhoto, showFollowed;

  showFollowed = async () => {
    getFileAdd=""
    await getIdUsers();
    async function getIdUsers() {
      const querySnapshot = await getUsers();
      querySnapshot.forEach((doc) => {
        if (displayName == doc.data().nameUser) {
          idUsuarioLogin = doc.data().idUser;
          followed = doc.data().followed;
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
      imagenAdd = doc.data().imagen;
      contHearts = doc.data().hearts;

      let btnFollowUsers;
      
      (followed.indexOf(idUsuarioLogin) !==-1)? btnFollowUsers.innerHTML="Seguido" : btnFollowUsers.innerHTML=""; 

      if (btnFollowUsers.innerHTML = "Seguido") {
        templatePosts += templatePublishes(userName, urlPhoto, idPosts, contentPosts, dateOfPublish, hourPublish, contStars.length, iconStars, imagenAdd, iconHearts, contHearts.length);

      }

    });

    postContainer.innerHTML = templatePosts;

    const btnFollow = document.querySelectorAll(".btnFollow");
    //--------------------------------------------

    btnFollow.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const idPost = e.target.dataset.id;
        if (e.target.classList.contains('')) {
          desFollow(idPost, idUsuarioLogin).FieldValue;
          console.log("dejo de seguir");
          await showFollowed();
        } else {
          inFollow(idPost, idUsuarioLogin).FieldValue;
          // e.target.classList.add('')
          btn.innerHTML="Seguido";
          console.log("empezo a segurilo");
          await showFollowed();
        }
      })
    })
  }



  return divElemt;
};
