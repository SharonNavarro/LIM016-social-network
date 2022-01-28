/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */

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
  deleteDoc,
  updateDoc,
  orderBy,
  arrayRemove,
  arrayUnion,
  storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "./config.js";

const savePublish = (content, datePublish, hourPublish, userName, urlPhoto, dateOrderComplet, email, idUser, imagen) => {
  return addDoc(collection(db, 'posts'),
    {
      content,
      datePublish,
      hourPublish,
      userName,
      urlPhoto,
      dateOrderComplet,
      email,
      likesPost: [],
      idUser,
      imagen,
      hearts: [],
    });
};

const saveUser = (idUser, nameUser, emailUser, photo, frontPageURL, interests, location, socialNetwork) => {
  return setDoc(doc(db, "users", idUser), {
    idUser,
    nameUser,
    emailUser,
    photoURL: photo,
    frontPageURL,
    interests,
    location,
    socialNetwork,
    followed: [],
  });
};

const getUsers = () => getDocs(query(collection(db, 'users')));

const getUser = async (id) => getDoc(doc(db, "users", id));

const getPublishes = () => getDocs(query(collection(db, 'posts'), orderBy("dateOrderComplet", "desc")));

const getPublish = async (id) => getDoc(doc(db, "posts", id));

const updatePublish = async (id, textPost) => updateDoc(doc(db, "posts", id), {
  content: textPost,
});

const updateUserNamePost = async (id, userName) => updateDoc(doc(db, "posts", id), {
  userName,
});

const deletePublish = async (id) => deleteDoc(doc(db, "posts", id));

const inLikes = async (id, idUserLike) => updateDoc(doc(db, "posts", id), {
  likesPost: arrayUnion(idUserLike),
});

const desLikes = async (idPost, idUserLike) => updateDoc(doc(db, "posts", idPost), {
  likesPost: arrayRemove(idUserLike),
});

const inHeart = async (id, idUserLikeHeart) => updateDoc(doc(db, "posts", id), {
  hearts: arrayUnion(idUserLikeHeart),
});

const desHeart = async (idPost, idUserLikeHeart) => updateDoc(doc(db, "posts", idPost), {
  hearts: arrayRemove(idUserLikeHeart),
});

const inFollow = async (id, idUserFollow) => updateDoc(doc(db, "users", id), {
  followed: arrayUnion(idUserFollow),
});

const desFollow = async (id, idUserFollow) => updateDoc(doc(db, "users", id), {
  followed: arrayRemove(idUserFollow),
});

const queryEmailUnique = async (emailText) => getDocs(query(collection(db, "users"), where("emailUser", "==", emailText)));

// Storage

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
  uploadBytesResumable,
};
