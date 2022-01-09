export default () => {
  const viewFriends = `
  
    <div class="content friends" > 
      <p>bienvenido a friends</p>
          <div class="container">
          <div class="seccion-buscar">
          <div class="input-buscar">
              <input type="search" placeholder="Buscar usuario">
              <i class="fas fa-search"></i>
          </div>
             </button>
             <div class="friends">
             <button type="button" class="btn-animado animacion-uno">
             <i class="fas fa-user-plus"></i>
             <span class="tex-icono">
             Solicitudes de Amistad
             </span>
            </button>
               
            <button type="button" class="btn-animado animacion-dos">
            <i class="fas fa-users"></i>
            <span class="tex-icono">
            Todos tus amigos 
            </span>
            </button>
           </div>       
        </div>
     </div>`;

  const divElemt = document.createElement('section');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewFriends;
  return divElemt;
};
