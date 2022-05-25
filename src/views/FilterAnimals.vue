<template>
  <TopBar />
  <div class="home">
    <h1>¡Tú próxima mascota está esperandote!</h1>
    <p>Te mostraremos los resultados más acordes a tu busqueda</p>
  </div>

  <div class="searcher">

    <div class="results">
      <p class="number-animals">{{ nAnimals }} resultados disponibles</p>
      <!--<SelectOptions :options="options" />-->
    </div>

    <div class="group">
      <AnimalCard v-for="e in animalsArr" :key="e" :name="e.name" :location="e.location" :image="e.url" :id="e.id"
        :specie="e.specie">
      </AnimalCard>
    </div>

    <div class="filter">

      <p>Localidad</p>
      <SelectOptions :options="provincias" @change="onChange($event, 'Ubicacion')" />

      <p>Especie</p>
      <SelectOptions :options="specie" @change="onChange($event, 'Especie')" />

      <p>Raza</p>
      <SelectOptions :options="races" :disabled="disableRace === true" @change="onChange($event, 'Raza')" />

      <p>Sexo</p>
      <SelectOptions :options="sex" @change="onChange($event, 'Sexo')" />
      <!--<p>Edad</p>
      <select name="select" class="sel-age">
      </select>-->
      <p>Tamaño</p>
      <SelectOptions :options="size" @change="onChange($event, 'Tamano')" />
      <!--<p>Color</p>
      <select name="select" class="sel-color">
      </select>-->
      <p>Vacunas</p>
      <SelectOptions :options="others" @change="onChange($event, 'Vacunacion')" />

      <p>Esterilización</p>
      <SelectOptions :options="others" @change="onChange($event, 'Esterilizacion')" />

      <button class="btn-search" @click="getFilters(checkFilters())">Iniciar busqueda</button>

    </div>
  </div>
  <FooterSection />
</template>

<script>
//Imports de los componentes de vue
import TopBar from '../components/TopBar.vue'
import SelectOptions from '../components/SelectOptions.vue'
import AnimalCard from '../components/AnimalCard.vue'
import FooterSection from '../components/FooterSection.vue';

//Imports de los metodos de firebase
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { optionsArr, provinciasArr, specieArr, dogsracesArr, catsracesArr, rodentracesArr, birdracesArr, reptilracesArr, sexArr, sizeArr, othersArr } from "../js/options.js"

const firebaseConfig = {
  apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
  authDomain: "web-kompi.firebaseapp.com",
  projectId: "web-kompi",
  storageBucket: "web-kompi.appspot.com",
  messagingSenderId: "556298514839",
  appId: "1:556298514839:web:92e508e18c5685e99694d2",
  measurementId: "G-93MGP34YQN"
};

export default {
  name: "FilterAnimals",
  components: {
    SelectOptions,
    TopBar,
    AnimalCard,
    FooterSection
  },
  data() {
    return {
      //Variables con los arrays de opciones
      options: optionsArr,
      provincias: provinciasArr,
      specie: specieArr,
      races: ["Cualquiera"],
      sex: sexArr,
      size: sizeArr,
      others: othersArr,

      //Variables con el valor seleccionado de los select
      selLocation: "",
      selSpecie: "Cualquiera",
      selRace: "",
      selSex: "",
      selSize: "",
      selVaccination: "",
      selSterilization: "",

      //Variable para habilitar o deshabilitar el select de razas
      disableRace: true,

      //Variables con el array de animales y numero de estos
      nAnimals: "",
      animalsArr: [],

      //Variables de firebase
      firebaseapp: null,
      fs: null,
      storage: null,

      //Variable de pinia
      store: "",
      idStore: ""
    }
  },

  //Al cargar la pagina, crea todas las card de los animales
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.fs = getFirestore();
    this.storage = getStorage(this.firebaseapp);

    this.readAnimals();
  },
  methods: {

    /* Llama a la base de datos de firestore y storage, coge todos los animales
    y sus imagenes y los muestra por pantalla*/
    async readAnimals() {
      const animals = await getDocs(collection(this.fs, "animals"));

      animals.forEach(async (doc) => {

        await getDownloadURL(ref(this.storage, doc.data().Imagen1))
          .then((url) => {
            const animal = {
              id: doc.id,
              url: url,
              urlfb: doc.data().Imagen1,
              name: doc.data().Nombre,
              specie: doc.data().Especie,
              location: doc.data().Ubicacion
            };

            this.animalsArr.push(animal);
            this.nAnimals = this.animalsArr.length;

          }).catch((error) => {
            console.log(error);
          });
      });
    },

    //Cambia los valores de las query al cambiar de opcion
    onChange(event, field) {
      let selValue = "";

      if (event.target.value !== "Cualquiera") {
        selValue = { field: field, value: event.target.value, query: where(field, "==", event.target.value) };
      } else {
        selValue = "";
      }

      switch (field) {
        case "Ubicacion":
          this.selLocation = selValue;
          break;
        case "Especie":
          this.selSpecie = selValue;
          this.changeRaces(event.target.value);
          break;
        case "Raza":
          this.selRace = selValue;
          break;
        case "Sexo":
          this.selSex = selValue;
          break;
        case "Tamano":
          this.selSize = selValue;
          break;
        case "Vacunacion":
          this.selVaccination = selValue;
          break;
        case "Esterilizacion":
          this.selSterilization = selValue;
          break;
      }
    },

    //Cambia las opciones del select de razas al cambiar de especie
    changeRaces(specie) {
      switch (specie) {
        case "Cualquiera":
          this.disableRace = true;
          break;
        case "Perro":
          this.races = dogsracesArr;
          this.disableRace = false;
          break;
        case "Gato":
          this.races = catsracesArr;
          this.disableRace = false;
          break;
        case "Ave":
          this.races = birdracesArr;
          this.disableRace = false;
          break;
        case "Roedor":
          this.races = rodentracesArr;
          this.disableRace = false;
          break;
        case "Reptil":
          this.races = reptilracesArr;
          this.disableRace = false;
          break;
      }
      console.log(specie)
    },

    //Aplica las querys de los filtros de los select cambiados
    async getFilters(arranimals) {
      const animalRef = collection(this.fs, "animals");
      const queryArray = [];
      this.animalsArr = [];
      arranimals.forEach(e => {
        queryArray.push(e.query);
      })

      const q = query(animalRef, ...queryArray);
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        await getDownloadURL(ref(this.storage, doc.data().Imagen1))
          .then((url) => {
            const animal = {
              id: doc.id,
              url: url,
              urlfb: doc.data().Imagen1,
              name: doc.data().Nombre,
              specie: doc.data().Especie,
              location: doc.data().Ubicacion
            };

            this.animalsArr.push(animal);
            this.nAnimals = this.animalsArr.length;

          }).catch((error) => {
            console.log(error);
          });
      });

    },

    //Descarta las querys innecesarias y retorna un array con todas las querys funcionales
    checkFilters() {
      const arrQuery = [this.selLocation, this.selSpecie, this.selRace, this.selSex, this.selSize, this.selVaccination, this.selSterilization];
      const arrQuery2 = [];

      arrQuery.forEach(e => {
        if (e !== "") {
          arrQuery2.push(e);
        }
      });
      return arrQuery2;
    },
  }
}
</script>

<style scoped>
/*---Home---*/
@import "../assets/base.css";

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
