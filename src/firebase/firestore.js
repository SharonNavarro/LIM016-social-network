import {
    db,
    collection,
    query,
    where,
    getDocs,
    doc, setDoc,
    addDoc
} from "./config.js"

const savePublish = (textPost) =>
    addDoc(collection(db, "posts"), {
        content: textPost
    });
/* const getPublish = () =>
    getDocs(collection(db, "posts"))
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }); */
/* const intento = (collection(db, "posts"));
getDocs(intento)
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }) */

export {

    savePublish,
    /* getPublish, */
    getDocs,
    doc,
    collection,
    db,

};