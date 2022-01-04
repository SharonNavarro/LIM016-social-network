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


  
/* export const cargar = () => {
    window.addEventListener('DOMContentLoaded', async (e) => {
        const publishes = await getPublish();
        console.log(publishes);
        console.log("aqui estoy");

    })

} */

//-------------------SECTION POSTS------------------------

/*const db = getFirestore();
const sectionPosts = document.getElementById("sectionPosts");
const posts = document.getElementById("posts")

const setUpPosts = data => {
    if (data.length) {
        let html = "";
        data.forEach(doc => {
            const post = doc.data();
            const li = `
            <li class="list-group">
                <h3>${post.titulo}</h3>
                <p>${post.descripcion}</p>
            </li>
            `;
            html += li;
        });
        posts.innerHTML = html;
    } else {
        posts.innerHTML = '<p class=""> Login to see Posts</p>'
    }
}*/

/* onAuthStateChanged(auth, (user) => {
    if (user) {
        const intento = (collection(db, "posts"));
        getDocs(intento)
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
      })
      } else {
        setUpPosts([]);
      }
    }); */

//--------------------------------------------------------------------------

