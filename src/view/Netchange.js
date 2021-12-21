export default () => {
    const viewNetchange = `
  esta vista es netchange`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNetchange')
    divElemt.innerHTML = viewNetchange;
    return divElemt;
};