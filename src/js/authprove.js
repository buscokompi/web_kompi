import { signInFirebase, logInFirebase, logInGoogle, logInFacebook, logOut, userLogued } from "./fbauth.js";
import { readAnimals, addAnimals } from "./fbfirestore.js";

const signInButton = document.querySelector(".signin");
const logInButton = document.querySelector(".btn-login-email");
const logGoogle = document.querySelector(".logGoogle");
const logFacebook = document.querySelector(".logFacebook");
// const logOutButton = document.querySelector(".logout");

// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", () => {
  console.log("sign up en proceso");

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  signInFirebase(email, password);
});

// Loguea a un usuario existente
logInButton.addEventListener("click", () => {
  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;

  logInFirebase(email, password);
});

// Login con google
logGoogle.addEventListener("click", () => {
  logInGoogle();
});

// Login con facebook
logFacebook.addEventListener("click", () => {
  logInFacebook();
});

// Desloguea al usuario actual
/* logOutButton.addEventListener("click", () => {
  logOut();
}); */
// ----------------------------

// Comprueba que un usuario este autenticado
userLogued();
// ____________________________________________

// Lee los animales de la database de firebase
const showAnimals = document.querySelector(".muestraanimales");
const animalContainer = document.querySelector(".animales");

showAnimals.addEventListener("click", async () => {
  console.log(readAnimals());
  animalContainer.innerHTML = await readAnimals();
});
// ______________________________________________

// Añade un animal a la base de datos de animals
const btnAddAnimal = document.querySelector(".addAnimal");

btnAddAnimal.addEventListener("click", async () => {
  const nameAnimal = document.querySelector(".nameAnimal").value;
  const ageAnimal = document.querySelector(".ageAnimal").value;
  const raceAnimal = document.querySelector(".raceAnimal").value;
  const sexAnimal = document.querySelector(".sexAnimal").value;

  await addAnimals(ageAnimal, nameAnimal, raceAnimal, sexAnimal);
});
