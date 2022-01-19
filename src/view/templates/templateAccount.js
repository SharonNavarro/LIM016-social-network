const templateViewAccount = `
    <div class="content">
        <div class="containerAccount" id="containerAccount">
            <div class="userProfile" id="userProfile"> </div>   
            <div class="userBio"> </div>
        
            <div class="alignCenter">

                <div class="containerWriterAccount">

                    <div class="userProfile">
                    <img id="photoUser">
                    <div>
                        <p class="nameUser"><bold id="nameUser"></bold></p>
                    </div>
                    </div> 

                    <form class="containerTextPost" id="formPublishAccount">
                        <textarea class="textareaPublish" id="textPostAccount" rows="3" placeholder="¿Qué estás pensando?"></textarea>
                
                        <div class="containerIconsBtn">
                            <div class="addPost">
                                <input id="fichero" type="file">           
                                <label for="fichero" class="circle"> <i class="far fa-image"></i> </label>
                                <a href="#"><i class="fas fa-unlock-alt ico"></i></a>
                                <button class="postBtn" id="btnPublish">Publicar</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div id="postContainerAccount"> </div>

            </div>
        </div>
    </div>

    <div id="miModalPublishVoidAccount" class="closeModal">    
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
            <button type="file" class="boton-avatar"  >
                <i class="far fa-image"></i>
                <label for="fichero" class="circle"></label>
                <input class="input" type="file" id="fichero" accept="image/png, .jpeg, .jpg">
            </button>
        </div>
        <button type="button" class="boton-portada" >
            <i class="far fa-image"></i> Cambiar fondo
            <label for="fichero" class="circle"></label>
            <input class="input" type="file" id="fichero" accept="image/png, .jpeg, .jpg">
        </button>
    </div> `;

const templateViewAccountProfileUserBio = /*html*/ `

<div class="userProfileBody">
<div class="userProfileBio" id="userProfileBio">
    <h3 class="name" ></h3>
    <p class="texto"></p>
</div>
    <div class="perfil-usuario-footer">
        <ul class="lista-datos">                
            <li><i class="icono fas fa-at"></i>E-mail:</li>
            <li><i class="icono fas fa-bolt"></i>Intereses:</li>
            <li><i class="icono fas fa-map-marker-alt"></i>Locación:</li>
            <li><i class="icono fas fa-share-alt"></i>Redes sociales:</li>
        </ul>
        <button class="hero__cta  boton-portada" id ="editAccountUser"> 
        <i class="fas fa-user-edit"></i> Editar perfil
        </button>
    </div>
</div>
<section class="modal ">
<form class="modal__container"id="register-form">
    <div class="form-group" >
        <h3 class="datos">Datos de la Cuenta</h3>
        <label for="user">Nombre de Usuario:</label>
        <input type="text" class="form-control" id="user" placeholder="Usuario">
        <label for="email">Correo Electronico:</label>
        <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
        <label for="codipos" >Intereses:</label>
        <input type="text" class="form-control intereses" id="codipos" placeholder="Criptomonedas y Tecnologia">
        <label for="codipos">Locación:</label>
        <input type="text" class="form-control" id="locacion" placeholder="Lima">
        <label for="codipos">Redes Sociales :</label>
        <input type="text" class="form-control" id="redes" placeholder="Lima">
      </div>
    <div class="buttonModalPerfil">
        <button href="#" class="modal__close">Cancelar</button>
        <button type="submit" href="#" class="modal__close" id="editarForm">Enviar</button>
    </div>
</form>
</section>

 `;

export {
  templateViewAccount,
  templateViewAccountProfileUser,
  templateViewAccountProfileUserBio
};
