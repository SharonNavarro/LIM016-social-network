import { userState } from "../firebase/auth.js"

import {
    templateViewFriends,
    templateFriend
} from "./templates/templateFriends.js";

import {
    getPublish,
    getUsers,
    getUser,
    inFollow,
    desFollow
} from "../firebase/firestore.js"

export default () => {

    const viewFriends = templateViewFriends;

    const divElemt = document.createElement("section");
    divElemt.classList.add("position");
    divElemt.innerHTML = viewFriends;

    let idUsuarioLogin, followed;
    let showPFollowed, displayName, userid, idUserFollow;
    let query, nameUserFollow, photoURLFollow, photoURL;

    userState(async(user) => {
        if (user) {
            displayName = user.displayName;
            photoURL = user.photoURL;
            // email = user.email;
            userid = user.uid;
            showPFollowed();
        }
    })

    showPFollowed = async() => {

        await getIdUsers();
        async function getIdUsers() {
            const querySnapshot = await getUsers();

            querySnapshot.forEach((doc) => {
                if (displayName === doc.data().nameUser) {
                    idUsuarioLogin = doc.data().idUser;
                    followed = doc.data().followed;

                }
            })
        };

        let btnFollow = document.querySelectorAll(".btnFollows");
        console.log(btnFollow);
        let templatePosts;
        let containerAllFriends = document.querySelector(".containerAllFriends");

        templatePosts = "";
        followed.forEach(async(idUserFollower) => {
            query = await getUser(idUserFollower);
            nameUserFollow = query.data().nameUser;
            idUserFollow = query.data().idUser;
            photoURLFollow = query.data().photoURL;

            btnFollow.value = "Siguiendo";
            if (btnFollow.value === "Siguiendo") {
                templatePosts += templateFriend(btnFollow.value, photoURLFollow, nameUserFollow);
                containerAllFriends.innerHTML = templatePosts;
            }

        })

        const btnSearchFollow = divElemt.querySelector("#btnSearchFollow");
        const textSearch = divElemt.querySelector(".search");
        let templateSearchFollow;

        btnSearchFollow.addEventListener("click", () => {
            containerAllFriends.innerHTML = "";
            templatePosts = "";
            templateSearchFollow = "";
            // const arrayUsers = [ ];
            followed.forEach(async(el) => {
                let query = await getUser(el);
                nameUserFollow = query.data().nameUser;
                let name = nameUserFollow.toLowerCase();
                let photoFollow = query.data().photoURL;

                if (name.includes(textSearch.value.toLowerCase())) {
                    // arrayUsers.push(name)
                    templateSearchFollow += templateFriend(btnFollow.value, photoFollow, name);
                    containerAllFriends.innerHTML = templateSearchFollow;
                }
            })
            console.log(textSearch.value.toLowerCase())
                // console.log(arrayUsers)
                // return arrayUsers;
        })

        const btnAllFollows = divElemt.querySelector("#allFollows");

        btnAllFollows.addEventListener("click", async() => {
            await showPFollowed();
        });


        /*    const btnFollowe = divElemt.querySelectorAll(".btnFollows");
           console.log(btnFollowe); */
        console.log(btnFollow);
        btnFollow.forEach((btn) => {
            btn.addEventListener("click", () => {
                console.log("dksndjksn")

                /*    const getPost = await getPublish(btn.dataset.id)
                   const idUserPost = (getPost.data().idUser);

                   if (btn.value == "Seguir") {
                       btn.value = "Seguir"
                       desFollow(idUsuarioLogin, idUserPost).FieldValue;
                       console.log("dejo de seguirlo");
                       await showPFollowed();
                   } */
            })
        })

    };




    return divElemt;
};