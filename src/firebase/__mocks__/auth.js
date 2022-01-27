export const signIn = (email, password) => jest.fn( Promise.resolve({}))
;
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);

export const signInTwitter = () => signInWithPopup(auth, providerTwitter);

export const signInGoogleRedirectResult = () => getRedirectResult(auth);

export const signInFacebook = () => signInWithPopup(auth, providerFacebook);