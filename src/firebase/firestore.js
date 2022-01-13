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
    limit
} from "./config.js"

const savePublish = (textPost, datePublish, hourPublish, userName, urlPhoto, dateOrderComplet, email, totalStars/* ,totalHearts,comments */) => addDoc(collection(db, "posts"), {
    content: textPost,
    datePublish: datePublish,
    hourPublish: hourPublish,
    userName: userName,
    urlPhoto: urlPhoto,
    dateOrderComplet: dateOrderComplet,
    email: email,
    totalStars: totalStars,
    /* hearts: totalHearts,
  comments:comments, */

});

const saveUser = (nameUser, emailUser) => addDoc(collection(db, "users"), {
    
    nameUser: nameUser,
    emailUser: emailUser

});

const getUsers = () => getDocs(query(collection(db, "users")));

//const deleteStar = async (id) => await deleteDoc(doc(db, "stars", id));

const getPublishes = () => getDocs(query(collection(db, "posts"), orderBy("dateOrderComplet", "desc")));
const getPublish = async (id) => await getDoc(doc(db, "posts", id));

const updatePublish = async (id, textPost) => await updateDoc(doc(db, "posts", id), {
    content: textPost
});
const updatePublishStars = async (id, idUserStars) => await updateDoc(doc(db, "posts", id), {
    totalStars: idUserStars
});

const deletePublish = async (id) => await deleteDoc(doc(db, "posts", id));

export {
    updatePublishStars,
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
  
};