/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
// Desloguea al usuario
import { logOut } from "./fbauth.js";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
const btnSignOut = document.querySelector(".signout");
window.onload = function () {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user.email);
        } else {
            console.log("el usuario no esta logueado");
        }
    });
};

btnSignOut.addEventListener("click", async() => {
    await signOut(auth).then(() => {
        console.log("Usuario deslogueado");
        location.reload();
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
});
