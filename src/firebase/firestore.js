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

const savePublish = (textPost, datePublish, hourPublish,userName,urlPhoto/* ,totalStars,totalHearts,comments */) => addDoc(collection(db, "posts"), {
    content: textPost,
    datePublish: datePublish,
    hourPublish: hourPublish,
    userName: userName,
    urlPhoto: urlPhoto
    /* 
   stars: totalStars,
   hearts: totalHearts,
   comments:comments, */

});

const getPublishes = () => getDocs(query(collection(db, "posts"), orderBy("hourPublish", "desc")));


const getPublish = async (id) => await getDoc(doc(db, "posts", id));

const updatePublish = async (id, textPost) => await updateDoc(doc(db, "posts", id), {
    content: textPost
});

const deletePublish = async (id) => await deleteDoc(doc(db, "posts", id));

export {

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
    /* getPublishOrder */

};