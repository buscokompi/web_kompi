<template>
  <TheHeader />
  <div class="home">
    <h1>¡Tú próxima mascota está esperándote!</h1>
    <p>Te mostraremos los resultados más acordes a tu búsqueda</p>
  </div>
  <section>
    <div class="search">
      <div class="filter">
        <div>
          <p>Localidad</p>
          <SelectOptions :options="provinciasArr" v-model="location"
            @option:selected="onChange(location, 'Ubicacion')" />
        </div>
        <div>
          <p>Especie</p>
          <SelectOptions :options="speciesArr" v-model="specie" @option:selected="onChange(specie, 'Especie')" />
        </div>
        <div>
          <p>Raza</p>
          <SelectOptions :options="racesArr" v-model="race" :disabled="disableRace === true"
            @option:selected="onChange(race, 'Raza')" />
        </div>
        <div>
          <p>Sexo</p>
          <SelectOptions :options="sexArr" v-model="sex" @option:selected="onChange(sex, 'Sexo')" />
        </div>
        <div>
          <p>Edad</p>
          <SelectOptions :options="ageArr" v-model="age" @option:selected="onChange(age, 'Edad')" />
        </div>
        <div>
          <p>Tamaño</p>
          <SelectOptions :options="sizeArr" v-model="size" @option:selected="onChange(size, 'Tamano')" />
        </div>
        <div>
          <p>Color</p>
          <SelectOptions :options="colorArr" v-model="color" @option:selected="onChange(color, 'Color')" />
        </div>
        <div>
          <p>Vacunas</p>
          <SelectOptions :options="othersArr" v-model="vaccination"
            @option:selected="onChange(vaccination, 'Vacunacion')" />
        </div>
        <div class="missing">
          <p>Esterilización</p>
          <SelectOptions :options="othersArr" v-model="sterilization"
            @option:selected="onChange(sterilization, 'Esterilizacion')" />
        </div>
      </div>
      <BaseButton class="btn-search" @click="getFilters(checkFilters())" text="Iniciar búsqueda" />
    </div>
    <div class="group-cards">
      <div class="results">
        <p class="number-animals">{{ nAnimals }} resultados disponibles</p>
        <!--<SelectOptions :options="options" />-->
      </div>

      <div class="group">
        <CardAnimal v-for="e in animalsArr" :key="e" :name="e.name" :location="e.location" :image="e.url" :id="e.id"
          :specie="e.specie">
        </CardAnimal>
      </div>
    </div>
  </section>
  <TheFooter />
</template>

<script>
//Imports de los componentes de vue
import TheHeader from '../components/TheHeader.vue';
import SelectOptions from '../components/SelectOptions.vue'
import CardAnimal from '../components/CardAnimal.vue';
import TheFooter from '../components/TheFooter.vue';

//Imports de los metodos de firebase
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { optionsArr, provinciasArr, specieArr, dogsracesArr, catsracesArr, rodentracesArr, birdracesArr, reptilracesArr, sexArr, sizeArr, othersArr, ageArr, colorArr } from "../js/options.js"
import { KompiStore } from '../stores/KompiStore';
import BaseButton from '../components/BaseButton.vue';

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
    TheHeader,
    CardAnimal,
    TheFooter,
    BaseButton
  },
  data() {
    return {
      //Variables con los arrays de opciones
      optionsArr: optionsArr,
      provinciasArr: provinciasArr,
      speciesArr: specieArr,
      racesArr: ["Cualquiera"],
      sexArr: sexArr,
      sizeArr: sizeArr,
      othersArr: othersArr,
      ageArr: ageArr,
      colorArr: colorArr,


      //Variables con el valor seleccionado de los select
      selLocation: "",
      selSpecie: "",
      selRace: "",
      selSex: "",
      selSize: "",
      selVaccination: "",
      selSterilization: "",
      selAge: "",
      selColor: "",

      location: "Cualquiera",
      specie: "Cualquiera",
      race: "Cualquiera",
      sex: "Cualquiera",
      size: "Cualquiera",
      vaccination: "Cualquiera",
      sterilization: "Cualquiera",
      age: "Cualquiera",
      color: "Cualquiera",

      selCategory: "",

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
      specieStore: "",


      variable: ""
    }
  },
  mounted() {
    //Inicializacion de las variables de firebase y pinia
    this.firebaseapp = initializeApp(firebaseConfig);
    this.fs = getFirestore();
    this.storage = getStorage(this.firebaseapp);
    this.store = KompiStore();

    this.getAnimals();
  },
  methods: {

    hello() {
      console.log(this.variable);
    },

    /*Si hay una especie preseleccionada en pinia, lee los animales de esa especie,
    si no, lee todos los animales de la base de datos*/
    getAnimals() {
      if (this.store.getSpecie()) {
        this.selSpecie = { field: "Especie", value: this.store.getSpecie(), query: where("Especie", "==", this.store.getSpecie()) };
        this.getFilters(this.checkFilters());
        this.store.setSpecie("");
      } else {
        this.readAnimals();
      }
    },

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
    onChange(value, field) {
      let selValue = "";

      if (value !== "Cualquiera") {
        selValue = { field: field, value: value, query: where(field, "==", value) };
      } else {
        selValue = "";
      }

      switch (field) {
        case "Ubicacion":
          this.selLocation = selValue;
          break;
        case "Especie":
          this.selSpecie = selValue;
          this.changeRaces(value);
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
        case "Edad":
          this.selAge = selValue;
          break;
        case "Color":
          this.selColor = selValue;
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
          this.racesArr = dogsracesArr;
          this.disableRace = false;
          break;
        case "Gato":
          this.racesArr = catsracesArr;
          this.disableRace = false;
          break;
        case "Ave":
          this.racesArr = birdracesArr;
          this.disableRace = false;
          break;
        case "Roedor":
          this.racesArr = rodentracesArr;
          this.disableRace = false;
          break;
        case "Reptil":
          this.racesArr = reptilracesArr;
          this.disableRace = false;
          break;
      }
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
      const arrQuery = [this.selLocation, this.selSpecie, this.selRace, this.selSex, this.selSize, this.selVaccination, this.selSterilization, this.selAge, this.selColor];
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
  height: 35vh;
  background: var(--green);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;
}

.home h1 {
  width: 75vw;
  font-family: var(--text-font);
  font-size: 1.5rem;
  color: var(--white);
  margin-top: 9rem;
}

.home p {
  width: 75vw;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin-top: 0.5rem;

}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.filter {
  width: 16rem;
  height: 100%;
  background-color: var(--white);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.filter p {
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.btn-search {
  margin-top: 2rem;
  width: 9rem;
  align-self: center;
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
  justify-content: center;
  margin: 5rem 0 2rem 0;
}

.results p {
  font-size: 1.25rem;
  font-weight: 600;
}

@media screen and (min-width: 900px) {
  .filter {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat (5, 1fr);
    column-gap: 2.5rem;
  }

  .missing {
    display: none;
  }

  .btn-search {
    margin-top: 4rem;
  }

  .group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto 5rem;
    width: 65%;
    row-gap: 4rem;
  }

  .results p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

}



@media screen and (min-width: 1170px) {
  .home {
    width: 100vw;
    display: flex;
    justify-content: end;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;

  }

  .home h1 {
    margin-left: 7rem;
    font-size: 1.7rem;
  }

  .home p {
    font-size: 1.5rem;
    margin: 0 0 3rem 7rem;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    column-gap: 8rem;
  }

  .search {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 7rem;
  }

  .filter {
    display: flex;
    flex-direction: column;

  }

  .results {
    display: flex;
    justify-content: flex-start;
    margin-top: 5.5rem;
  }

  .group-cards {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 48%;
  }

  .group {
    column-gap: 5rem;
  }
}

@media screen and (min-width: 1300px) {
  .home h1 {
    font-size: 2.3rem;
    margin-left: 12rem
  }

  .home p {
    margin-left: 12rem;
  }

  section {
    column-gap: 3rem;
  }

  .search {
    margin-left: 12rem;
  }

  .group-cards {
    align-items: flex-start;
    width: 100%;
  }

  .group {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;

  }

  .results {
    margin-left: 8rem;
  }
}
</style>
