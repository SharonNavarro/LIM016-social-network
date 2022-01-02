export default () => {
    const viewMessages = `
    <div class="content" > 
  <h1/> este es mensajes</h1>
  </div>
  `;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNetchange')
    divElemt.innerHTML = viewMessages;
    return divElemt;
};