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

const savePublish = (textPost,datePublish/* ,userName,urlPhoto,totalStars,totalHearts,comments */) => addDoc(collection(db, "posts"), {
    content: textPost,
    datePublish: datePublish,
 /*    userName:userName,
    urlPhoto:urlPhoto,
    stars: totalStars,
    hearts: totalHearts,
    comments:comments, */

});

const getPublishes = () => getDocs(collection(db, "posts"),orderBy("content", "asc"));

const getPublish = async (id) => await getDoc(doc(db, "posts", id));

const updatePublish = async (id, textPost) => await updateDoc(doc(db, "posts", id), {
    content: textPost
});

/* .collection("posts")
.orderBy("content", "asc") */

/* let posts = query(collection(db, "posts"));

const getPublishOrder = ()=> query(posts, orderBy("content", "asc"), limit(4)); */

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