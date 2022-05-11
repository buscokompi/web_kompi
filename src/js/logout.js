// Desloguea al usuario
import { logOut } from "./fbauth.js";

const signOut = document.querySelector(".signout");

signOut.addEventListener("click", () => {
    logOut();
});
