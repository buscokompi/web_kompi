<script>
import AnimalCard from '@/components/AnimalCard.vue'
import ExtraCard from '@/components/ExtraCard.vue'
import FooterSection from '@/components/FooterSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import { initFirebase } from '@/firebase/firebase.js'
import { getFirestore, getDoc, doc, collection, getDocs, query, where } from "firebase/firestore/lite"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { getAuth } from "firebase/auth"
import { KompiStore } from "@/stores/KompiStore.js" // Almacen de pinia

export default {
    name: "TemplatePage",
    data() {
        return {
            db: null,
            storage: null,
            firestore: null,
            auth: null,
            animalInfo: null,
            arrayAnimales: [],
            storage: null,

            nombre_1: '',
            location_1: '',
            img_1: null,

            nombre_2: '',
            location_2: '',
            img_2: '',

            nombre_3: '',
            location_3: '',
            img_3: '',

            nombre_4: '',
            location_4: '',
            img_4: '',

            nombre_5: '',
            location_5: '',
            img_5: '',

            bird: {
                Nombre: '',
                Ubicacion: '',
                Edad: '',
                Raza: '',
                Sexo: '',
                Tamano: '',
                Peso: '',
                Color: '',
                Pelo: '',
                Microchip: '',
                Vacunacion: '',
                Certificado_ppp: '',
                Esterilizacion: '',
                Descripcion: '',
                Imagen1: '',
            }

        }
    },
    components: {
        AnimalCard,
        ExtraCard,
        FooterSection,
        BaseButton
    },
    methods: {
        info() {
            console.log(this.bird)
        }
    },

    created() {
        this.storage = KompiStore() // Inicializamos el enlace a la store cuando se crea el componente
    },

    mounted() {
        this.db = initFirebase()
        this.storage = getStorage(this.db)
        this.firestore = getFirestore(this.db)
        this.auth = getAuth()
        getDoc(doc(this.firestore, `animals/${this.storage.getId()}`))
            .then(snap => {
                if (snap.exists()) {
                    this.animalInfo = snap.data();
                    for (const element in this.bird) {
                        this.bird[element] = this.animalInfo[element]
                    }
                    getDownloadURL(ref(this.storage, this.bird.Imagen1))
                        .then(URL => {
                            this.bird.Imagen1 = URL;
                        })
                }
            })
        // Esto es para obtener cuatro animales de la especie Perro para ponerlos en las tarjetas  de la ficha
        const p = query(collection(this.firestore, 'animals'), where('Especie', '==', `${this.rodent.Ubicacion}`));
        getDocs(p)
            .then(element => {
                const aux = Math.floor(Math.random() * element.size);
                for (let i = 0; i < 5; i++) {
                    this.arrayAnimales[i] = element._docs[(aux + i) % element.size].data();
                }

                this.nombre_1 = this.arrayAnimales[0].Nombre;
                this.location_1 = this.arrayAnimales[0].Ubicacion;
                getDownloadURL(ref(this.storage, this.arrayAnimales[0].Imagen1))
                    .then(e => {
                        this.img_1 = e
                    })

                this.nombre_2 = this.arrayAnimales[1].Nombre;
                this.location_2 = this.arrayAnimales[1].Ubicacion;
                getDownloadURL(ref(this.storage, this.arrayAnimales[1].Imagen1))
                    .then(e => {
                        this.img_2 = e
                    })

                this.nombre_3 = this.arrayAnimales[2].Nombre;
                this.location_3 = this.arrayAnimales[2].Ubicacion;
                getDownloadURL(ref(this.storage, this.arrayAnimales[2].Imagen1))
                    .then(e => {
                        this.img_3 = e
                    })

                this.nombre_4 = this.arrayAnimales[3].Nombre;
                this.location_4 = this.arrayAnimales[3].Ubicacion;
                getDownloadURL(ref(this.storage, this.arrayAnimales[3].Imagen1))
                    .then(e => {
                        this.img_4 = e
                    })

                this.nombre_5 = this.arrayAnimales[4].Nombre;
                this.location_5 = this.arrayAnimales[4].Ubicacion;
                getDownloadURL(ref(this.storage, this.arrayAnimales[4].Imagen1))
                    .then(e => {
                        this.img_5 = e
                    })
            })

    },
}
</script>


<template>
    <div v-cloak class="body">
        <header class="header">
            <div class="header-carousel">
                <div class="img-container">
                    <img class="img1" :src="this.bird.Imagen1" alt="imagen1">
                </div>
                <div class="img-container">
                    <img class="img2" src="" alt="imagen2">
                </div>
            </div>
            <!-- <div class="layer-1-buttons">
                <div class="arrow-container">
                    <img class="back" src="./assets/left-arrow.png" alt="flecha-back">
                </div>
                <div class="arrow-container">
                    <img class="next" src="./assets/right-arrow.png" alt="flecha-next">
                </div>
            </div> -->
            <div class="info">
                <div class="name-lobirdion">
                    <h2 class="name">{{ bird.Nombre }}</h2>
                    <p class="lobirdion">{{ bird.Ubicacion }}</p>
                </div>
                <!-- <div class="save-share">
                    <h3 class="save">Guardar</h3>
                    <h3 class="share">Compartir</h3>
                </div> -->
            </div>
        </header>

        <section class="publish-date">
            <p @click="info">Publicado 04/05/2022</p>
        </section>

        <section class="content">
            <div class="animal-info">
                <div class="description">
                    <h3>Descripción</h3>
                    <p>
                        {{ bird.Descripcion }}
                    </p>

                </div>
                <div class="animal-data">
                    <h3>Edad:</h3>
                    <p class="age">{{ bird.Edad }}</p>
                    <div class="hr"></div>
                    <h3>Raza:</h3>
                    <p class="breed">{{ bird.Raza }}</p>
                    <div class="hr"></div>
                    <h3>Sexo:</h3>
                    <p class="gender">{{ bird.Sexo }}</p>
                    <div class="hr"></div>
                    <h3>Tamaño:</h3>
                    <p class="size">{{ bird.Tamano }}</p>
                    <!-- <div class="hr"></div>
                    <h3>Peso:</h3>
                    <p class="weight">{{ bird.Peso }}</p> -->
                    <div class="hr"></div>
                    <h3>Color:</h3>
                    <p class="color">{{ bird.Color }}</p>
                    <!-- <div class="hr"></div>
                    <h3>Pelo:</h3>
                    <p class="hair">{{ bird.Pelo }}</p> -->
                    <div class="hr"></div>
                    <h3>Microchip:</h3>
                    <p class="microchip">{{ bird.Microchip }}</p>
                    <!-- <div class="hr"></div>
                    <h3>Vacunación:</h3>
                    <p class="vaccination">{{ bird.Vacunacion }}</p> -->
                    <!-- <div class="hr"></div>
                    <h3>Certificado ppp:</h3>
                    <p class="certified">{{ bird.Certificado_ppp }}</p> -->
                    <!-- <div class="hr"></div>
                    <h3>Esterilizado:</h3>
                    <p class="esterilized">{{ bird.Esterilizacion }}</p> -->
                </div>
                <div class="adoption">
                    <h3>¿Quieres adoptar o saber más sobre Nala?<br>
                        ¡Ponte en contacto con su cuidador!</h3>


                    <BaseButton bgColor="white" url="/TemplatePageBird" text="CONTACTAR" />
                    <!-- <div class="adoption-link-container">
                        <a href="./404file.html">CONTACTAR</a>
                    </div> -->
                </div>
            </div>


            <div class="other-kompis">

                <h2>Otros Kompis que encajan con tu búsqueda</h2>

                <div class="group">
                    <AnimalCard :name="nombre_1" :location="location_1" :image="img_1" />
                    <AnimalCard :name="nombre_2" :location="location_2" :image="img_2" />
                    <AnimalCard :name="nombre_3" :location="location_3" :image="img_3" />
                    <AnimalCard :name="nombre_4" :location="location_4" :image="img_4" />
                    <AnimalCard :name="nombre_5" :location="location_5" :image="img_5" />
                </div>
            </div>
        </section>

        <FooterSection />

    </div>
</template>

<style scoped>
.body {
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    background-color: var(--lightgrey);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3,
p {
    font-family: var(--text-font);
}

ul {
    list-style: none;
    margin: 0;
}

a {
    text-decoration: none;
    margin: 0;
}


/* CAROUSEL */
.header {
    width: 100%;
    height: calc(6.5 / 8 * 90vh);
    background-color: var(--green);
    overflow-x: hidden;
    position: relative;
    padding: 0 12.5rem;
    z-index: 1;
    /* margin-top: 5rem; */
}

.header-carousel {
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease;
}

.img-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12.5rem;
}

.img-container img {
    height: 100%;
}

.layer-1-buttons {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    background: transparent;
    padding: 0 12.5rem;
}

.arrow-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.arrow-container img {
    width: 6.25rem;
}

.info {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: 2; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 12.5rem;
}

.info .name-lobirdion {
    margin: 0 10rem 2rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.name-lobirdion .name {
    color: var(--white);
    font-family: var(--title-font);
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
}

.name-lobirdion .lobirdion {
    color: var(--white);
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 600;
}

.info .save-share {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5rem;
}

.save-share .save {
    color: var(--white);
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
}

.save-share .share {
    color: var(--white);
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
}

/* PUBLISH DATE */

.publish-date {
    width: 85%;
    height: calc(0.75 / 8 * 100vh);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--lightgrey);
}

.publish-date p {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 500;
}

/* CONTENT */

.prueba {
    width: 100%;
    height: 37.5rem;
    background-color: lightgreen;
}

.content {
    width: 100%;
    background-color: var(--lightgrey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 12.5rem;
    gap: 2rem;
}

.content .animal-info {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: repeat(3, 1fr);
}

.animal-info .description {
    width: 60%;
    height: 80%;
    background-color: var(--white);
    grid-row: 1/4;
    border-radius: 0.93rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem 5rem;
    margin: 0 -5rem 0 10rem;
}

.description h3 {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    padding-bottom: 1.25rem;
}

.description p {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.43rem;
}

.animal-info .animal-data {
    width: 68%;
    height: 70%;
    background-color: var(--white);
    border-radius: 0.93rem;
    grid-row: 1/3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 4.375rem;
    margin-right: -5rem;
}

.animal-data h3 {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
}

.animal-data p {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
}

.animal-data .hr {
    width: 100%;
    height: 1px;
    border: 1px solid grey;
    grid-column: 1/3;
}

.animal-info .adoption {
    width: 68%;
    height: 65%;
    background-color: var(--orange);
    border-radius: 0.93rem;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4.375rem;
    text-align: center;
}

.adoption h3 {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 1.2rem;
    font-weight: 600;
}

.adoption .adoption-link-container {
    width: 10.625rem;
    height: 3.125rem;
    background-color: var(--white);
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
}

.adoption-link-container a {
    color: var(--black);
    text-decoration: none;
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 700;
}

.adoption-link-container:hover {
    background-color: var(--lightgrey);
}

/* <!-- -----------------------------CARD------------------------- --> */

.content .other-kompis {
    width: 100%;
    height: fit-content;
    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
}


.other-kompis .group {
    position: relative;
    width: auto;
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 4rem;
    margin: 4rem 0 5rem;
}


@media screen and (min-width: 767px) {
    h1 {
        font-size: 3.1rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    p {
        font-size: 0.9rem;
    }

    .home p {
        font-size: 1.1rem;
    }

    .home h1 img {
        width: 2rem;
    }

    .other-kompis .text {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .topbar .logo {
        left: 4rem;
    }

    .topbar .burger-img {
        right: 5rem;
    }

    .other-kompis .group {
        grid-template-columns: repeat(2, 1fr);
    }

    .other-kompis .group .card-extra {
        display: none;
    }

    .other-kompis .more {
        visibility: visible;
        opacity: 1;
        justify-self: center;
        position: relative;
        width: 6rem;
        margin-bottom: 9rem;
    }

    .counter {
        gap: 5rem;
    }

    .counter .number {
        font-size: 3rem;
    }

    .counter p {
        font-size: 1.2rem;
    }

    footer {
        height: 40vh;
    }

    footer .column p {
        margin-bottom: 1rem;
    }

    footer p {
        font-size: 0.8rem;
        font-weight: 500;
    }

    footer a {
        font-size: 0.8rem;
        font-weight: 500;
    }

    footer .information {
        flex-direction: row;
        gap: 6rem;
    }

    footer .information .two {
        order: 1;
        margin-top: -1rem;
    }

    footer .information .column {
        text-align: left;
        line-height: 1.5rem;
        width: 12rem;
    }

    .copyright br {
        display: none;
    }
}

@media screen and (min-width: 1170px) {
    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1rem;
    }

    .topbar .logo {
        left: 4rem;
    }

    .topbar .burger-img {
        right: 5rem;
    }

    .home p {
        font-size: 1.25rem;
    }

    .home h1 img {
        width: 2rem;
    }

    .other-kompis .text {
        margin: 1rem 2rem 1.4rem;
        font-size: 1.15rem;
        width: 25rem;
        justify-self: center;
    }

    .birdegory {
        visibility: visible;
        opacity: 1;
    }

    .other-kompis .group {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    .guide {
        display: grid;
        justify-items: center;
    }

    .guide .group {
        grid-template-columns: repeat(3, 1fr);
    }

    .list .container .question {
        gap: 1rem;
    }

    .list .container .answer ul {
        font-size: 1rem;
    }

    footer .information {
        gap: 3vw;
        justify-content: flex-start;
        margin: 0 15vw;
    }

    footer .information .column {
        width: 13rem;
    }

    footer .information .two {
        position: absolute;
        right: 15vw;
    }
}

@media screen and (min-width: 1300px) {
    h1 {
        font-size: 4rem;
    }

    .topbar .logo {
        left: 10rem;
    }

    .topbar .burger-img {
        display: none;
    }

    .topbar .burger.active {
        visibility: hidden;
        opacity: 0;
    }

    .topbar .desktop {
        display: flex;
        gap: 2rem;
        position: absolute;
        align-items: center;
        right: 8rem;
    }

    .topbar .desktop a,
    .topbar .desktop .display li,
    .topbar .desktop .display p {
        color: var(--black);
        font-family: var(--text-font);
        font-size: 0.9rem;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.5s;
        cursor: pointer;
    }

    .topbar .desktop img {
        width: 1rem;
        transition: 0.1s;
    }

    .topbar .desktop .display img {
        width: 1.6rem;
    }

    .topbar .desktop .vertical-line {
        display: inline-block;
        height: 3rem;
        width: 0.1rem;
        background-color: var(--black);
    }

    .topbar .desktop a:hover,
    .topbar .desktop .display p:hover {
        color: var(--orange);
    }

    .topbar .desktop .profile a:hover {
        color: var(--green);
    }

    .topbar .desktop .display {
        display: none;
        grid-auto-flow: column;
        gap: 0.4rem;
        align-items: center;
    }

    .topbar .desktop .display .profile {
        background: var(--orange);
        position: absolute;
        top: 4rem;
        right: -4.4rem;
        width: fit-content;
        height: fit-content;
        padding: 2rem 2.5rem;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s linear;
        line-height: 2rem;
    }

    .topbar .desktop .display.active .profile {
        visibility: visible;
        opacity: 1;
    }

    .home p {
        font-size: 1.35rem;
    }

    .home h1 img {
        width: 2.25rem;
    }

    .birdegory .icon .shadow {
        width: 7rem;
        height: 7rem;
    }

    .birdegory .icon img {
        width: 3.2rem;
        height: 4.5;
    }

    .other-kompis .group {
        grid-template-columns: repeat(5, 1fr);
        gap: 2.5rem;
        margin-bottom: 6rem;
    }

    .other-kompis .group .card-extra {
        display: flex;
    }

    footer .information {
        margin: 0 19vw;
    }

    footer .information .two {
        right: 19vw;
    }
}
</style>