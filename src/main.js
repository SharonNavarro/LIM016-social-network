import { changeTmp } from './view-controller/route.js';

const init = () => {
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeTmp(window.location.hash)
    });


}

window.addEventListener('load', init);

