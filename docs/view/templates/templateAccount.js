const templateViewAccount = `
    <div class="content">
        <div class="containerAccount" id="containerAccount">
            <div class="userProfile" id="userProfile"> </div>

            <div class="userBio"> 
                <div class="userProfileBody">
                    <div class="userProfileBio" id="userProfileBio">
                        <h3 class="name" ></h3>
                        <p class="texto"></p>
                    </div>
                    <div class="perfil-usuario-footer">
                        <div id="containerBio">
                        
                        </div>
                        <button class="hero__cta  boton-portada" id ="editAccountUser"> 
                            <i class="fas fa-user-edit"></i> Editar perfil
                        </button>
                    </div>
                </div>
                <section class="modal ">
                    <form class="modal__container" id="register-form">
                        <div class="form-group" >
                
                            <h3 class="datos">Datos de la Cuenta</h3>
                
                            <input type="text" class="form-control" id="userNameBio" placeholder="Nombre de usuario">
                
                            <input type="text" class="form-control intereses" id="interestBio" placeholder="Intereses">
                
                            <input type="text" class="form-control" id="locacionBio" placeholder="Locación">
                
                            <input type="text" class="form-control" id="socialNetworkBio" placeholder="Redes Sociales">
                
                        </div>
                        <div class="buttonModalPerfil">
                            <button href="#" class="modal__close">Cancelar</button>
                            <button type="submit" href="#" class="modal__close" id="editarForm">Enviar</button>
                        </div>
                    </form>
                </section>
            </div>
        
            <div class="alignCenter">

                <div class="containerWriterAccount">

                    <div class="userProfile">
                    <img id="photoUser">
                    <div>
                        <p class="nameUserAccount" id="nameUser"></p>
                    </div>
                    </div> 

                    <form class="containerTextPost" id="formPublishAccount">
                        <textarea class="textareaPublish" id="textPostAccount" rows="3" placeholder="¿Qué estás pensando?"></textarea>
                
                        <div class="containerIconsBtn">
                            <div class="addPost">
                                <input id="fichero" type="file">           
                                <label for="fichero" class="circle"> <i class="far fa-image"></i> </label>
                           
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
                <label for="btnUpdateUserPhoto" class="circle"></label>
                <input class="input" type="file" id="btnUpdateUserPhoto" accept="image/png, .jpeg, .jpg">
            </button>
        </div>
        <button type="button" class="boton-portada" >
            <i class="far fa-image"></i> Cambiar fondo
            <label for="btnUpdateUserBackground" class="circle"></label>
            <input class="input" type="file" id="btnUpdateUserBackground" accept="image/png, .jpeg, .jpg">
        </button>
    </div> `;

const templateForInsideBio = (interests, locationBio, socialNetwork) => `

        <ul class="lista-datos"> 
            <li><i class="icono fas fa-bolt"></i>Intereses: ${interests} </li>
            <li><i class="icono fas fa-map-marker-alt"></i>Locación: ${locationBio} </li>
            <li><i class="icono fas fa-share-alt"></i>Redes sociales: ${socialNetwork}</li>
        </ul>`;

export {
    templateViewAccount,
    templateViewAccountProfileUser,
    templateForInsideBio
};