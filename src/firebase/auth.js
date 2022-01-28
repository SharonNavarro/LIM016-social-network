/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
import {
  auth,
  providerFacebook,
  providerGoogle,
  providerTwitter,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  getRedirectResult,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "./config.js";

// iniciar sesion

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, providerGoogle);

export const signInTwitter = () => signInWithPopup(auth, providerTwitter);

export const signInGoogleRedirectResult = () => getRedirectResult(auth);

export const signInFacebook = () => signInWithPopup(auth, providerFacebook);

export const passwordReset = (email) => sendPasswordResetEmail(auth, email);

// registrarse

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// enviar email de verificacion

export const EmailVerification = () => sendEmailVerification(auth.currentUser);

// cerrar sesion

export const signOutAccount = () => signOut(auth);

// observar el estado del usuario

export const userState = (callback) => onAuthStateChanged(auth, callback);

// Actualizar foto de perfil

export const updatePhotoUser = (photoUserProfile) => updateProfile(auth.currentUser, { photoURL: photoUserProfile });

// Actualizar nombre

export const updateNameUser = (nameUserProfile) => updateProfile(auth.currentUser, { displayName: nameUserProfile });
