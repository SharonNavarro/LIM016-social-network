import { changeTmp } from './view-controller/route.js';
/* import {
    getPublish
} from "../firebase/firestore.js" */
const init = () => {
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeTmp(window.location.hash)
    });


}

window.addEventListener('load', init);

