<template>
    <form class="formulario">
        <div class="name">
            <p>Nombre*</p>
            <input v-model="data.Nombre" type="text" class="input">
        </div>
        <p>Nombre*</p>
        <v-select />
        <div>
            <p>Localidad*</p>
            <SelectOptions :options="provinciasArr" v-model="location"
                @option:selected="onChange(location, 'Ubicacion')" />
        </div>
        <div>
            <p>Especie*</p>
            <SelectOptions :options="speciesArr" v-model="specie" @option:selected="onChange(specie, 'Especie')" />
        </div>
        <div>
            <p>Raza*</p>
            <SelectOptions :options="racesArr" v-model="race" :disabled="disableRace === true"
                @option:selected="onChange(race, 'Raza')" />
        </div>
        <div>
            <p>Sexo*</p>
            <SelectOptions :options="sexArr" v-model="sex" @option:selected="onChange(sex, 'Sexo')" />
        </div>
        <div>
            <p>Edad*</p>
            <SelectOptions :options="ageArr" v-model="age" @option:selected="onChange(age, 'Edad')" />
        </div>
        <div>
            <p>Tamaño*</p>
            <SelectOptions :options="sizeArr" v-model="size" @option:selected="onChange(size, 'Tamano')" />
        </div>
        <!-- <p>Peso*</p>
        <SelectOptions :options="weightArr" v-model="weight" @option:selected="onChange(weight, 'Peso')" /> -->
        <div>
            <p>Color*</p>
            <SelectOptions :options="colorArr" v-model="color" @option:selected="onChange(color, 'Color')" />
        </div>
        <div>
            <p>Vacunas*</p>
            <SelectOptions :options="othersArr" v-model="vaccination"
                @option:selected="onChange(vaccination, 'Vacunacion')" />
        </div>
        <div>
            <p>Esterilización*</p>
            <SelectOptions :options="othersArr" v-model="sterilization"
                @option:selected="onChange(sterilization, 'Esterilizacion')" />
        </div>
        <div>
            <p>Certificado PPP*</p>
            <SelectOptions :options="othersArr" v-model="sterilization"
                @option:selected="onChange(sterilization, 'Esterilizacion')" />
        </div>
        <div class="images">
            <p>Sube una foto*</p>
            <div class="uploadImages">
                <input @change="TakePhoto($event)" class="fileinput" type="file" accept="image/*">
            </div>
        </div>
        <div class="description">
            <p>Descripción*</p>
            <textarea v-model="data.Descripcion" name="" placeholder="Deja una descripción."
                class="textarea"></textarea>
        </div>
    </form>
    <div class="save">
        <BaseButton @click="addAnimal" text="Guardar" />
    </div>
</template>
<script>
import SelectOptions from '../components/SelectOptions.vue'
import BaseButton from '../components/BaseButton.vue'

//Imports de los metodos de firebase
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { optionsArr, provinciasArr, specieArr, dogsracesArr, catsracesArr, rodentracesArr, birdracesArr, reptilracesArr, sexArr, sizeArr, othersArr } from "../js/options.js"
import { KompiStore } from '../stores/KompiStore';

import { getAuth } from "firebase/auth";
import { initFirebase } from '@/firebase/firebase.js'
export default {
    name: "formularioEjemplo",
    components: {
        SelectOptions,
        BaseButton,
    },
    data() {
        return {
            firebaseapp: initFirebase(),
            fs: getFirestore(),
            storage: getStorage(),
            data: {
                Nombre: "",
                Edad: "",
                Tamano: "",
                Microchip: "",
                Peso: "",
                Sexo: "",
                Color: "",
                Vacunacion: "",
                Especie: "",
                Raza: "",
                Pelo: "",
                Esterilizacion: "",
                Certificado_ppp: "",
                Descripcion: "",
                Imagen1: ""
            },
            archivo: null


        }
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
        }
    }
}
</script>
<style scoped>
.formulario {
    width: 70vw;
    background: var(--white);
    margin-top: 1rem;
}

select {
    background: var(--lightgrey);
    width: 90%;
    height: 2.5rem;
    border-radius: 0.5rem;
    font-family: var(--text-font);
    border: none;
    cursor: pointer;
}

input {
    height: 2.5rem;
    appearance: none;
    border-radius: 0.3rem;
    background: var(--white);
    font-family: var(--text-font);
    width: 15rem;
    border: 0.15rem solid var(--green);
}


.fileinput::-webkit-file-upload-button {
    display: none;
}

.fileinput {
    color: transparent;
    cursor: pointer;
}

@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {

    .formulario {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(21, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 0;
    }

    .name {
        width: 18rem;
        grid-area: 1 / 1 / 3 / 5;
        font-family: var(--text-font);
    }

    .location {
        width: 18rem;
        grid-area: 3 / 1 / 5 / 5;
    }

    .species {
        width: 18rem;
        grid-area: 5 / 1 / 7 / 5;

        /* grid-column: 3/5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; */
    }

    .age {
        width: 9rem;
        grid-area: 1 / 5 / 3 / 7;

        /* grid-column: 5/6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; */
    }

    .gender {
        width: 9rem;
        grid-area: 3 / 5 / 5 / 7;
    }

    .breed {
        width: 9rem;
        grid-area: 5 / 5 / 7 / 7;
    }

    .weight {
        width: 9rem;
        grid-area: 1 / 7 / 3 / 9;
    }

    .color {
        width: 9rem;
        grid-area: 3 / 7 / 5 / 9;
    }

    .hair {
        width: 9rem;
        grid-area: 5 / 7 / 7 / 9;
    }

    .microchip {
        width: 9rem;
        grid-area: 1 / 9 / 3 / 11;
    }

    .vaccination {
        width: 9rem;
        grid-area: 3 / 9 / 5 / 11;
    }

    .sterilized {
        width: 9rem;
        grid-area: 5 / 9 / 7 / 11;
    }

    .certificate {
        width: 9rem;
        grid-area: 7 / 1 / 9 / 3;
    }

    .images {
        grid-area: 9 / 1 / 11 / 11;
        width: 100%;
    }

    .description {
        grid-area: 11 / 1 / 20 / 11;
    }

    .description textarea {
        background: var(--lightgrey);
        border-radius: 0.5rem;
        border: none;
        width: 100%;
        height: 100%;
    }

    .formulario .button {
        grid-area: 22 / 1 / 24 / 11;
    }
}
</style>
