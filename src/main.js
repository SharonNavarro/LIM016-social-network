//import { header } from './lib/index.js';
import { changeTmp } from './view-controller/route.js';

/*function validateView() {
    if (containerHeader.innerHTML !== "") {
        console.log("entrooo");
        cerrarSesion();
    } else {
        console.log("esta bien ");
    }
}*/

const init = () => {
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeTmp(window.location.hash)
        validateView()
    });

    //validateView()

}

window.addEventListener('load', init);

function cerrarSesion() {
    const containerHeader = document.getElementById('containerHeader')
    const container = document.getElementById('container')
    const btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener('click', () => {
        containerHeader.innerHTML = "";
        container.innerHTML = "";
        auth.signOut().then(() => {
            console.log("saliste");
            window.location.replace('#/')

        })
    })

}




//edirect();


/*------LOGIN WITH GMAIL------*/


//

/*------LOGIN WITH FACEBOOK------*/

//loginFacebook.addEventListener("click", loginAppFacebook, false)

/* const register = document.getElementById('linkRegistrate');
const sectionLogin = document.getElementById('sectionLogin');
 */
//register.addEventListener('click', registerUser);


//-------------------SECTION POSTS------------------------

const db = getFirestore();
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
}

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


