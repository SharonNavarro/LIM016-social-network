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
    updateDoc
} from "./config.js"

const savePublish = (textPost) => addDoc(collection(db, "posts"), {
    content: textPost
});

const getPublishes = () => getDocs(collection(db, "posts"))

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
    updatePublish

};