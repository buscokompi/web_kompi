<script>
import CardAnimal from '@/components/CardAnimal.vue'
import CardExtra from '@/components/CardExtra.vue'
import TheFooter from '@/components/TheFooter.vue'
import BaseButton from '@/components/BaseButton.vue'
import { initFirebase } from '@/firebase/firebase.js'
import { getFirestore, getDoc, doc, collection, getDocs, query, where } from "firebase/firestore/lite"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { getAuth } from "firebase/auth"
import { KompiStore } from "@/stores/KompiStore.js" // Almacen de pinia
import CardGroup from '../components/CardGroup.vue'
import TheHeader from '../components/TheHeader.vue'

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
            store: null,

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

            dog: {
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
            },

            store: ""

        }
    },
    components: {
        CardAnimal,
        CardExtra,
        TheFooter,
        BaseButton,
        CardGroup,
        TheHeader
    },
    methods: {
        info() {
            const counter = useCounterStore();
            console.log(counter.counter);
        }
    },
    created() {
        this.store = KompiStore() // Inicializamos el enlace a la store cuando se crea el componente
    },

    mounted() {
        this.db = initFirebase()
        this.storage = getStorage(this.db)
        this.firestore = getFirestore(this.db)
        this.auth = getAuth()
        getDoc(doc(this.firestore, `animals/${this.store.getId()}`))
            .then(snap => {
                if (snap.exists()) {
                    this.animalInfo = snap.data();
                    for (const element in this.dog) {
                        this.dog[element] = this.animalInfo[element]
                    }
                    getDownloadURL(ref(this.storage, this.dog.Imagen1))
                        .then(URL => {
                            this.dog.Imagen1 = URL;
                        })
                }
            })
        // Esto es para obtener cuatro animales de la especie Perro para ponerlos en las tarjetas  de la ficha
        /*const p = query(collection(this.firestore, 'animals'), where('Ubicacion', '==', `Tenerife`));
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
            })*/

    },
}
</script>


<template>
    <TheHeader />
    <section v-cloak class="body">
        <main>
            <div class="carousel">
                <div class="img-container">
                    <img class="img1" :src="this.dog.Imagen1" alt="imagen1">
                </div>
            </div>

            <div class="info">
                <div class="details">
                    <h1 class="name">{{ dog.Nombre }}</h1>
                    <p class="location">{{ dog.Ubicacion }}</p>
                </div>
            </div>
        </main>

        <section class="publish-date">
            <p @click="info">Publicado 04/05/2022</p>
        </section>

        <div class="info">
            <div class="description">
                <h2>Descripción</h2>
                <p>
                    {{ dog.Descripcion }}
                </p>

            </div>
            <div class="animal-data">
                <div class="data">
                    <h2>Edad:</h2>
                    <p class="age">{{ dog.Edad }}</p>
                </div>
                <div class="data">
                    <h2>Raza:</h2>
                    <p class="breed">{{ dog.Raza }}</p>
                </div>
                <div class="data">
                    <h2>Sexo:</h2>
                    <p class="gender">{{ dog.Sexo }}</p>
                </div>

                <div class="data">
                    <h2>Tamaño:</h2>
                    <p class="size">{{ dog.Tamano }}</p>
                </div>

                <div class="data">
                    <h2>Peso:</h2>
                    <p class="weight">{{ dog.Peso }}</p>
                </div>

                <div class="data">
                    <h2>Color:</h2>
                    <p class="color">{{ dog.Color }}</p>
                </div>

                <div class="data">
                    <h2>Pelo:</h2>
                    <p class="hair">{{ dog.Pelo }}</p>
                </div>

                <div class="data">
                    <h2>Microchip:</h2>
                    <p class="microchip">{{ dog.Microchip }}</p>
                </div>

                <div class="data">
                    <h2>Vacunación:</h2>
                    <p class="vaccination">{{ dog.Vacunacion }}</p>
                </div>

                <div class="data">
                    <h2>Certificado ppp:</h2>
                    <p class="certified">{{ dog.Certificado_ppp }}</p>
                </div>

                <div class="data">
                    <h2>Esterilizado:</h2>
                    <p class="esterilized">{{ dog.Esterilizacion }}</p>
                </div>

            </div>
            <div class="adoption">
                <p>¿Quieres adoptar o saber más sobre {{ dog.Nombre }}?<br>
                    ¡Ponte en contacto con su cuidador!</p>

                <BaseButton url="/TemplatePageBird" text="CONTACTAR" />
            </div>
        </div>


        <div class="other-kompis">
            <p>Otros Kompis que encajan con tu búsqueda</p>
            <CardGroup />
        </div>
    </section>
    <TheFooter />
</template>

<style scoped>
p {
    font-size: 1rem;
}

h1 {
    font-family: var(--text-font);
}

h2 {
    font-size: 1rem;
}

.body {
    display: flex;
    flex-direction: column;
    color: var(--black);
    font-family: var(--title-font);
}

/* CAROUSEL */

main {
    margin-top: 5rem;
    width: 100%;
    height: calc(6.5 / 9 * 90vh);
    background-color: var(--green);
}

.carousel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-container img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.info {
    display: flex;
    flex-direction: column;
    color: var(--black);
    font-family: var(--title-font);
}


.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 1.8rem;
}

.name {
    margin-top: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
}

.location {
    font-size: 1rem;
    font-weight: 600;

}

/* PUBLISH DATE */

.publish-date {
    margin: 5.5rem 0 0 1.8rem;
}


/* CONTENT */


.description {
    margin-top: 1rem;
    padding: 0 1.8rem;
}

.animal-data {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-row-gap: 1rem;
    justify-content: center;
    padding: 0 1.8rem;
}


.adoption {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0 4rem 0;
    text-align: center;
}

.adoption p {
    font-size: 1rem;
    margin-bottom: 2rem;
}




/* <!-- -----------------------------CARD------------------------- --> */

.other-kompis p {
    font-size: 1rem;
    margin: 0 1rem -2rem;
    text-align: center;
}



@media screen and (min-width: 359px) {

    .info,
    .publish-date {
        padding: 0 1rem;
    }

}

@media screen and (min-width: 767px) {

    .animal-data {
        background-color: var(--lightgrey);
    }

    .data {
        display: flex;
        gap: 0.6rem;
        border-bottom: solid 0.1rem var(--black);
        width: 80%;
    }

    .adoption {}
}

@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {

    main {
        width: 100%;
        height: calc(6.5 / 8 * 90vh);
        background-color: var(--green);
        overflow-x: hidden;
        position: relative;
        padding: 0 12.5rem;
        z-index: 1;
        /* margin-top: 5rem; */
    }

    .carousel {
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

    .details {
        margin: 0 10rem 2rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .name {
        color: var(--white);
        font-family: var(--title-font);
        font-size: 3rem;
        font-weight: 800;
        margin: 0;
    }

    .location {
        color: var(--white);
        font-family: var(--text-font);
        font-size: 16px;
        font-weight: 600;
    }

    .save-share {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 5rem;
    }

    .save {
        color: var(--white);
        font-family: var(--text-font);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
    }

    .share {
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

    .info {
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: repeat(3, 1fr);
    }

    .description {
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

    .description h2 {
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

    .animal-data {
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

    .animal-data h2 {
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

    .adoption {
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

    .adoption h2 {
        color: var(--black);
        font-family: var(--text-font);
        font-size: 1.2rem;
        font-weight: 600;
    }




    /* <!-- -----------------------------CARD------------------------- --> */

    .other-kompis {
        width: 100%;
        height: fit-content;
        display: grid;
        justify-content: center;
        align-content: center;
        text-align: center;
    }


    .group {
        position: relative;
        width: auto;
        display: grid;
        justify-content: center;
        align-content: center;
        gap: 4rem;
        margin: 4rem 0 5rem;
    }
}
</style>
