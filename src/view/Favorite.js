import { templateFavorite } from "./templates/templateFavorite.js";

export default () => {

    const viewFavoritee= templateFavorite;
    const divElemt = document.createElement('section');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewFavoritee;
    return divElemt;
};