/*  <div class="storyGallery">
<div class="story story1">
<i class="fas fa-plus-circle iconAdd"></i>
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
</div> */
//<div class="iconPost"> <i class="far fa-comment-alt"> </i></div>
const templateHome = `

<div class="containerHome" id="containerHome">
<div class="content">

  <div class="alignCenter">
    <div class="containerWriter">
      <div class="userProfile">
        <img id="photoUser">
        <div>
          <p class="nameUser">
            <bold class="nameUserWhite" id="nameUser"></bold>
          </p>
        </div>
      </div>
      <form class="containerTextPost" id="formPublish">
        <textarea class="textareaPublish" id="textPost" rows="3" placeholder="¿Qué estás pensando?"></textarea>
        <div class="containerIconsBtn">
          <div class="addPost">
            <input id="fichero" type="file">           
            <label for="fichero" class="circle"> <i class="far fa-image fileIcon"></i> </label>
           
            <button class="postBtn" id="btnPublish">Publicar</button>
          </div>          
        </div>
        
      </form>
    </div>
    <div id="postContainer">
    </div>
   
    <div id="miModalPublishVoid" class="closeModal">
      <div class="modal-contenidoReturn">
        <h5 class="h2Modal">Tu publicación está vacia!</h5>
        <div class="groupBtnOptionsReturn">
          <button id="btnReturn" class="btnOptions">Volver</button>
        </div>
      </div>
    </div>


`;


const templatePublishes = (userName, urlPhoto, id, content, datePublish, hourPublish, contStars, iconStars, imagenAdd, iconHearts, contHearts) => `        
          
<div class="containerPosts" >
      <div class="containerAlignItems"> 

      <div class="userProfile">
          <img src= ${urlPhoto} >
          <div>
          <p class="nameUser"><bold > ${userName}</bold></p>
          <p class="timePublish"> ${datePublish}</p>
          <p class="timePublish"> ${hourPublish}</p>
          </div>
      </div> 
          <select class="selectEdition fa"  data-id="${id}" > 
            <option value="menuOptions" style="display:none" class="  fa" selected> &#xf141; </option>
            <option  value="edit"  data-id="${id}" class="op fa"> &#xf044;  </option>
            <option value="delete" data-id="${id}" class="op fa">&#xf2ed;   </option>
          </select>
      </div>
        <div class="containerTextPost">
            <textarea class="contenido" data-id="${id}" disabled> ${content}</textarea>    
            <div><img class="imageAdd" src="${imagenAdd}"></div>    
            <div class="containerIconsBtn"  data-id="${id}">
                <div class="addPosts">
                  <div class="iconPost" data-id="${id}"> <i class="far fa-heart iconPostHeart ${iconHearts}" data-id="${id}"> </i>${contHearts}</div>
                  
                  <div class="iconPost" data-id="${id}"> <i class="far fa-star iconPostStart ${iconStars}" data-id="${id}" > </i>${contStars}</div>
                </div>
            </div>
            <div class="groupBtnOptionsUpdate hiddenBtn groupBtnUpdate" data-id="${id}" > 
            <button class="btnOptions btnSave" data-id="${id}" >Guardar</button>
            <button class="btnOptions btnCancelUpdate" data-id="${id}">Cancelar</button>
             </div> 
        </div>
        </div>
        
  <div id="miModal" class="modal">    
  <div  class="modal-contenido">
    <h5 class="h2Modal">¿Estás seguro que deseas eliminar la publicación?</h5>
    <div class="groupBtnOptions"> 
    <button class="btnOptions"  id="btnDelete">Eliminar</button>
    <button class="btnOptions btnCancel"  data-id="${id}" >Cancelar</button>
    </div> 
  </div> 
</div> 

      `;
const templatePublishesUsers = (userName, urlPhoto, id, content, datePublish, hourPublish, contStars, iconStars, imagenAdd, iconHearts, contHearts, btnFollowUsers) => `        
          
      <div class="containerPosts" >
            <div class="containerAlignItems"> 
      
            <div class="userProfile">
                <img src= ${urlPhoto}>
                <div>
                <div class ="nameAndBtnFollow"
                  <p class="nameUser"> <bold> ${userName}</bold> </p>
                  <input type="button" class ="btnFollow " data-id="${id}" value ="${btnFollowUsers}"></input>
                </div>
                <p class="timePublish"> ${datePublish}</p>
                <p class="timePublish"> ${hourPublish}</p>
                </div>
            </div> 
                <select class="ocultar"  data-id="${id}" > 
                  <option value="menuOptions" style="display:none" class="  fa" selected> &#xf141; </option>
                  <option  value="edit"  data-id="${id}" class="op fa"> &#xf044;  </option>
                  <option value="delete" data-id="${id}" class="op fa">&#xf2ed;   </option>
                </select>
            </div>
              <div class="containerTextPost">
                  <textarea class="contenido" data-id="${id}" disabled> ${content}</textarea> 
                  <div><img class="imageAdd"  src="${imagenAdd}"></div>       
                  <div class="containerIconsBtn"  data-id="${id}">
                      <div class="addPosts">
                        <div class="iconPost" data-id="${id}"> <i class="far fa-heart iconPostHeart ${iconHearts}" data-id="${id}"> </i>${contHearts}</div>
                       
                        <div class="iconPost" data-id="${id}"> <i class="far fa-star iconPostStart ${iconStars}" data-id="${id}" > </i>${contStars}</div>
                      </div>
                  </div>
                  <div class="groupBtnOptionsUpdate hiddenBtn groupBtnUpdate" data-id="${id}" > 
                  <button class="btnOptions btnSave" data-id="${id}" >Guardar</button>
                  <button class="btnOptions btnCancelUpdate" data-id="${id}">Cancelar</button>
                   </div> 
              </div>
              </div>
              
        <div id="miModal" class="modal">    
        <div  class="modal-contenido">
          <h5 class="h2Modal">¿Estás seguro que deseas eliminar la publicación?</h5>
          <div class="groupBtnOptions"> 
          <button class="btnOptions"  id="btnDelete">Eliminar</button>
          <button class="btnOptions btnCancel"  data-id="${id}" >Cancelar</button>
          </div> 
        </div> 
      </div> 
      
            `;

export {
    templateHome,
    templatePublishes,
    templatePublishesUsers
}