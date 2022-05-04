import { initFirebase } from "./fbinit";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Inicializa la api de firebase

// Inicializa firebase
const firebaseapp = initFirebase();
const storage = getStorage(firebaseapp);

const fileinput = document.querySelector(".fileinput");
const uploadImage = document.querySelector(".upload");
const showImages = document.querySelector(".showimages");
let archivo = null;
let html = "";

fileinput.addEventListener("change", (e) => {
  e.preventDefault();
  archivo = e.target.files[0];
  console.log(archivo);
});

uploadImage.addEventListener("click", () => {
  const refImg = ref(storage, "animals/" + archivo.name);
  const metadata = { contentType: "img/jpeg" };

  uploadBytes(refImg, archivo).then((snapshot) => {
    console.log(archivo);
  });
});

const imganimals = document.querySelector(".img-animals");

showImages.addEventListener("click", () => {
  getDownloadURL(ref(storage, "gs://web-kompi.appspot.com/animals/pisko.jpg"))
    .then((url) => {
      html += ` <div>
                  <img src="${url}" width="200px" height="200px">
                <div>`;
    });

  imganimals.innerHTML = html;
});
