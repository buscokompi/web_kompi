<template>

    <form class="formulario">
        <div class="title">
            <h1>Ficha animal</h1>
            <p>Completa el formulario y presiona el botón ‘Guardar’ para crear y publicar la ficha de tu animal. Puedes
                editarla en cualquier momento.</p>
        </div>
        <div class="name">
            <p>Nombre*</p>
            <input v-model="data.Nombre" type="text" class="input">
        </div>
        <div class="location">
            <p>Localidad*</p>
            <SelectOptions :options="provinciasArr" v-model="location"
                @option:selected="onChange(location, 'Ubicacion')" />
        </div>
        <div class="species">
            <p>Especie*</p>
            <SelectOptions :options="speciesArr" v-model="specie" @option:selected="onChange(specie, 'Especie')" />
        </div>
        <div class="breed">
            <p>Raza*</p>
            <SelectOptions :options="racesArr" v-model="race" :disabled="disableRace === true"
                @option:selected="onChange(race, 'Raza')" />
        </div>
        <div class="gender">
            <p>Sexo*</p>
            <SelectOptions :options="sexArr" v-model="sex" @option:selected="onChange(sex, 'Sexo')" />
        </div>
        <div class="age">
            <p>Edad*</p>
            <SelectOptions :options="ageArr" v-model="age" @option:selected="onChange(age, 'Edad')" />
        </div>
        <div class="size">
            <p>Tamaño*</p>
            <SelectOptions :options="sizeArr" v-model="size" @option:selected="onChange(size, 'Tamano')" />
        </div>
        <!-- <p>Peso*</p>
        <SelectOptions :options="weightArr" v-model="weight" @option:selected="onChange(weight, 'Peso')" /> -->
        <div class="color">
            <p>Color*</p>
            <SelectOptions :options="colorArr" v-model="color" @option:selected="onChange(color, 'Color')" />
        </div>
        <div class="vaccination">
            <p>Vacunas*</p>
            <SelectOptions :options="othersArr" v-model="vaccination"
                @option:selected="onChange(vaccination, 'Vacunacion')" />
        </div>
        <div class="sterilization">
            <p>Esterilización*</p>
            <SelectOptions :options="othersArr" v-model="sterilization"
                @option:selected="onChange(sterilization, 'Esterilizacion')" />
        </div>
        <div class="certificate">
            <p>Certificado PPP*</p>
            <SelectOptions :options="othersArr" v-model="sterilization"
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
h1 {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 1.3rem;
}

p {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    color: var(--black);
    font-weight: 600;
}

.formulario {
    width: 70vw;
    background: var(--white);
    margin-top: 8rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 1.5rem;
}

input,
.textarea {
    height: 2.5rem;
    appearance: none;
    border-radius: 0.3rem;
    background: var(--white);
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

@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {

    .formulario {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        grid-template-rows: repeat(3, auto);

    }

    .name {}

    .location {}

    .species {}

    .age {}

    .gender {}

    .breed {}

    .weight {}

    .color {}

    .hair {}

    .microchip {}

    .vaccination {}

    .sterilized {}

    .certificate {}

    .images input,
    .textarea {
        width: 100%;
    }



    .formulario .button {}
}
</style>
