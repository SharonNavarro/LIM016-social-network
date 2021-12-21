export default () => {
    const viewFriends = `
    <div class="content" > 
    <p>bienvenido a frienss</p>
     </div>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewFriends;
    return divElemt;
};