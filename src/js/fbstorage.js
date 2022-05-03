import { initFirebase } from "./fbinit";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// Inicializa la api de firebase

// Inicializa firebase
const firebaseapp = initFirebase();
const storage = getStorage(firebaseapp);

const fileinput = document.querySelector(".fileinput");
const uploadImage = document.querySelector(".upload");
let archivo = null;

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
