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
 
<div class="alignCenter">

  <div class="containerWriter">
    
    <div class="userProfile">
      <img src="./images/profile4.png">
      <div>
        <p><bold>Jhoana Durand</bold></p>
      </div>
    </div> 

    <div class="containerTextPost">
      <textarea rows="3" placeholder="What's on your mind, Jhoana?"></textarea>
      
      <div class="containerIconsBtn">
        <div class="addPost">
          <a href="#"><img src="./images/iconPhoto.png" alt= ></a>
          <a href="#"><img src="./images/iconPrivacity.png" alt= ></a>
          <button class="postBtn">Publish</button>
        </div>
      </div>
    </div>
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
  return divElemt;
};
