const templateViewAccount = `
    <div class="content">
        <div class="containerAccount" id="containerAccount">

            <div class="userProfile" id="userProfile"> </div>

            <div class="userBio"> </div>
        
            <div class="alignCenter">

                <div class="containerWriter">

                    <div class="userProfile">
                        <img id="photoUser">
                        <div>
                            <p class="nameUser"><bold id="nameUser"></bold></p>
                        </div>
                    </div> 

                    <form class="containerTextPost" id="formPublishAccount">
                        <textarea class="textareaPublish" id="textPostAccount" rows="3" placeholder="¿Qué estás pensando?"></textarea>
                        
                        <div class="containerIconsBtn">
                            <div class="addPost account">
                                <button type="button">
                                    <i class="far fa-image"></i>
                                    <label for="file"></label>
                                    <input type="file" id="file">
                                </button>
                                <button type="button">
                                    <i class="fas fa-unlock-alt ico"></i>
                                    <label for="file"></label>
                                    <input type="" id="">
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div id="postContainer"> </div>

            </div>
        </div>
    </div>

    <div id="miModalPublishVoid" class="closeModal">    
    <div  class="modal-contenidoReturn">
      <h5 class="h2Modal">Tu publicación está vacia!</h5>
      <div class="groupBtnOptionsReturn"> 
        <button  id="btnReturnAccount" class="btnOptions">Volver</button>     
      </div> 
    </div> 
  </div> 
 
    `;

const templateViewAccountProfileUser = `
    <div class="profileUserCover">
        <div class="userProfileAvatar"  id="userProfileAvatar">
            <img class="photoPerfil" id="photoPerfil"alt="">
            <button type="button" class="boton-avatar" >
                <i class="far fa-image"></i>
            </button>
        </div>
        <button type="button" class="boton-portada" >
            <i class="far fa-image"></i> Cambiar fondo
        </button>
    </div> `;

const templateViewAccountProfileUserBio = `
    <div class="userProfileBody">
        <div class="userProfileBio" id="userProfileBio">
            <h3 class="name"></h3>
            <p class="texto"></p>
        </div>
        <div class="perfil-usuario-footer">
            <ul class="lista-datos">
                <li><i class="icono fas fa-map-signs"></i> Direccion de usuario:</li>
                <li><i class="icono fas fa-phone-alt"></i> Telefono:</li>
                <li><i class="icono fas fa-briefcase"></i> Trabaja en:</li>
                <li><i class="icono fas fa-building"></i> Cargo:</li>
            </ul>
            <ul class="lista-datos">
                <li><i class="icono fas fa-map-marker-alt"></i> Ubicacion:</li>
                <li><i class="icono fas fa-calendar-alt"></i> Fecha nacimiento:</li>
                <li><i class="icono fas fa-user-check"></i> Registro:</li>
                <li><i class="icono fas fa-share-alt"></i> Redes sociales:</li>
            </ul>
        </div> 
    </div> `;

export {
    templateViewAccount,
    templateViewAccountProfileUser,
    templateViewAccountProfileUserBio
}