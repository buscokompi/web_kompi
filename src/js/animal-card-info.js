// ----------------- URL PARAMS -----------------
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, collection, getDocs } from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

const url = new URL(location.href);
const id = url.searchParams.get("id");
console.log(id);

// Inicializa la api de firebase
export function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
    authDomain: "web-kompi.firebaseapp.com",
    projectId: "web-kompi",
    storageBucket: "web-kompi.appspot.com",
    messagingSenderId: "556298514839",
    appId: "1:556298514839:web:92e508e18c5685e99694d2",
    measurementId: "G-93MGP34YQN"
  };

  // Inicializa firebase
  return initializeApp(firebaseConfig);
}
/* --------------------------------------- */
const db = initFirebase();
const storage = getStorage(db);
const firestore = getFirestore(db);
const auth = getAuth();

const content2 = document.querySelector(".display");
const profile2 = document.querySelector(".login");
const profileName = document.querySelector(".profile-name");

auth.onAuthStateChanged(function(user) {
  if (user) {
    content2.style.display = "grid";
    profile2.style.display = "none";
    getUserName(user.email);
  } else {
    content2.style.display = "none";
    profile2.style.display = "flex";
  }
});

let snap = null;
if (id) {
  snap = getDoc(doc(firestore, `animals/${id}`));
  console.log(snap);
} else snap = getDoc(doc(firestore, "animals/aOXbYmSuDhJYxMdovnyC"));

const animalImagen1 = document.querySelector(".img1");
const animalImagen2 = document.querySelector(".img2");
const animalName = document.querySelector(".info .name");
const animalLocation = document.querySelector(".info .location");
const animalDescription = document.querySelector(".description p");
const animalAge = document.querySelector(".animal-data .age");
const animalBreed = document.querySelector(".animal-data .breed");
const animalGender = document.querySelector(".animal-data .gender");
const animalSize = document.querySelector(".animal-data .size");
const animalWeight = document.querySelector(".animal-data .weight");
const animalColor = document.querySelector(".animal-data .color");
const animalHair = document.querySelector(".animal-data .hair");
const animalMicrochip = document.querySelector(".animal-data .microchip");
const animalVaccination = document.querySelector(".animal-data .vaccination");
const animalCertified = document.querySelector(".animal-data .certified");
const animalEsterilized = document.querySelector(".animal-data .esterilized");

const imagenURL = getDownloadURL(ref(storage, snap.data().Imagen1));
// const imagen2URL = await getDownloadURL(ref(storage, snap.data().Imagen2));

// console.log(imagenURL);

animalImagen1.src = imagenURL;
// animalImagen2.src = imagen2URL;
animalName.textContent = snap.data().Nombre;
animalLocation.textContent = snap.data().Ubicacion;
animalDescription.textContent = snap.data().Descripcion;
animalAge.textContent = snap.data().Edad;
animalBreed.textContent = snap.data().Raza;
animalGender.textContent = snap.data().Sexo;
animalSize.textContent = snap.data().Tamano;
animalWeight.textContent = snap.data().Peso;
animalColor.textContent = snap.data().Color;
animalHair.textContent = snap.data().Pelo;
animalMicrochip.textContent = snap.data().Microchip;
animalVaccination.textContent = snap.data().Vacunacion;
animalCertified.textContent = snap.data().Certificado_ppp;
animalEsterilized.textContent = snap.data().Esterilizacion;

// const arrayP = document.querySelectorAll("p"); ;

// // Para obtener los datos de todos los perros en la base de datos
// (await snap).forEach(element => {
//   console.log(element.data());
//   if (element.id === "Bonka") {
//     arrayP[0].textContent = element.data().Edad;
//     arrayP[1].textContent = element.data().Raza;
//     arrayP[2].textContent = element.data().Sexo;
//     arrayP[3].textContent = element.data().Tamaño;
//     arrayP[4].textContent = element.data().Peso;
//     arrayP[5].textContent = element.data().Color;
//     arrayP[6].textContent = element.data().Pelo;
//     arrayP[7].textContent = element.data().Microchip;
//     arrayP[8].textContent = element.data().Vacunación;
//     arrayP[9].textContent = element.data().Certificado_ppp;
//     arrayP[10].textContent = element.data().Esterilizado;
//   }
// });

// ----------------- CAROUSEL -----------------
const arrowBack = document.querySelector(".back");
const arrowNext = document.querySelector(".next");
const headerCarousel = document.querySelector(".header-carousel");

// Cuando hago CLICK en punto
// Aplicar un transform translateX() al headerCarousel

arrowBack.addEventListener("click", () => {
  // cuando se pulsa el transformX es 0
  headerCarousel.style.transform = "translateX(0)";
});

arrowNext.addEventListener("click", () => {
  // cuando se pulsa el transformX es -50%
  headerCarousel.style.transform = "translateX(-50%)";
});

async function getUserName(userEmail) {
  const userRef = await getDocs(collection(db, "usuarios"));
  let user = "";

  userRef.forEach((doc) => {
    if (doc.id === userEmail) {
      user = doc.data().name + " " + doc.data().surname;
    }
  });

  if (user === "") {
    user = userEmail;
  }

  profileName.textContent = user;
}
