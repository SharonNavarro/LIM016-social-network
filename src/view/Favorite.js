export default () => {
    const viewFavorite = `
  
    <div class="content" > 
   <p>bienvenido a Favorite </p>
    </div>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewFavorite;
    return divElemt;
};