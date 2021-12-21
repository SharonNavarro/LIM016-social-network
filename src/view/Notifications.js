export default () => {
    const viewNotifications = `
  este es notificaciones`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNotifications')
    divElemt.innerHTML = viewNotifications;
    return divElemt;
};