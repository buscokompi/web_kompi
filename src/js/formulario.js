import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initFirebase } from "./fbinit.js";
import { getAuth } from "firebase/auth";

const firebaseapp = initFirebase();

const fs = getFirestore();
const storage = getStorage(firebaseapp);
const auth = getAuth();

const arraySections = document.querySelectorAll(".sections p");
const arrayLines = document.querySelectorAll(".sections hr");
const profileContent = document.querySelector(".profile-content");
let archivo = null;

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

async function addAnimal(info) {
  subirFoto();
  const imagen1 = "gs://web-kompi.appspot.com/animals/" + archivo.name;
  await addDoc(collection(fs, "animals"), {
    Nombre: info[0],
    Edad: info[1],
    Tamano: info[2],
    Microchip: info[3],
    Peso: info[4],
    Sexo: info[5],
    Color: info[6],
    Vacunacion: info[7],
    Especie: info[8],
    Raza: info[9],
    Pelo: info[10],
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
  profileContent.innerHTML = /* `
      <form class="formulario">
        <div class="name">
          <p>Nombre*</p>
          <input type="text">
        </div>
        <div class="location">
          <p>Localidad*</p>
          <select data-value="Ubicacion"></select>
        </div>
        <div class="species">
          <p>Especie*</p>
          <select ></select>
        </div>
        <div class="breed">
          <p>Raza*</p>
          <select></select>
        </div>
        <div class="gender">
          <p>Sexo*</p>
          <select >
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </div>
        <div  class="age">
          <p>Edad*</p>
          <select>
          </select>
        </div>
        <div class="weight">
          <p>Tamaño*</p>
          <select name="Tamano">

          <option value="pequenio">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>;
          </select>
        </div>
        <div class="color">
          <p>Color*</p>
          <select name="select">
          </select>
        </div>
        <div class="hair">
          <p>Pelo*</p>
          <select name="hair">
          </select>
        </div>
        <div class="microchip">
          <p>Microchip*</p>
          <select>
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="vaccination">
          <p>Vacunas*</p>
          <select>

            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="sterilized">
          <p>Esterilización*</p>
          <select>
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="certificate">
          <p>Certificado ppp*</p>
          <select>
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="description">
          <p>Descripción*</p>
          <textarea name="" placeholder="Deja una descripción."></textarea>
        </div>
        <div class="images">
          <p>Sube una foto*</p>
          <div class="uploadImages">
            <input class="fileinput" type="file" value="Subir Archivo" accept="image/*">
          </div>
        </div>Peso: info[6],
      </form>
      <div class="save">
          <button class="button">Guardar</button>
      </div>

    `; */

    /* HTML */`
      <form class="formulario">
        <div class="name">
          <p>Nombre*</p>
          <input type="text" data-value="Edad" class="input">
        </div>
        <div  class="age">
          <p>Edad*</p>
          <input type="text" data-value="Edad" class="input">
        </div>
        <div class="weight">
        <p>Tamaño*</p>
        <input type="text" data-value="Tamaño" class="input">
        <!--<select name="Tamano" class="input">
          <option value="pequenio">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>;
        </select>-->
      </div>
      <div class="microchip">
          <p>Microchip*</p>
          <input type="text" data-value="Microchip" class="input">
          <!--<select class="input">
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="location">
          <p>Peso*</p>
          <input type="text" data-value="Ubicacion" class="input">
        </div>
        <div class="gender">
          <p>Sexo*</p>
          <input type="text" data-value="Sexo" class="input">
          <!--<select class="input">
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>-->
        </div>
        <div class="color">
          <p>Color*</p>
          <input type="text" data-value="Color" class="input">
        </div>
        <div class="vaccination">
          <p>Vacunas*</p>
          <input type="text" data-value="Vacunas" class="input">
          <!--<select class="input">
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="species">
          <p>Especie*</p>
          <input type="text" data-value="Especie" class="input">
        </div>
        <div class="breed">
          <p>Raza*</p>
          <input type="text" data-value="Raza" class="input">
        </div>
        <div class="hair">
          <p>Pelo*</p>
          <input type="text" data-value="Pelo" class="input">
        </div>
        <div class="sterilized">
          <p>Esterilización*</p>
          <input type="text" data-value="Esterilizacion" class="input">
          <!--<select class="input">
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="certificate">
          <p>Certificado ppp*</p>
          <input type="text" data-value="Esterilizacion" class="input">
          <!--<select class="input">
            <option value="sí">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="description">
          <p>Descripción*</p>
          <textarea name="" placeholder="Deja una descripción." class="textarea"></textarea>
        </div>
        <div class="images">
          <p>Sube una foto*</p>
          <div class="uploadImages">
            <input class="fileinput" type="file" value="Subir Archivo" accept="image/*">
          </div>
        </div>
      </form>
      <div class="save">
          <button class="button">Guardar</button>
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

  const btn = document.querySelector(".save");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hola");
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


    <a href="#" class="button new-animal-link">Añadir animal</a>

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

async function getUserName(userEmail) {
  const userRef = await getDocs(collection(fs, "usuarios"));
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
