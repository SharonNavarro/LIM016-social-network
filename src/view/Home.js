import { userState } from "../firebase/auth.js"

import {
  savePublish, /* getPublish, */ getDocs,
  doc,db,
  collection,
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
 
<div class="alignCenter" id="postContainer">

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



    <div class="containerPosts">
    
      <div class="containerAlignItems">


        <div class="userProfile">
        <img src="./images/profile2.png">
        <div>
            <p>Carlos Tarazona</p>
            <span>@Carlo</span>
        </div>
        </div> 

        <button type="button">
            <i class="fas fa-ellipsis-h"></i>
        </button>

      </div>

        <div class="containerTextPost">
            <p>Bienvenidxs a la experiencia Netcoins!! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.</p>
        
            <div class="containerIconsBtn">
                <div class="addPosts">
                    <div class="iconPost"><img src="./images/heartIcon.png">1508</div>
                    <div class="iconPost"><img src="./images/textGlobeIcon.png">2</div>
                    <div class="iconPost"><img src="./images/Star.png"></div>
                </div>
            </div>
        </div>
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
  });



  
  return divElemt;
  
};



window.addEventListener('DOMContentLoaded', async (e) => {
 
  getDocs(collection(db, "posts"))
  .then((snapshot) => {
      snapshot.forEach((doc) => {
          console.log(doc.data().content);
          postContainer.innerHTML+=`  
          <div > 
          ${doc.data().content}
          </div>`
      });
  });
    //console.log("fffffffffff",publishes);
   
    console.log("holaaaaa");
  });

