import { userState } from "../firebase/auth.js"

import {
  savePublish, getDocs,
  doc,
  collection,
  getPublish,
  db,
  deletePublish,
  deleteDoc

} from "../firebase/firestore.js"

export default () => {
  const viewHome = `
    <div class="containerHome" id="containerHome">
    <div class="content" > 
    
   <div class="storyGallery">

      <div class="story story1"> 
        <img src="./images/plusIcon.png">
      </div>

   <div class="story story2"> 
     <p>Alessandra</p>
   </div>

   <div class="story story3"> 
     <p>Rocio</p>
   </div>
   <div class="story story2"> 
   <p>Camila</p>
 </div>

    </div>
 
<div class="alignCenter" >

  <div class="containerWriter">
    
    <div class="userProfile">
      <img id="photoUser">
      <div>
        <p><bold id="nameUser"></bold></p>
      </div>
    </div> 

    <form class="containerTextPost" id="formPublish">
      <textarea id="textPost" rows="3" placeholder="What's on your mind?"></textarea>
      
      <div class="containerIconsBtn">
        <div class="addPost">
          <a href="#"><i class="far fa-image"></i></a>
          <a href="#"><i class="fas fa-unlock-alt"></i></a>
          <button class="postBtn" id="btnPublish">Publicar</button>
        </div>
      </div>
    </form>
  </div>

    <div  id="postContainer">
    
    </div>


    <div class="containerRecomendations">

      <p>You might like...</p>

      <div class="containerUsersRecomendations">

        <div class="userProfileRecomendations">
          <img src="./images/profile2.png">
            <div>
              <p>Nicki Mendez</p>
              <span>@Nickkki</span>
            </div>
            <button type="button">
                <img src="./images/Verified.png">
            </button>
        </div> 

        <div class="userProfileRecomendations">
          <img src="./images/profile2.png">
            <div>
              <p>Camila Torres</p>
              <span>@CTorres20</span>
            </div>
            <button type="button">
              <img src="./images/Verified.png">
            </button>
        </div> 

        <div class="userProfileRecomendations">
          <img src="./images/profile2.png">
            <div>
              <p>Roberto Armando</p>
              <span>@Robert</span>
            </div>
            <button type="button">
              <img src="./images/Verified.png">
            </button>
        </div> 

        <div class="userProfileRecomendations">
          <img src="./images/profile2.png">
            <div>
              <p>Siena Gomez</p>
              <span>@Gom23</span>
            </div>
            <button type="button">
              <img src="./images/Verified.png">
            </button>
        </div> 
            
      </div>

    </div>


  <div class="containerPosts">

    <div class="containerAlignItems">

        <div class="userProfile">
          <img src="./images/profile1.png">
          <div>
              <p>Melanie Sanchez</p>
              <span>@SMelanie12</span>
          </div>
        </div> 

        <button type="button">
                <i class="fas fa-ellipsis-h"></i>
        </button>

    </div>

        <div class="containerTextPost">
            <p>Bienvenidxs a la experiencia Netcoins!! Contrary to popular 
            belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin.</p>
        
            <div class="containerIconsBtn">
                <div class="addPosts">
                    <div class="iconPost"><img src="./images/heartIcon.png">1508</div>
                    <div class="iconPost"><img src="./images/textGlobeIcon.png"></div>
                    <div class="iconPost"><img src="./images/Star.png"></div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
  
    <div id="miModal" class="modal">    
    <div  class="modal-contenido">
      <h2>¿Estás seguro de eliminar la publicación?</h2>
      <button id="btnDelete">eliminar</button>
      <button id="btnEdit">cancelar</button>
    </div> 
    </div> 
    </div> 
   
 `;
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

  formPublish.addEventListener("submit", async (e) => {
    e.preventDefault();
    const textPost = formPublish['textPost'].value;
    await savePublish(textPost);
    formPublish.reset();
    console.log("enviado");
    postContainer.innerHTML = "";
    await get();

  });

  return divElemt;

};

window.addEventListener('DOMContentLoaded', async (e) => {
  await get();

})

async function get() {
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

  const querySnapshot = await getPublish();
  querySnapshot.forEach((doc) => {
    const post = doc.data();
    post.id = doc.id;
    postContainer.innerHTML += `        
          
    <div class="containerPosts" >
          <div class="containerAlignItems"> 
    
            <div class="userProfile">
            <img src=${photoURL}>
            <div>
            <p><bold > ${displayName}</bold></p>
               
            </div>
            </div> 
           
               
              <select class="selectEdition  fa" > 
             <option  style="display:none" class="  fa" selected> &#xf141; </option>
             <option  value="edit"   data-id="${post.id}" class="op fa"> &#xf044;  </option>
             <option value="delete" data-id="${post.id}" class="op fa">&#xf2ed;   </option>
             </select>
    
          </div>
    
            <div class="containerTextPost">
                <p> ${doc.data().content}</p>
            
                <div class="containerIconsBtn">
                    <div class="addPosts">
                        <div class="iconPost"><img src="./images/heartIcon.png"></div>
                        <div class="iconPost"><img src="./images/textGlobeIcon.png"></div>
                        <div class="iconPost"><img src="./images/Star.png"></div>
                    </div>
                </div>
            </div>
            </div>   
          
          `
  });

  const selectEdition = document.querySelectorAll(".selectEdition");
  const miModal = document.querySelector("#miModal");
  const btnDelete = document.querySelector("#btnDelete");
  const btnEdit = document.querySelector("#btnEdit");

  selectEdition.forEach(selectEdition => {
    selectEdition.addEventListener("change", function () {

      const selectedOption = this.options[selectEdition.selectedIndex];
      async function modalDelete () {
        miModal.setAttribute("class", "modal");
        await deletePublish(selectedOption.dataset.id);
        postContainer.innerHTML = "";
        await get();
      }

      if (selectedOption.value === "delete") {
        miModal.setAttribute("class", "show");
        btnDelete.addEventListener("click",modalDelete )
      }
      else {


      }

    })
  })

}





