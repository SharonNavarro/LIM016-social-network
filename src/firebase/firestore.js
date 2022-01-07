import {
    db,
    collection,
    query,
    where,
    getDocs,
    doc, setDoc,
    addDoc,
    onSnapshot,
    deleteDoc
} from "./config.js"

const savePublish = (textPost) =>
    addDoc(collection(db, "posts"), {
        content: textPost
    });

const getPublish = () => getDocs(collection(db, "posts"))

const deletePublish= async(id)=> await deleteDoc(doc(db, "posts", id));

export {

    savePublish,
    getPublish,
    getDocs,
    doc,
    collection,
    deletePublish,
    deleteDoc,
    db,
  
    


};