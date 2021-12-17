export default () => {
    const viewAccount = `
    <p>este es acount</p>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewAccount;
    return divElemt;
};