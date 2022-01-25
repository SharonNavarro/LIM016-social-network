export default () => {
  const viewFriends = `
 
  <div class="contentFriends" > 

    <div class="content">

      <div class="seccion-buscar-Friends">
        <div class="searchBar">
          <input type="search" class="search" placeholder="Buscar usuario">
          <i class="fas fa-search"></i>
        </div>      
         
        <button type="button" class="btn-animado animacion-dos">
          <i class="fas fa-users"></i>
          <span class="tex-icono">
            Todos tus amigos 
          </span>
        </button>
      </div>
       
      <div class ="containerAllFriends">
        
        <div class="myFriend">
          <div class="boxMyFriend"><img src="images/profile1.png" id ="imgMyFriend"></div>
          <div class="boxName">
            <h3 class="nameFriend">Johanna Smith</h3>
            <p class="nameFriend">Seguidores:10</p>
          </div>
        </div> 

      </div>

    </div>

  </div>
  `;

  const divElemt = document.createElement("section");
  divElemt.classList.add("position");
  divElemt.innerHTML = viewFriends;

  


  return divElemt;
};
