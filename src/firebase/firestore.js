import {
    db,
    collection,
    query,
    where,
    getDocs,
    getDoc,
    doc, setDoc,
    addDoc,
    onSnapshot,
    deleteDoc,
    updateDoc,
    orderBy,
    limit,
    FieldValue,
    arrayRemove,
    arrayUnion,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    uploadBytesResumable
} from "./config.js"

const DBPosts = collection(db, 'posts');

const DBUsers = collection(db, 'users');

const savePublish = (textPost, datePublish, hourPublish, userName, urlPhoto, dateOrderComplet, email, idUser,imagen/* ,totalHearts,comments */) => addDoc(( collection(db, 'posts')), {
    content: textPost,
    datePublish: datePublish,
    hourPublish: hourPublish,
    userName: userName,
    urlPhoto: urlPhoto,
    dateOrderComplet: dateOrderComplet,
    email: email,
    likesPost: [],
    idUser: idUser,
    //contentFile: "",
    imagen:imagen
    /* hearts: totalHearts,
  comments:comments, */

});

const saveUser = async (idUser, nameUser, emailUser/* ,photoURL, */) => await setDoc(doc(db, "users", idUser), {
    idUser,
    nameUser,
    emailUser,
    /*  photoURL */
});

const getUsers = () => getDocs(query(DBUsers));

const getPublishes = () => getDocs(query(DBPosts, orderBy("dateOrderComplet", "desc")));

const getPublish = async (id) => await getDoc(doc(db, "posts", id));

const updatePublish = async (id, textPost) => await updateDoc(doc(db, "posts", id), {
    content: textPost
});

const deletePublish = async (id) => await deleteDoc(doc(db, "posts", id));

const inLikes = async (id, idUserLike) => await updateDoc(doc(db, "posts", id), {
    likesPost: arrayUnion(idUserLike),
});

const desLikes = async (idPost, idUserLike) => await updateDoc(doc(db, "posts", idPost), {
    likesPost: arrayRemove(idUserLike),
});

const queryEmailUnique = async (emailText) => await getDocs(query(collection(db, "users"), where("emailUser", "==", emailText)));

//Storage

export {
  
    desLikes,
    inLikes,

    savePublish,
    getPublishes,
    getDocs,
    doc,
    collection,
    deletePublish,
    deleteDoc,
    db,
    getPublish,
    updatePublish,
    saveUser,
    getUsers,
    queryEmailUnique,
    getDownloadURL,
    ref,storage,
    uploadBytesResumable

    

};