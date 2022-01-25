import {
    db,
    collection,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    setDoc,
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



const savePublish = (content, datePublish, hourPublish, userName, urlPhoto, dateOrderComplet, email, idUser, imagen /* ,totalHearts,comments */ ) => {

    return addDoc(collection(db, 'posts'), {
        content,
        datePublish,
        hourPublish,
        userName,
        urlPhoto,
        dateOrderComplet,
        email,
        likesPost: [],
        idUser,
        //contentFile: "",
        imagen,
        hearts: []
            /*comments:comments, */

    });
}

const saveUser = (idUser, nameUser, emailUser, photo, frontPageURL, interests, location, socialNetwork) => {

    return setDoc(doc(db, "users", idUser), {
        idUser,
        nameUser,
        emailUser,
        photoURL: photo,
        frontPageURL: frontPageURL,
        interests: interests,
        location: location,
        socialNetwork: socialNetwork,
        followed: []
    });
}

const getUsers = () => getDocs(query(collection(db, 'users')));

const getUser = async(id) => await getDoc(doc(db, "users", id));

const getPublishes = () => getDocs(query(collection(db, 'posts'), orderBy("dateOrderComplet", "desc")));

const getPublish = async(id) => await getDoc(doc(db, "posts", id));

const updatePublish = async(id, textPost) => await updateDoc(doc(db, "posts", id), {
    content: textPost
});

const updateUserNamePost = async(id, userName) => await updateDoc(doc(db, "posts", id), {
    userName: userName
});

const deletePublish = async(id) => await deleteDoc(doc(db, "posts", id));

const inLikes = async(id, idUserLike) => await updateDoc(doc(db, "posts", id), {
    likesPost: arrayUnion(idUserLike),
});

const desLikes = async(idPost, idUserLike) => await updateDoc(doc(db, "posts", idPost), {
    likesPost: arrayRemove(idUserLike),
});

const inHeart = async(id, idUserLikeHeart) => await updateDoc(doc(db, "posts", id), {
    hearts: arrayUnion(idUserLikeHeart),
});

const desHeart = async(idPost, idUserLikeHeart) => await updateDoc(doc(db, "posts", idPost), {
    hearts: arrayRemove(idUserLikeHeart),
});

const inFollow = async(id, idUserFollow) => await updateDoc(doc(db, "users", id), {
    followed: arrayUnion(idUserFollow),
});

const desFollow = async(id, idUserFollow) => await updateDoc(doc(db, "users", id), {
    followed: arrayRemove(idUserFollow),
});

const queryEmailUnique = async(emailText) => await getDocs(query(collection(db, "users"), where("emailUser", "==", emailText)));

//Storage

export {

    desLikes,
    inLikes,
    inHeart,
    desHeart,
    inFollow,
    desFollow,

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
    updateUserNamePost,
    saveUser,
    getUsers,
    getUser,

    queryEmailUnique,
    getDownloadURL,
    ref,
    storage,
    uploadBytesResumable
};