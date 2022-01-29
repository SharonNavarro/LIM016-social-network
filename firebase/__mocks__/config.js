/* eslint-disable no-unused-vars */
const user = {
  idUser: '0001',
  nameUser: 'Alejandra',
  emailUser: 'ale@gmail.com',
  photoURL: 'htppp.mi-foto.png',
  frontPageURL: 'wwww.ale.com',
  interests: 'me gusta pasear',
  location: 'Lima',
  socialNetwork: 'redes sociales',
  followed: [],
};

const idUser = ['001'];
const idUser2 = [];
export const addDoc = jest.fn((documents, values) => (values));
export const collection = jest.fn();
export const updateDoc = jest.fn((documents, values) => Promise.resolve(values));
export const arrayUnion = jest.fn(() => idUser);
export const arrayRemove = jest.fn(() => idUser2);
export const getDoc = jest.fn((documents) => Promise.resolve({ user }));
export const setDoc = jest.fn((documents, values) => Promise.resolve(values));
// eslint-disable-next-line no-shadow
export const doc = jest.fn((db, collection, docid) => Promise.resolve({}));
export const db = {};
