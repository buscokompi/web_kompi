import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initFirebase } from "./fbinit.js";
const firebaseapp = initFirebase();

const fs = getFirestore();
const storage = getStorage(firebaseapp);

const arraySections = document.querySelectorAll(".sections p");
const arrayLines = document.querySelectorAll(".sections hr");
const profileContent = document.querySelector(".profile-content");
let archivo = null;

async function addAnimal(info) {
  subirFoto();
  const imagen1 = "gs://web-kompi.appspot.com/animals/" + archivo.name;
  await addDoc(collection(fs, "animals"), {
    Nombre: info[0],
    Especie: info[1],
    Edad: info[2],
    Raza: info[3],
    Sexo: info[4],
    Tamano: info[5],
    Peso: info[6],
    Color: info[7],
    Pelo: info[8],
    Microchip: info[9],
    Vacunacion: info[10],
    Esterilizacion: info[11],
    Certificado_ppp: info[12],
    Descripcion: info[14],
    Imagen1: imagen1
  });
}

function pickInfo() {
  const inputArray = document.querySelectorAll(".formulario input");
  const textArea = document.querySelector(".formulario textarea");
  const info = [];
  inputArray.forEach(element => {
    info.push(element.value);
  });
  info.push(textArea.value);
  console.log(info);

  addAnimal(info);
}

function subirFoto() {
  const refImg = ref(storage, "animals/" + archivo.name);

  uploadBytes(refImg, archivo);
}

function chargeForm() {
  profileContent.innerHTML = /* html */`
      <form class="formulario">
        <div class="name">
          <h3>Nombre *</h3>
          <input type="text">
        </div>
        <div class="species">
          <h3>Especie *</h3>
          <input type="text">
        </div>
        <div class="age">
          <h3>Edad *</h3>
          <input type="number">
        </div>
        <div class="breed">
          <h3>Raza *</h3>
          <input type="text">
        </div>
        <div class="gender">
          <h3>Sexo *</h3>
          <input type="text">
        </div>
        <div class="size">
          <h3>Tamaño *</h3>
          <input type="number">
        </div>
        <div class="weight">
          <h3>Peso *</h3>
          <input type="number">
        </div>
        <div class="color">
          <h3>Color *</h3>
          <input type="text">
        </div>
        <div class="hair">
          <h3>Pelo *</h3>
          <input type="text">
        </div>
        <div class="microchip">
          <h3>Microchip *</h3>
          <input type="text">
        </div>
        <div class="vaccination">
          <h3>Vacunación * *</h3>
          <input type="text">
        </div>
        <div class="sterilized">
          <h3>Esterilizado *</h3>
          <input type="text">
        </div>
        <div class="danger-certificate">
          <h3>Certificado ppp *</h3>
          <input type="text">
        </div>
        <div class="description">
          <h3>Decripción</h3>
          <textarea name="" placeholder="Escribe aquí"></textarea>
        </div>
        <div class="images">
          <h3>Fotografías</h3>
          <div class="uploadImages">
          <input class="fileinput" type="file" value="Subir Archivo" accept="image/*">
          </div>
          
        </div>
    </form>

    <div class="save">
      <button class="submit">Guardar</button>
    </div>
    
    `;

  const fileinput = document.querySelector(".fileinput");
  fileinput.addEventListener("change", (e) => {
    e.preventDefault();
    archivo = e.target.files[0];
  });

  // const uploadImg = document.querySelector(".uploadImg");
  // uploadImg.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   subirFoto();
  // });

  const btn = document.querySelector(".submit");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    pickInfo();
  }
  );
}

function aboutMe() {
  profileContent.innerHTML = /* html */`

    `;
}

function adopterProfile() {
  profileContent.innerHTML = /* html */`
    
    `;
}

function animalProfile() {
  profileContent.innerHTML = /* html */`
    <p>Para poner en adopción a un animal, pulsa el botón 'Añadir animal' y completa el formulario</p>

    <div class="new-animal-link">
        <a href="#">Añadir animal</a>
    </div>
    `;

  const newAnimal = document.querySelector(".new-animal-link");
  newAnimal.addEventListener("click", () => chargeForm());
}

function favorites() {
  profileContent.innerHTML = /* html */`
    
    `;
}

function settings() {
  profileContent.innerHTML = /* html */`
    
    `;
}
function chargeSection(index) {
  arrayLines.forEach(element => {
    element.classList.remove("selected");
  });
  arrayLines[index].classList.add("selected");

  switch (index) {
    case 0:
      aboutMe();
      break;
    case 1:
      adopterProfile();
      break;
    case 2:
      animalProfile();
      break;
    case 3:
      favorites();
      break;
    case 4:
      settings();
      break;
  }
}

arraySections.forEach((element, index) => {
  element.addEventListener("click", () => chargeSection(index));
});
