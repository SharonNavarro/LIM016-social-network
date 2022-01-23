export const setDoc = jest.fn((documents, values) => Promise.resolve(values));
export const doc = jest.fn((db, collection, docid) => Promise.resolve({}));
export const db = {};
export const addDoc = jest.fn((documents, values) => (values));
export const collection = jest.fn();
//export const getDoc = jest.fn();
export const updateDoc = jest.fn((documents, values) => Promise.resolve(values));