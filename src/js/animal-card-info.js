// ----------------- URL PARAMS -----------------
import { initFirebase } from "./fbinit.js";
// import { getFirestore, getDoc, doc } from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs, setDoc, query, where, doc, getDoc } from "firebase/firestore";

const url = new URL(location.href);
const id = url.searchParams.get("id");

// Inicializa la api de firebase

const fs = initFirebase();
const storage = getStorage(fs);
const firestore = getFirestore(fs);

const docRef = doc(firestore, "animals", "aOXbYmSuDhJYxMdovnyC");
if (id) {
  const docRef = doc(firestore, "animals", id);
}

const docSnap = await getDoc(docRef);
console.log(docSnap);

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

const imagenURL = await getDownloadURL(ref(storage, docSnap.data().Imagen1));
// const imagen2URL = await getDownloadURL(ref(storage, snap.data().Imagen2));

// console.log(imagenURL);

animalImagen1.src = imagenURL;
// animalImagen2.src = imagen2URL;
animalName.textContent = docSnap.data().Nombre;
animalLocation.textContent = docSnap.data().Ubicacion;
animalDescription.textContent = docSnap.data().Descripcion;
animalAge.textContent = docSnap.data().Edad;
animalBreed.textContent = docSnap.data().Raza;
animalGender.textContent = docSnap.data().Sexo;
animalSize.textContent = docSnap.data().Tamano;
animalWeight.textContent = docSnap.data().Peso;
animalColor.textContent = docSnap.data().Color;
animalHair.textContent = docSnap.data().Pelo;
animalMicrochip.textContent = docSnap.data().Microchip;
animalVaccination.textContent = docSnap.data().Vacunacion;
animalCertified.textContent = docSnap.data().Certificado_ppp;
animalEsterilized.textContent = docSnap.data().Esterilizacion;

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
