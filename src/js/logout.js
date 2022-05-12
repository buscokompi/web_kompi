/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
// Desloguea al usuario
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
const btnSignOut = document.querySelector(".signout");

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
