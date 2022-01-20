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
    imagen:imagen,
    hearts: []
    /*comments:comments, */

});

const saveUser = async (idUser, nameUser, emailUser, photo, frontPageURL, interests, location, socialNetwork) => await setDoc(doc(db, "users", idUser), {
    idUser,
    nameUser,
    emailUser,
    photoURL: photo,
    frontPageURL: frontPageURL,
    interests: interests,
    location: location,
    socialNetwork: socialNetwork
});

const getUsers = () => getDocs(query(DBUsers));

const getUser = async (id) => await getDoc(doc(db, "users", id));

const updateBio = async (id, interests, location, socialNetwork) => await updateDoc(doc(db, "users", id), {
    interests: interests,
    location: location,
    socialNetwork: socialNetwork
});

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

const inHeart = async (id, idUserLikeHeart) => await updateDoc(doc(db, "posts", id), {
    hearts: arrayUnion(idUserLikeHeart),
});

const desHeart = async (idPost, idUserLikeHeart) => await updateDoc(doc(db, "posts", idPost), {
    hearts: arrayRemove(idUserLikeHeart),
});

const queryEmailUnique = async (emailText) => await getDocs(query(collection(db, "users"), where("emailUser", "==", emailText)));

//Storage

export {
  
    desLikes,
    inLikes,
    inHeart,
    desHeart,

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
    getUser,
    queryEmailUnique,
    getDownloadURL,
    ref,storage,
    uploadBytesResumable

    

};