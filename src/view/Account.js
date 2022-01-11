export default () => {
  const viewAccount = `
  <div class="perfil-usuario">
      <div class="contenedor-perfil">
        <div class="portada-perfil">
          <div class="sombra"></div>
          <div class="avatar-perfil">
            <img src="images/Account.jpg" alt="img" />
            <a href="#" class="cambiar-foto">
              <i class="fas fa-camera"></i>
              <span>Cambiar foto</span>
            </a>
          </div>
          <div class="datos-perfil">
            <h4 class="titulo-usuario">Nombre de usuario</h4>
            <p class="bio-usuario">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <ul class="lista-perfil">
              <li>7 Amigos</li>
              <li>32 Publicaciones</li>
            </ul>
          </div>
          <div class="opcciones-perfil">
            <button type="">Cambiar portada</button>
            <button type=""><i class="fas fa-wrench"></i></button>
          </div>
        </div>
      </div>
      <div class="principal">
        <div class="perfilUsuarioDatos">
          <ul class="lista-datos">
            <li><i class="icono fas fa-map-signs"></i>Direccion de usuario:</li>
            <li><i class="icono fas fa-phone-alt"></i>Telefono:</li>
            <li><i class="icono fas fa-briefcase"></i>Trabaja en:</li>
            <li><i class="icono fas fa-building"></i>Cargo</li>
            <li><i class="icono fas fa-map-marker-alt"></i>Ubicacion.</li>
            <li><i class="icono fas fa-calendar-alt"></i>Fecha nacimiento.</li>
            <li><i class="icono fas fa-user-check"></i>Registro.</li>
            <li>
              <i class="icono fas fa-share-alt"></i>
              Redes sociales.
            </li>
          </ul>
        </div>
        <div class="alignCenteAccount">
          <div class="containerWriterAccount">
            <div class="userProfileAccount">
              <img id="photoUserAccount" />
              <div>
                <p class="nameUserAccount"><bold id="nameUser"></bold></p>
              </div>
            </div>
            <form class="containerTextPostAccount" id="formPublish">
              <textarea
                class="textareaPublish"
                id="textPost"
                rows="3"
                placeholder="¿Qué estás pensando?"
              ></textarea>
              <div class="containerIconsBtn">
                <div class="addPost">
                  <a href="#"><i class="far fa-image"></i></a>
                  <a href="#"><i class="fas fa-unlock-alt ico"></i></a>
                  <button class="postBtn" id="btnPublish">Publicar</button>
                </div>
              </div>
            </form>
          </div>

          <div id="postContainerAccount"></div>
          <div class="containerPostsAccount">
            <div class="containerAlignItemsAccount">
              <div class="userProfileAccount">
                <img src="./images/profile1.png" />
                <div>
                  <p>Melanie Sanchez</p>
                  <span>@SMelanie12</span>
                </div>
              </div>

              <button type="button">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>

            <div class="containerTextPostAccount">
              <p>
                Bienvenidxs a la experiencia Netcoins!! Contrary to popular
                belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin.
              </p>

              <div class="containerIconsBtnAccount">
                <div class="addPosts">
                  <div class="iconPost">
                    <img src="./images/heartIcon.png" />
                    1508
                  </div>
                  <div class="iconPost">
                    <img src="./images/textGlobeIcon.png" />
                  </div>
                  <div class="iconPost"><img src="./images/Star.png" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="miModalPublishVoid" class="closeModal">
          <div class="modal-contenidoReturn">
            <h5 class="h2Modal">Tu publicación está vacia!!</h5>
            <div class="groupBtnOptionsReturn">
              <button id="btnReturn" class="btnOptions">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  `
  /*<div class="content">
  <div class="containerAccount" id="containerAccount">
      <div class="userProfile" id="userProfile">
          <div class="profileUserCover">
           <div class="userProfileAvatar"  id="userProfileAvatar">
              <img src="images/Account.jpg" class="photoPerfil" id="photoPerfil"alt="">
              <button type="button" class="boton-avatar">
               <i class="far fa-image"></i>
              </button>
          </div>
              <button type="button" class="boton-portada">
              <i class="far fa-image"></i> Cambiar fondo
              </button>
          </div>
          </div>
          
      <div class="userBio">
      <div class="userProfileBody">
        <div class="userProfileBio" id="userProfileBio">
          <h3 class="name">Nombre de Usuario</h3>
          <p class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
          <div class="perfil-usuario-footer">
          <ul class="lista-datos">
          <li><i class="icono fas fa-map-signs"></i> Direccion de usuario:</li>
          <li><i class="icono fas fa-phone-alt"></i> Telefono:</li>
          <li><i class="icono fas fa-briefcase"></i> Trabaja en.</li>
          <li><i class="icono fas fa-building"></i> Cargo</li>
        </ul>
        <ul class="lista-datos">
          <li><i class="icono fas fa-map-marker-alt"></i> Ubicacion.</li>
          <li><i class="icono fas fa-calendar-alt"></i> Fecha nacimiento.</li>
          <li><i class="icono fas fa-user-check"></i> Registro.</li>
          <li><i class="icono fas fa-share-alt"></i> Redes sociales.</li>
        </ul>
      </div> 
      </div>   
     </div>
</div>
</div>*/
 
    ;
  const divElemt = document.createElement('section');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccount;
  return divElemt;
};
