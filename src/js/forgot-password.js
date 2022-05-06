import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initFirebase } from "./fbinit";

initFirebase();
const auth = getAuth();
const btnPass = document.querySelector(".btn");

btnPass.addEventListener("click", () => {
  const email = document.querySelector(".input-email").value;
  const promesa = sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Email enviado");
      window.location.href = "../email-validated.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
});
