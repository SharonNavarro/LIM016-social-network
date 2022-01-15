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
    arrayUnion
} from "./config.js"

const DBPosts= collection(db, 'posts');

const DBUsers= collection(db, 'users');

const savePublish = (textPost, datePublish, hourPublish, userName, urlPhoto, dateOrderComplet, email,idUser/* ,totalHearts,comments */) => addDoc((DBPosts),{
    content: textPost,
    datePublish: datePublish,
    hourPublish: hourPublish,
    userName: userName,
    urlPhoto: urlPhoto,
    dateOrderComplet: dateOrderComplet,
    email: email,
    likesPost: [],
    idUser:idUser
    /* hearts: totalHearts,
  comments:comments, */

});

const saveUser = async(idUser,nameUser, emailUser/* ,photoURL, */) => await setDoc(doc(db, "users",idUser ), {
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

const inLikes = async (id, userLike) => await updateDoc(doc(db, "posts", id), {
    likesPost: arrayUnion(userLike),
});

const desLikes = async (id, userLike) => await updateDoc(doc(db, "posts", id), {
    likesPost:arrayRemove(userLike),
});



const queryEmailUnique = async (emailText) => await getDocs(query(collection(db, "users"), where("emailUser", "==", emailText)));



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
    queryEmailUnique

};