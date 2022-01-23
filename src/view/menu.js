import { signOutAccount } from "../firebase/auth.js"
export default () => {
  const viewMenu = `
  <div class= "containerMenu">
  <div class="respmenu">
  <input type="checkbox" >
  <label for="btn-menu">
  <i class="fas fa-bars imagen"></i>
  </label> 
  <div class="contentTitulo">
  <h2 class="titulo">Netcoins</h2>
  </div> 
  
  <nav>

  <div class="btnDark">
  <label id="toggleLabel" for="toggle">
  <span>&#x1F31E</span>
   <input type="checkbox" id="toggle">
   <span class="slider"></span>
 <span>🌜</span>
</label>
</div> 
    <ul class="ulMenu">   
    <li><a href="#/Friends"><i class="fas fa-users"></i>Amigos</a> </li>
    <li class="liMenu"><a href="#/Favorite"><i class="fas fa-star" id="iconFavorite"></i>Favoritos</a></li>
    <li><a href="#/Netchange"><i class="fas fa-search-dollar"></i></i>NetcNoticias</a> </li>   
    <li><a id="btnLogout" style="cursor:pointer" >Cerrar Sesión</a> </li>   
    </ul>
  </nav>
  </div>      
               
       
      <div class="containerMenuIcons">      
       <nav>
        <ul class="ulMenu2">   
         <li class="liMenu" ><a href="#/Home"><i class="fas fa-home" id="iconHome"></i></a></li>     
         <li class="li1"><a href="#/Account"><i class="far fa-user-circle"></i></a></li> 
        </ul>
        </nav>
        
        </div>
        </div>          
               `;

  const divElemt = document.createElement('section');
  divElemt.classList.add('classViewMenu')
  divElemt.innerHTML = viewMenu;

  const containerHeader = document.getElementById('containerHeader')
  const container = document.getElementById('container')
  const btnLogout = divElemt.querySelector("#btnLogout");

  btnLogout.addEventListener('click', () => {
    containerHeader.innerHTML = "";
    container.innerHTML = "";
    signOutAccount()
      .then(() => {
        console.log("cerraste sesion");
        window.location.hash = '#/';
      })
  })

/*   if (container.innerHTML == "") {
    
    menuInteractivo();

  } */

 
const toggle = divElemt.querySelector('#toggle');
const themeActual= localStorage.getItem("theme");



if(themeActual){

 document.body.setAttribute("data-theme",themeActual);

}

if(themeActual === "oscuro"){

  toggle.checked =true;

}


const cambiarTheme = (event) => {
  if (event.target.checked) {
    document.body.setAttribute('data-theme', 'oscuro');
    localStorage.setItem("theme", "oscuro");
 
  } else {
    document.body.setAttribute('data-theme', null);
    localStorage.setItem("theme", "null");
  }
};

toggle.addEventListener('click', cambiarTheme);



  return divElemt;
}



/* function menuInteractivo() { setTimeout(() => {
  
  if ('ontouchstart' in window) { var click = 'touchstart'; }
  else { var click = 'click'; }


  document.getElementById('burger').addEventListener(click, function () {

    if (!document.getElementById('burger').classList.contains('open')) {
      openMenu();
    }
    else { closeMenu(); }

  });

  document.getElementsByTagName('a')[0].addEventListener(click, function (e) {
    e.preventDefault();
    closeMenu();
  });
  document.getElementsByTagName('a')[1].addEventListener(click, function (e) {
    e.preventDefault();
    closeMenu();
  });
  document.getElementsByTagName('a')[2].addEventListener(click, function (e) {
    e.preventDefault();
    closeMenu();
  });
  document.getElementsByTagName('a')[3].addEventListener(click, function (e) {
    e.preventDefault();
    closeMenu();
  });
  document.getElementsByTagName('a')[4].addEventListener(click, function (e) {
    e.preventDefault();
    closeMenu();
  });
  function openMenu() {

    document.querySelector('.circle').classList.add('expand');

    document.querySelector('.burger').classList.add('open');
    document.querySelector('.x').classList.add('collapse');
    document.querySelector('.y').classList.add('collapse');
    document.querySelector('.z').classList.add('collapse');


    document.getElementsByTagName("li")[0].classList.add('animate');
    document.getElementsByTagName("li")[1].classList.add('animate');
    document.getElementsByTagName("li")[2].classList.add('animate');
    document.getElementsByTagName("li")[3].classList.add('animate');
    document.getElementsByTagName("li")[4].classList.add('animate');

    setTimeout(function () {
      document.querySelector('.y').style.display = "none";
      document.querySelector('.x').classList.add('rotate30');
      document.querySelector('.z').classList.add('rotate150');
    }, 70);
    setTimeout(function () {
      document.querySelector('.x').classList.add('rotate45');
      document.querySelector('.z').classList.add('rotate135');

    }, 120);

  }

  function closeMenu() {

    document.getElementById('burger').classList.remove('open');
    document.querySelector('.x').classList.remove('rotate45');
    document.querySelector('.x').classList.add('rotate30');

    //$('div.z').removeClass('rotate135').addClass('rotate150');
    document.querySelector('.z').classList.remove('rotate135');
    document.querySelector('.z').classList.add('rotate150');

    document.querySelector('.circle').classList.remove('expand');
    //$('.menu li').removeClass('animate');
    document.getElementsByTagName("li")[0].classList.remove('animate');
    document.getElementsByTagName("li")[1].classList.remove('animate');
    document.getElementsByTagName("li")[2].classList.remove('animate');
    document.getElementsByTagName("li")[3].classList.remove('animate');
    document.getElementsByTagName("li")[4].classList.remove('animate');

    setTimeout(function () {
      document.querySelector('.x').classList.remove('rotate30');
      document.querySelector('.z').classList.remove('rotate150');
    }, 50);
    setTimeout(function () {
      document.querySelector('.y').style.display = "block";
      document.querySelector('.x').classList.remove('collapse');
      document.querySelector('.y').classList.remove('collapse');
      document.querySelector('.z').classList.remove('collapse');
    }, 70);

  }
}, 1000);
}  */