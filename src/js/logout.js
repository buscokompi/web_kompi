/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
// Desloguea al usuario
import { logOut } from "./fbauth.js";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const signOut = document.querySelector(".signout");
window.onload = function () {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user.email);
        } else {
            console.log("el usuario no esta logueado");
        }
    });
};

signOut.addEventListener("click", () => {
    logOut();
});
