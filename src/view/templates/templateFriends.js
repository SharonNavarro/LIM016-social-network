const templateViewFriends = () => `
 
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
                
            </div>

        </div>

    </div>
  `;

  const templateFriend = (btnFollowUsers, photoUserFollowed, nameUserFollowed) => `

        <div class="myFriend">
          <div class="boxMyFriend"><img src= ${photoUserFollowed} id ="imgMyFriend"></div>
          <div class="boxName">
            <h3 class="nameFriend">${nameUserFollowed}</h3>
            <p class="nameFriend">Seguidores:10</p>
          </div>
          <input type="button" class ="btnFollow " value ="${btnFollowUsers}"></input>
        </div> 
  `;

  export {
    templateViewFriends,
    templateFriend
  }