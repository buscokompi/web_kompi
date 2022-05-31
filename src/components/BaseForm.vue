<template>
    <div class="card">
        <form class="formulario">
            <div class="name">
                <p>Nombre*</p>
                <input v-model="data.Nombre" type="text" class="input">
            </div>
            <div class="location">
                <p>Localidad*</p>
                <SelectOptions :options="provinciasArr" v-model="data.Ubicacion"
                    @option:selected="onChange(location, 'Ubicacion')" />
            </div>
            <div class="species">
                <p>Especie*</p>
                <SelectOptions :options="speciesArr" v-model="data.Especie"
                    @option:selected="onChange(data.Especie, 'Especie')" />
            </div>
            <div class="breed">
                <p>Raza*</p>
                <SelectOptions :options="racesArr" v-model="data.Raza" :disabled="disableRace === true"
                    @option:selected="onChange(race, 'Raza')" />
            </div>
            <div class="gender">
                <p>Sexo*</p>
                <SelectOptions :options="sexArr" v-model="data.Sexo" @option:selected="onChange(sex, 'Sexo')" />
            </div>
            <div class="age">
                <p>Edad*</p>
                <SelectOptions :options="ageArr" v-model="data.Edad" @option:selected="onChange(age, 'Edad')" />
            </div>
            <div class="size">
                <p>Tamaño*</p>
                <SelectOptions :options="sizeArr" v-model="data.Tamano" @option:selected="onChange(size, 'Tamano')" />
            </div>
            <div class="color">
                <p>Color*</p>
                <SelectOptions :options="colorArr" v-model="data.Color" @option:selected="onChange(color, 'Color')" />
            </div>
            <div class="microchip">
                <p>Microchip*</p>
                <SelectOptions :options="othersArr" v-model="data.Microchip"
                    @option:selected="onChange(vaccination, 'Vacunacion')" />
            </div>
            <div class="vaccination">
                <p>Vacunas*</p>
                <SelectOptions :options="othersArr" v-model="data.Vacunacion"
                    @option:selected="onChange(vaccination, 'Vacunacion')" />
            </div>
            <div class="sterilization">
                <p>Esterilización*</p>
                <SelectOptions :options="othersArr" v-model="data.Esterilizacion"
                    @option:selected="onChange(sterilization, 'Esterilizacion')" />
            </div>
            <div class="certificate">
                <p>Certificado PPP*</p>
                <SelectOptions :options="othersArr" v-model="data.Certificado_ppp"
                    @option:selected="onChange(sterilization, 'Esterilizacion')" />
            </div>

            <div class="description">
                <p>Descripción*</p>
                <textarea v-model="data.Descripcion" name="" placeholder="Deja una descripción."
                    class="textarea"></textarea>
            </div>
            <div class="images">
                <p>Sube una foto*</p>
                <div class="uploadImages">
                    <input @change="TakePhoto($event)" class="fileinput" type="file" accept="image/*">
                </div>
            </div>
        </form>
        <div class="save">
            <BaseButton @click="addAnimal" text="Guardar" />
        </div>
    </div>
</template>

<script>
import SelectOptions from '../components/SelectOptions.vue'
import BaseButton from '../components/BaseButton.vue'
//Imports de los metodos de firebase
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { optionsArr, provinciasArr, specieArr, dogsracesArr, catsracesArr, rodentracesArr, birdracesArr, reptilracesArr, sexArr, sizeArr, othersArr, ageArr, colorArr } from "../js/options.js"
import { KompiStore } from '../stores/KompiStore';

import { getAuth } from "firebase/auth";
import { initFirebase } from '@/firebase/firebase.js'

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
    name: "BaseForm",
    components: {
        SelectOptions,
        BaseButton,
    },
    data() {
        return {
            firebaseapp: initFirebase(),
            fs: getFirestore(),
            storage: getStorage(),
            archivo: null,
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
            name: "",
            selLocation: "",
            selSpecie: "",
            selRace: "",
            selSex: "",
            selSize: "",
            selVaccination: "",
            selSterilization: "",
            selAge: "",
            selColor: "",
            description: "",
            imagen1: "",

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

            data: {
                Nombre: "",
                Ubicacion: "Cualquiera",
                Edad: "Cualquiera",
                Tamano: "Cualquiera",
                Microchip: "Cualquiera",
                Peso: "Cualquiera",
                Sexo: "Cualquiera",
                Color: "Cualquiera",
                Vacunacion: "Cualquiera",
                Especie: "Cualquiera",
                Raza: "Cualquiera",
                Pelo: "Cualquiera",
                Esterilizacion: "Cualquiera",
                Certificado_ppp: "Cualquiera",
                Descripcion: "",
                Imagen1: ""
            },
            archivo: null,



            variable: ""
        }
    },
    mounted() {
        //Inicializacion de las variables de firebase y pinia
        this.firebaseapp = initializeApp(firebaseConfig);
        this.fs = getFirestore();
        this.storage = getStorage(this.firebaseapp);
        this.store = KompiStore();

    },
    methods: {
        async addAnimal() {
            this.subirFoto();
            const imagen1 = "gs://web-kompi.appspot.com/animals/" + this.archivo.name;
            this.data.Imagen1 = imagen1;
            await addDoc(collection(this.fs, "animals"), this.data);
        },
        subirFoto() {
            const refImg = ref(this.storage, "animals/" + this.archivo.name);

            uploadBytes(refImg, this.archivo);
        },
        TakePhoto(event) {
            this.archivo = event.target.files[0]
            console.log(this.archivo);
        },

        hello() {
            console.log(this.variable);
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
p {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    color: var(--black);
    font-weight: 600;
}

.card {
    background: var(--lightgrey);
    padding: 3rem 0.5rem;
    width: 100vw;
    border-radius: 1rem;
    margin-bottom: 10rem;


}

.formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

input,
.textarea {
    height: 1.85rem;
    appearance: none;
    border-radius: 0.3rem;
    background: var(--lightgrey);
    font-family: var(--text-font);
    width: 15rem;
    border: 0.15rem solid var(--green);

}

.textarea {
    resize: none;
    height: 15rem;
}




.fileinput::-webkit-file-upload-button {
    display: none;
}

.fileinput {
    color: var(--grey);
    cursor: pointer;
}

.save {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
}

@media screen and (min-width: 767px) {
    .card {
        width: 33rem;
        padding: 2rem 3rem;
    }

    .formulario {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr) 4fr 1fr;

    }

    .description {
        grid-area: 7 / 1 / 8 / 3;
    }

    .images {
        grid-area: 8 / 1 / 9 / 3;
    }

    .location,
    .breed,
    .age,
    .color,
    .vaccination,
    .certificate {
        justify-self: end;
    }

    .species,
    .gender,
    .size,
    .microchip,
    .sterilization {
        justify-self: baseline;
    }

    .images input {
        width: 99%;
    }

    .textarea {
        width: 98%;
    }
}


@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {

    .card {
        width: 52rem;
    }

    .formulario {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr) 3fr 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

    }

    .name {
        grid-area: 1 / 1 / 2 / 2;
    }

    .location {
        grid-area: 1 / 2 / 2 / 3;
        justify-self: center;
    }

    .species {
        grid-area: 1 / 3 / 2 / 4;
        justify-self: end;

    }

    .breed {
        grid-area: 2 / 1 / 3 / 2;
        justify-self: baseline;
    }

    .gender {
        grid-area: 2 / 2 / 3 / 3;
        justify-self: center;

    }

    .age {
        grid-area: 2 / 3 / 3 / 4;
        justify-self: end;

    }

    .size {
        justify-self: baseline;
        grid-area: 3 / 1 / 4 / 2;
    }

    .color {
        grid-area: 3 / 2 / 4 / 3;
        justify-self: center;

    }

    .microchip {
        grid-area: 3 / 3 / 4 / 4;
        justify-self: end;

    }

    .vaccination {
        grid-area: 4 / 1 / 5 / 2;
        justify-self: baseline;

    }

    .sterilization {
        grid-area: 4 / 2 / 5 / 3;
        justify-self: center;

    }

    .certificate {
        grid-area: 4 / 3 / 5 / 4;
        justify-self: end;
    }

    .description {
        grid-area: 5 / 1 / 6 / 4;
    }

    .images {
        grid-area: 6 / 1 / 7 / 4;
    }

    .images input {
        width: 100%;
    }

    .textarea {
        width: 99%;
    }

}
</style>
