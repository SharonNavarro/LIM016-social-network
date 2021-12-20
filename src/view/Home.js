export default () => {
    const viewHome = `
    <div class="containerHome" id="containerHome"> 
   <p>bienvenido a home es el home</p>
    </div>    
  
 
 `;
    const divElemt = document.createElement('section');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
};