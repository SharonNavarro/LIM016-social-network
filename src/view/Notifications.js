export default () => {
    const viewNotifications = `
  
    <div class="content" > 
   <p>bienvenido a notificaciones</p>
    </div>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNotifications')
    divElemt.innerHTML = viewNotifications;
    return divElemt;
};