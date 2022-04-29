import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initFirebase } from "./fbinit.js";

initFirebase();

const fs = getFirestore();

export async function readAnimals() {
  const animals = () => getDocs(collection(fs, "animals"));

  const animales = animals();
  let html = "";

  (await animales).forEach(doc => {
    html += `<div>
              <h3>${doc.data().name}</h3>
              <p>${doc.data().race}</p>
            </div>`;
  });

  return html;
}

export async function addAnimals(ageAnimal, nameAnimal, raceAnimal, sexAnimal) {
  await addDoc(collection(fs, "animals"), { age: ageAnimal, name: nameAnimal, race: raceAnimal, sex: sexAnimal });
}
