export default () => {
  const viewHome = `
    <div class="containerHome" id="containerHome">
    <div class="content" > 
   
    
   <div class="storyGallery">

      <div class="story story1"> 
        
        <p>Post Story</p>
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
        <p>Jhoana Durand</p>
      </div>
    </div> 

    <div class="containerPost">
      <textarea rows="3" placeholder="What's on your mind, Jhoana?"></textarea>
      
      <div class="containerIconsBtn">
        <div class="addPost">
          <a href="#"><img src="./images/iconPhoto.png" alt= ></a>
          <a href="#"><img src="./images/iconPrivacity.png" alt= ></a>
          <button class="postBtn">Go!</button>
        </div>
      </div>
    </div>
  </div>
      <div class="containerPosts">
        <div class="userProfile">
        <img src="./images/profile2.png">
          <div>
            <p>Carlos Tarazona</p>
            <span>June 24 2021, 13:40 pm</span>
          </div>
        </div> 

        <p>Bienvenidxs a la experiencia Netcoins!! Contrary to popular 
        belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin.</p>
        
        <div class="postRow">

          <div class="activityIcons">
            <div><img src="./images/heartIcon.png">1508</div>
            <div><img src="./images/textGlobeIcon.png"></div>
          </div>

        </div>
      </div>

      <div class="containerPosts">
        <div class="userProfile">
        <img src="./images/profile1.png">
          <div>
            <p>Sabrina Castañeda</p>
            <span>June 24 2021, 14:10 pm</span>
          </div>
        </div> 

        <p>It has roots in a piece of classical Latin.</p>
        
        <div class="postRow">

          <div class="activityIcons">
            <div><img src="./images/heartIcon.png">1508</div>
            <div><img src="./images/textGlobeIcon.png"></div>
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
