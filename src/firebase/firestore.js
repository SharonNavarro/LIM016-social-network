import {
    db,
    collection,
    query,
    where,
    getDocs,
    doc, setDoc,
    addDoc,
    onSnapshot
} from "./config.js"

const savePublish = (textPost) =>
    addDoc(collection(db, "posts"), {
        content: textPost
    });

const getPublish = () => getDocs(collection(db, "posts"))

export {

    savePublish,
    getPublish,
    getDocs,
    doc,
    collection,
  
    


};