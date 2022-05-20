<template>
  <TopBar />
  <div class="home">
    <h1>¡Tú próxima mascota está esperandote!</h1>
    <p>Te mostraremos los resultados más acordes a tu busqueda</p>
  </div>

  <div class="searcher">

    <div class="results">
      <p class="number-animals">{{ nAnimals }} resultados disponibles</p>
      <SelectOptions :options="options" />
      <p>{{ values }}</p>
    </div>

    <div class="group">
      <AnimalCard v-for="e in animalsArr" :key="e" :name="e.name" :location="e.location" :image="e.url" :id="e.id">
      </AnimalCard>
    </div>

    <div class="filter">

      <p>Localidad</p>
      <SelectOptions :options="provincias" />

      <p>Especie</p>
      <SelectOptions :options="specie" />

      <p>Raza</p>
      <SelectOptions :options="dogsraces" />

      <p>Sexo</p>
      <SelectOptions :options="sex" />
      <!--<p>Edad</p>
      <select name="select" class="sel-age">
      </select>-->
      <p>Tamaño</p>
      <SelectOptions :options="size" />
      <!--<p>Color</p>
      <select name="select" class="sel-color">
      </select>-->
      <p>Vacunas</p>
      <SelectOptions :options="others" />

      <p>Esterilización</p>
      <SelectOptions :options="others" />

      <button class="btn-search" @click="checkFilters()">Iniciar busqueda</button>

    </div>

  </div>

</template>

<script>
//Imports de los componentes de vue
import TopBar from '../components/TopBar.vue'
import SelectOptions from '../components/SelectOptions.vue'
import AnimalCard from '../components/AnimalCard.vue'

//Imports de los metodos de firebase
import { getFirestore, collection, getDocs, setDoc, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
  authDomain: "web-kompi.firebaseapp.com",
  projectId: "web-kompi",
  storageBucket: "web-kompi.appspot.com",
  messagingSenderId: "556298514839",
  appId: "1:556298514839:web:92e508e18c5685e99694d2",
  measurementId: "G-93MGP34YQN"
};

const firebaseapp = initializeApp(firebaseConfig);
const fs = getFirestore();
const storage = getStorage(firebaseapp);

export default {
  name: "FilterAnimals",
  components: {
    SelectOptions,
    TopBar,
    AnimalCard
  },
  data() {
    return {
      /*-----------Los arrays hay que cambiarlos----------------*/
      options: ["Más recientes", "Más antiguos", "Aleatorio"],

      provincias: ["Cualquiera", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos",
        "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Ceuta", "Córdoba", "Cuenca", "Gerona",
        "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares", "Jaén", "La Coruña", "La Rioja",
        "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense", "Palencia",
        "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo",
        "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"],

      specie: ["Cualquiera", "Perro", "Gato", "Ave", "Roedor", "Reptil"],

      dogsraces: ["Cualquiera", "Basset Hound", "Beagle", "Bobtail", "Border Collie", "Boston", "Bóxer", "Boyero de Berna", "Braco alemán", "Braco húngaro",
        "Braco de weimar", "Bulldog inglés", "Bulldog francés", "Cairn Terrier", "Caniche", "Carlino", "Chihuahua", "Corgi", "Cocker",
        "Chow Chow", "Dálmata", "Dogo argentino", "Dogo de Burdeos", "Gran Danés", "Jack Russell Terrier", "Labrador Retriever",
        "Lobero irlandés", "Mastín Español", "Mastín del Pirineo", "Papillón", "Pastor australiano", "Pastor ganadero australiano",
        "Pastor Yugoslavo", "Pit Bull", "Pomerania", "Samoyedo", "San Bernardo", "Husky Siberiano", "Seltie", "Teckel", "Yorkshire", "Schanuzer enano"],

      sex: ["Cualquiera", "Macho", "Hembra"],

      size: ["Cualquiera", "Pequeño", "Mediano", "Grande"],

      others: ["Cualquiera", "Si", "No"],

      //---------------------------------------------------------

      html: "",
      nAnimals: "",
      values: "",
      animalsArr: []
    }
  },
  mounted() {
    this.readAnimals();
  },
  methods: {

    /* Funcion que llama a la base de datos de firestore y storage, coge los animales
    y los muestra por pantalla*/
    async readAnimals() {
      const animals = await getDocs(collection(fs, "animals"));
      const group = document.querySelector(".group");

      animals.forEach(async (doc) => {

        await getDownloadURL(ref(storage, doc.data().Imagen1))
          .then((url) => {
            const animal = {
              id: doc.id,
              url: url,
              urlfb: doc.data().Imagen1,
              name: doc.data().Nombre,
              race: doc.data().Raza,
              location: doc.data().Ubicacion
            };

            //Provisional, hay que usar el componente
            //this.html += /*html*/ `<AnimalCard></AnimalCard>`;
            this.animalsArr.push(animal);
            this.nAnimals = this.animalsArr.length;

          }).catch((error) => {
            console.log(error);
          });
      });
    },
  },
  getValue(data) {
    this.values = data;
    console.log(data);
  },
  checkFilters() {
  }
}
</script>

<style scoped>
/*---Home---*/
.home {
  width: 100%;
  height: 40vh;
  background: var(--green);
  display: flex;
  justify-content: end;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;
}

.home h1 {
  font-size: 1.5rem;
}

.home p {
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin: 1rem 2rem 1.5rem;
}

/*---Buscador---*/

.searcher {
  width: 85vw;
  display: grid;
  justify-items: center;
  margin: auto;
  text-align: center;
}

.group {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-content: flex-start;
  gap: 2rem;
  margin-bottom: 5rem;
}

.results {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
}

.results p {
  font-size: 1.7rem;
  font-weight: 600;
}

@media screen and (min-width: 767px) {
  .home {
    height: 30vh;
  }

  .home p {
    margin-bottom: 4rem;
  }

  .searcher {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(60, 1fr);
    margin: 0 auto;
    width: 95%;
  }

  .results {
    grid-area: 1/ 3 / 2 / 7;
  }

  .group {
    grid-area: 2 / 3 / 61 / 7;
  }

  .filter {
    grid-area: 1 / 1 / 61 / 3;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    margin-left: -2rem;
    width: 100%;
  }

  .filter p {
    font-weight: 600;
    width: 10rem;
    text-align: left;
  }

  .filter p:first-child {
    margin-top: 5rem;
  }

  .btn-search {
    margin-top: 3rem;
    width: 10rem;
    height: 3rem;
    border-radius: 3rem;
    background: var(--orange);
    border: 0px;
  }
}

@media screen and (min-width: 1170px) {
  .home {
    display: flex;
    justify-content: end;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    gap: 0.4rem;
  }

  .home h1 {
    margin: 0 3rem;
  }

  .home p {
    margin: 0.5rem 3.2rem 2rem;
    font-size: 1rem;
  }

  .searcher {
    grid-template-rows: none;
  }

  .results {
    height: fit-content;
    display: flex;
    justify-content: space-between;
    width: 85%;
    align-items: flex-start;
  }

  .results select {
    margin: 1rem 0;
  }

  .group {
    width: 85%;
    grid-template-columns: repeat(2, 1fr);
    grid-area: 2 / 3 / 30 / 7;
  }

  .filter {
    width: 85%;
    margin: 0;
  }

  .filter p {
    width: 17rem;
  }
}

@media screen and (min-width: 1300px) {
  .home h1 {
    margin-left: 10rem;
    font-size: 1.7rem;
  }

  .home p {
    font-size: 1.5rem;
    margin: 0 0 3rem 10.1rem;
  }

  .searcher {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(20, 1fr);
    margin: 0 auto;
    width: 85vw;
  }

  .results {
    grid-area: 1 / 3 / 2 / 7;
    justify-content: space-between;
    margin-top: 5rem;
    flex-flow: row;
    width: 100%;
  }

  .results p {
    margin: 0;
  }

  .results select {
    margin: -0.5rem 0 0;
  }

  .group {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    justify-items: center;
  }

  .filter {
    margin-left: -10rem;
  }
}

@media screen and (min-width: 1750px) {
  .group {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
