import { saveUser, savePublish, getUser, desFollow, getPublish, desHeart, desLikes, inHeart, inFollow, updatePublish, updateUserNamePost, inLikes } from '../src/firebase/firestore';

jest.mock('../src/firebase/config')
describe('myFunction saveUser', () => {
    it('should return equal values of saveUser​', async() => {
        const result = await saveUser('WI8el6Vy4UfaBzvUq7nV8KpAiPJ3', 'Milagros', 'mili@gmail.com', 'htppp.mili.com', 'ww.mili.com', 'me gusta pasear', 'lima', 'facke')
        expect(result).toStrictEqual({
            idUser: 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3',
            nameUser: 'Milagros',
            emailUser: 'mili@gmail.com',
            photoURL: 'htppp.mili.com',
            frontPageURL: 'ww.mili.com',
            interests: 'me gusta pasear',
            location: 'lima',
            socialNetwork: 'facke',
            followed: [],
        })
    });
});
describe('myFunction saveUser', () => {
    it('should return 9 values ​​for the number of elements', async() => {
        const result = await saveUser('001', 'Milagros', 'mili@gmail.com', 'htppp.mili.com', 'ww.mili.com', 'me gusta pasear', 'lima', 'facke', 'werwtwttwet')

        expect((Object.keys(result)).length).toBe(9);
    });
});

describe('myFunction savePublish', () => {
    it('should return equal values of savePublish', () => {
        const result = savePublish('Hola mundo', '22/1/2022', '02:14', 'Jenifer M', 'http.mi-foto.png', '1642778042479', 'jeny.m@gmail.com', 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3', 'http.bitcoin.jpg')
        expect(result).toStrictEqual({
            content: 'Hola mundo',
            datePublish: '22/1/2022',
            hourPublish: '02:14',
            userName: 'Jenifer M',
            urlPhoto: 'http.mi-foto.png',
            dateOrderComplet: '1642778042479',
            email: 'jeny.m@gmail.com',
            likesPost: [],
            idUser: 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3',
            imagen: 'http.bitcoin.jpg',
            hearts: []
        })
    });
});
describe('myFunction savePublish', () => {
    it('should return 11 values ​​for the number of elements', async() => {
        const result = savePublish('Hola mundo', '22/1/2022', '02:14', 'Jenifer M', 'http.mi-foto.png', '1642778042479', 'jeny.m@gmail.com', 'WI8el6Vy4UfaBzvUq7nV8KpAiPJ3', 'http.bitcoin.jpg')

        expect((Object.keys(result)).length).toBe(11);
    });
});

describe('myFunction updatePublish', () => {
    it('should return value update ​of updatePublish', async() => {
        const result = await updatePublish('00000001', 'como estas')
        expect(result).toStrictEqual({
            content: 'como estas',
        })
    });
});
describe('myFunction updatePublish', () => {
    it('should return 11 values ​​for the number of elements', async() => {
        const result = updatePublish('00000001', 'como estas')
        console.log("totalllllll", (Object.keys(result)).length);
        //expect((Object.keys(result)).length).toBe();
    });
});

describe('myFunction updateUserNamePost', () => {
    it('should return value update ​of updateUserNamePost', async() => {
        const result = await updateUserNamePost('Xuyd4t6jshaad888x', 'Sharon')
        expect(result).toStrictEqual({
            userName: 'Sharon',
        })
    });
});

/* const inLikes = async(id, idUserLike) => await updateDoc(doc(db, "posts", id), {
    likesPost: arrayUnion(idUserLike),
}); */
/*
 */
/*
const user = {
    idUser: '00001',
    nameUser: 'Alejandra',
    emailUser: 'ale@gmail.com',
    photoURL: 'htppp.mi-foto.png',
    frontPageURL: 'wwww.ale.com',
    interests: 'me gusta pasear',
    location: 'Lima',
    socialNetwork: 'redes sociales'

}; */

describe('myFunction getUser', () => {
    it('should return value update ​of getUser', async() => {
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
        const result = await getUser('0001')
        expect(result.user).toStrictEqual(user)
    });
});

describe('myFunction getPublish', () => {
    it('should return value update ​of getUser', async() => {
        const Publish = {
            content: 'hola hola',
            datePublish: '12-11-2022',
            hourPublish: '12:40',
            userName: 'Milagros',
            urlPhoto: 'https/moli.com',
            dateOrderComplet: '1234567',
            email: 'mili@gmail.com',
            likesPost: [],
            idUser: '0001',
            imagen: 'http:/muli.com',
            hearts: []
        };
        const result = await getPublish('0001')
        expect(result.user.idUser).toStrictEqual(Publish.idUser)
    });
});

describe('myFunction inLikes', () => {
    it('should return value update ​of inLikes', async() => {
        const result = await inLikes('Xuyd4t6jshaad888x', '001')
        expect(result).toStrictEqual({
            likesPost: ['001'],

        })
    });
});
describe('myFunction desLikes', () => {
    it('should return value update ​of desLikes', async() => {
        const result = await desLikes('Xuyd4t6jshaad888x', '001')
        expect(result).toStrictEqual({
            likesPost: [],

        })
    });
});
describe('myFunction inHeart', () => {
    it('should return value update ​of inHeart', async() => {
        const result = await inHeart('Xuyd4t6jshaad888x', '001')
        expect(result).toStrictEqual({
            hearts: ['001'],

        })
    });
});
describe('myFunction desHeart', () => {
    it('should return value update of desHeart', async() => {
        const result = await desHeart('Xuyd4t6jshaad888x', '001')
        expect(result).toStrictEqual({
            hearts: [],

        })
    });
});

describe('myFunction inFollow', () => {
    it('should return value update of inFollow', async() => {
        const result = await inFollow('Xuyd4t6jshaad888x', '001')
        expect(result).toStrictEqual({
            followed: ['001'],

        })
    });
});
describe('myFunction desFollow', () => {
    it('should return value update of desFollow', async() => {
        const result = await desFollow('Xuyd4t6jshaad888x', '001')
        expect(result).toStrictEqual({
            followed: [],

        })
    });
});