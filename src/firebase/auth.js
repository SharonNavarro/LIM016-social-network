import{
    auth,  
    providerFacebook,
    providerGoogle,
    onAuthStateChanged,  
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithRedirect, 
    getRedirectResult,
    signOut,
} from "./config.js"


// iniciar sesion

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogleRedirect = () => signInWithRedirect(auth, providerGoogle); 

export const signInGoogleRedirectResult = () => getRedirectResult(auth);

export const signInFacebook = () => signInWithRedirect(auth, providerFacebook); getRedirectResult(auth); 


// registrarse

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);


// cerrar sesion

export const signOutAccount = ( ) => signOut(auth);

// observar el estado del usuario

export const userState =(callback) =>  onAuthStateChanged(auth, callback);