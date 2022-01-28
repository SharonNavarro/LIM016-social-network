const user = {
    displayName: 'Maria',
    uid: '00005',
    email: 'maria_cro@gmail.com',
    emailVerified: true

}

export const signIn = jest.fn((email, password) => Promise.resolve(user));