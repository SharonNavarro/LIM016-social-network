export default () => {
    const viewMessages = `
  <h1/> este es mensajes</h1>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('classViewNetchange')
    divElemt.innerHTML = viewMessages;
    return divElemt;
};