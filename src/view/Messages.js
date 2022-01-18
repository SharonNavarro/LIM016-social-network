import { userState } from "../firebase/auth.js"


export default () => {
    const viewMessages = /*html*/`
    <div class="content" > 
    <div class="body-chat">
    <div class="seccion-titulo">
        <h3>
            <i class="fas fa-comments"></i>
            Sistema de mensajeria
        </h3>
    </div>
    <div class="seccion-usuarios">
        <div class="seccion-buscar">
            <div class="input-buscar">
                <input type="search" placeholder="Buscar usuario">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="seccion-lista-usuarios">
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario ocupado"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    1
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario desconectado"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    1
                </span>
            </div>
        </div>
    </div>
    <div class="seccion-chat">
        <div class="usuario-seleccionado">
            <div class="avatar">
                <img src="ruta_img" alt="img">
            </div>
            <div class="cuerpo">
                <span>Nombre de usuario</span>
                <span>Activo - Escribiendo...</span>
            </div>
            
        </div>
        <div class="panel-chat" id="formulario">
            <div class="mensaje">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                </div>
                <div class="cuerpo">
                    <!-- <img src="" alt=""> -->
                    <div class="texto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                        <span class="tiempo">
                            <i class="far fa-clock"></i>
                            Hace 5 min
                        </span>
                    </div>
                    <ul class="opciones-msj">
                        <li>
                            <button type="button">
                                <i class="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <i class="fas fa-share-square"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- derecha -->
            <div class="mensaje left">
                <div class="cuerpo">
                    <!-- <img src="" alt=""> -->
                    <div class="texto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                        <span class="tiempo">
                            <i class="far fa-clock"></i>
                            Hace 6 min
                        </span>
                    </div>
                    <ul class="opciones-msj">
                        <li>
                            <button type="button">
                                <i class="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <i class="fas fa-share-square"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                </div>
            </div>
        </div>
        <div class="panel-escritura">
            <form class="textarea">
                <div class="opcines">
                    <button type="button">
                        <i class="fas fa-file"></i>
                        <label for="file"></label>
                        <input type="file" id="file">
                    </button>
                    <button type="button">
                        <i class="far fa-image"></i>
                        <label for="img"></label>
                        <input type="file" id="img">
                    </button>
                </div>
                <textarea placeholder="Escribir mensaje" id="inputChat"></textarea>
                <button type="buttonChat" class="buttonChat">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </div>
</div>
</div>
  `;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNetchange')
    divElemt.innerHTML = viewMessages;
    return divElemt;
};

const formulario=document.querySelector("#formulario")
const inputChat= document.querySelector("#inputChat")

const contenidoChat=(user)=>{

formulario.addEventListener("submit", (e) =>{
  e.preventDefault()
  console.log("inputChat.value")
  if(!inputChat.value.trim()){
    console.log("input vacio")

    return

  }
  
 


})
}