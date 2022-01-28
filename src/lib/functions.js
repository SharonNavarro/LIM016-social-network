import {
    updateNameUser
} from "../firebase/auth.js"

import {
    savePublish,
    saveUser,
    getDownloadURL,
    ref,
    storage,
    uploadBytesResumable,
    updateUserNamePost,
    getPublishes,
    queryEmailUnique
} from "../firebase/firestore.js"

import {
    showPublish,
    getFileAdd,
    displayName,
    photoURL,
    email,
    userid,
    formPublish,
    miModalPublishVoid,
    btnReturn

} from "../view/Home.js"

import {
    showPublishAccount,
    getFileAddAccount,
    displayNameAccount,
    photoURLAccount,
    emailAccount,
    useridAccount,
    formPublishAccount,
    miModalPublishVoidAccount,
    btnReturnAccount,
    registerForm,
    publishBio
} from "../view/Account.js"


// errores registro 
export const addErrorMessage = (formControl, message) => {
    const small = formControl.querySelector('small');
    formControl.classList.add('activeLoginErrorMessage');
    return small.innerText = message;
}

export const addErrorInput = (formControl, classControl) => {
    return formControl.classList.add(classControl);
}

export const removeErrorMessage = (formControl, message) => {
    const small = formControl.querySelector('small');
    formControl.classList.remove('activeLoginErrorMessage');
    return small.innerText = message;
}

export const removeErrorInput = (formControl, classControl) => {
    return formControl.classList.remove(classControl);
}

//Funcion que envia las publicaciones a la base de datos para Home

export const publishPosts = () => {
    formPublish.addEventListener("submit", async(e) => {
        e.preventDefault();
        const textPost = formPublish['textPost'].value;
        if (textPost == "" || textPost.trim() == "") {
            miModalPublishVoid.setAttribute("class", "show");
            btnReturn.addEventListener("click", () => {
                miModalPublishVoid.setAttribute("class", "closeModal");
            })
            return false;
        }
        if (getFileAdd != "") {
            uploadFiles(getFileAdd)
        } else {

            const urlGetdescarga = ""
            let hoy = new Date();
            let dateOrder = new Date();
            let datePublish, hourPublish, dateOrderComplet;
            hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
            datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
            dateOrderComplet = dateOrder.getTime();
            await savePublish(textPost, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email, userid, urlGetdescarga);
            formPublish.reset();
            await showPublish();
        }

    });
}

async function getUrl(urlGetdescarga) {

    // getFileAdd=""
    let hoy = new Date();
    let dateOrder = new Date();
    let datePublish, hourPublish, dateOrderComplet;
    hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
    datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
    dateOrderComplet = dateOrder.getTime();
    await savePublish(textPost.value, datePublish, hourPublish, displayName, photoURL, dateOrderComplet, email, userid, urlGetdescarga);
    formPublish.reset();
    await showPublish();
    // getFileAdd=""

}


let urlDescarga;
let uploadFiles = (getFileAdd) => {
    const textPost = formPublish['textPost'].value;
    if (textPost == "" || textPost.trim() == "") {
        miModalPublishVoid.setAttribute("class", "show");
        btnReturn.addEventListener("click", () => {
            miModalPublishVoid.setAttribute("class", "closeModal");
        })
    } else {
        let storageRef = ref(storage, 'Images_Posts/' + getFileAdd.name)
        let uploadTask = uploadBytesResumable(storageRef, getFileAdd);
        uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        urlDescarga = downloadURL;
                        console.log("subio");
                        getUrl(urlDescarga);
                        getFileAdd = "";
                    });
            }

        );
    }

}

//Funcion que envia las publicaciones a la base de datos para Account

export const publishPostsAccount = () => {
    formPublishAccount.addEventListener("submit", async(e) => {
        e.preventDefault();
        const textPost = formPublishAccount['textPostAccount'].value;
        if (textPost == "" || textPost.trim() == "") {
            miModalPublishVoidAccount.setAttribute("class", "show");
            btnReturnAccount.addEventListener("click", () => {
                miModalPublishVoidAccount.setAttribute("class", "closeModal");
            })
            return false;
        }
        if (getFileAddAccount != "") {
            uploadFilesAccount(getFileAddAccount)
        } else {

            const urlGetdescarga = ""
            let hoy = new Date();
            let dateOrder = new Date();
            let datePublish, hourPublish, dateOrderComplet;
            hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
            datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
            dateOrderComplet = dateOrder.getTime();
            await savePublish(textPost, datePublish, hourPublish, displayNameAccount, photoURLAccount, dateOrderComplet, emailAccount, useridAccount, urlGetdescarga);
            formPublishAccount.reset();
            await showPublishAccount();
        }

    });
}

async function getUrlAccount(urlGetDescargaAccount) {

    let hoy = new Date();
    let dateOrder = new Date();
    let datePublish, hourPublish, dateOrderComplet;
    hourPublish = hoy.getHours() + ':' + hoy.getMinutes();
    datePublish = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
    dateOrderComplet = dateOrder.getTime();
    await savePublish(textPostAccount.value, datePublish, hourPublish, displayNameAccount, photoURLAccount, dateOrderComplet, emailAccount, useridAccount, urlGetDescargaAccount)
    formPublishAccount.reset();
    await showPublishAccount();

}

let urlDescargaAccount;
let uploadFilesAccount = (getFileAddAccount) => {
    const textPostAccount = formPublishAccount['textPostAccount'].value;
    if (textPostAccount == "" || textPostAccount.trim() == "") {
        miModalPublishVoidAccount.setAttribute("class", "show");
        btnReturnAccount.addEventListener("click", () => {
            miModalPublishVoidAccount.setAttribute("class", "closeModal");
        })
    } else {
        let storageRef = ref(storage, 'Images_Posts/' + getFileAddAccount.name)
        let uploadTask = uploadBytesResumable(storageRef, getFileAddAccount);
        uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        urlDescargaAccount = downloadURL;
                        console.log("subio");
                        getUrlAccount(urlDescargaAccount);
                        getFileAddAccount = "";
                    });
            }

        );
    }

}

//Funcion que edita tu bio y tu nombre de usuario

export const editBioProfile = () => {
    registerForm.addEventListener("submit", async(e) => {
        e.preventDefault();
        let frontPageURLUsu = "";
        const userNameBio = registerForm["userNameBio"].value;
        const interestBio = registerForm["interestBio"].value;
        const locacionBio = registerForm["locacionBio"].value;
        const socialNetworkBio = registerForm["socialNetworkBio"].value;

        const querySnapshotPosts = await getPublishes();
        querySnapshotPosts.forEach(async(doc) => {
            if (useridAccount == doc.data().idUser) {
                await updateUserNamePost(doc.id, userNameBio);
            }
        });
        await updateNameUser(userNameBio);
        await saveUser(useridAccount, userNameBio, emailAccount, photoURLAccount, frontPageURLUsu, interestBio, locacionBio, socialNetworkBio);
        await publishBio();
        await showPublishAccount();
        window.location.reload();
    });
};

//Funcion que registra al usuario si no lo a estado previamente, con los proveedores de Gmail, Facebook y Twitter

export const UserNotExistCreate = async(idUser, name, email, photo) => {

    localStorage.setItem("IdUsuario", idUser);
    localStorage.setItem("Nombre", name);
    localStorage.setItem("Correo", email);
    localStorage.setItem("photoURL", photo);

    const idUsu = localStorage.getItem("IdUsuario");
    const disName = localStorage.getItem("Nombre");
    const emailUsu = localStorage.getItem("Correo");
    const photoURLUsu = localStorage.getItem("photoURL");

    const querySnapshote = await queryEmailUnique(emailUsu);
    if (querySnapshote.size > 0) {
        console.log("usuario registrado");
    } else {
        let interestsUsu = "",
            frontPageURLUsu = "",
            locationUsu = "",
            socialNetworkUsu = "",
            followed = [];
        await saveUser(idUsu, disName, emailUsu, photoURLUsu, frontPageURLUsu, interestsUsu, locationUsu, socialNetworkUsu, followed);
        console.log("datos guardados");
        window.location.reload();
    }

}

//Funcion que registra al usuario si no lo a estado previamente, solo con correo y contraseña

export const UserNotExistCreateWithEmailAndPassword = async(idUser, email, name) => {

    localStorage.setItem("IdUsuario", idUser);
    localStorage.setItem("Correo", email);

    const idUsu = localStorage.getItem("IdUsuario");
    const emailUsu = localStorage.getItem("Correo");

    const querySnapshote = await queryEmailUnique(emailUsu);
    if (querySnapshote.size > 0) {
        console.log("usuario registrado SIGN IN");
    } else {
        let interestsUsu = "",
            photoURLUsu = "",
            frontPageURLUsu = "",
            locationUsu = "",
            socialNetworkUsu = "",
            followed = [];
        name = "Usuario desconocido";
        await updateNameUser(name);
        await saveUser(idUsu, name, emailUsu, photoURLUsu, frontPageURLUsu, interestsUsu, locationUsu, socialNetworkUsu, followed);
        window.location.reload();
        console.log("datos guardados SIGN IN");
    }

}