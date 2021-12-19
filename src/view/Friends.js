export default () => {
    const viewFriends = `
  <p>este es friends</p>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewFriends;
    return divElemt;
};