import{
    auth,  
    providerFacebook,
    providerGoogle,
    providerTwitter,
    onAuthStateChanged,  
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    getRedirectResult,
    signOut,
} from "./config.js"


// iniciar sesion

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, providerGoogle); 

export const signInTwitter = () => signInWithPopup(auth, providerTwitter); 

export const signInGoogleRedirectResult = () => getRedirectResult(auth);

export const signInFacebook = () => signInWithPopup(auth, providerFacebook);  


// registrarse

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);


// cerrar sesion

export const signOutAccount = ( ) => signOut(auth);

// observar el estado del usuario

export const userState =(callback) =>  onAuthStateChanged(auth, callback);