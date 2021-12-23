export default () => {
  const viewAccount = `
  <div class="content">
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
</div>
 
    `;
  const divElemt = document.createElement('section');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccount;
  return divElemt;
};
