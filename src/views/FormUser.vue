<script>
import SelectForm from '../components/SelectForm.vue';
import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default {
    name: 'FormUser',
    components: { SelectForm },
    setup() {

        const firebaseConfig = {
            apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
            authDomain: "web-kompi.firebaseapp.com",
            projectId: "web-kompi",
            storageBucket: "web-kompi.appspot.com",
            messagingSenderId: "556298514839",
            appId: "1:556298514839:web:92e508e18c5685e99694d2",
            measurementId: "G-93MGP34YQN"
        };

        this.firebaseapp = initializeApp(firebaseConfig);
        this.fs = getFirestore();

        const auth = getAuth();

        let userEmail = "";

        auth.onAuthStateChanged(function (user) {
            if (user) {
                userEmail = user.email;
            } else {
                console.log("el usuario no esta logueado");
            }
        });


        const answersForm = [
            {
                text1: "Me gustaría adoptar a",
                text2: "",
                options: ['no tengo preferencia', 'un perro', 'un gato', 'un ave', 'un roedor', 'un reptil'],
                id: 1
            },
            {
                text1: "Me gustaría adoptar a",
                text2: "",
                options: ['no tengo preferencia', 'una hembra', 'un macho'],
                id: 2
            },
            {
                text1: "Mi mascota ideal es",
                text2: "",
                options: ['no tengo preferencia', 'cachorro', 'joven', 'adulto', 'anciano'],
                id: 3
            },
            {
                text1: "Prefiero una mascota que sea",
                text2: "",
                options: ['no tengo preferencia', 'pequeña', 'mediana', 'grande', 'gigante'],
                id: 4
            },
            {
                text1: "Me gustaría que el nivel de actividad de la mascota sea",
                text2: "",
                options: ['no tengo preferencia', 'muy activo', 'activo', 'poco activo'],
                id: 5
            },
            {
                text1: "Mi vivienda es",
                text2: "",
                options: ['un piso', 'una casa', 'una casa con jardín'],
                id: 6
            },
            {
                text1: "Mi mascota deberá estar/tener",
                text2: "",
                options: ['no tengo preferencia', 'adiestrada', 'sus vacunas al día', 'microchip', 'todas las anteriores'],
                id: 7
            },
            {
                text1: "Estoy",
                text2: "a adoptar a una mascota con necesidades especiales",
                options: ['dispuesto/a', 'no dispuesto/a'],
                id: 8
            },
            {
                text1: "",
                text2: "cuidador de un animal",
                options: ['Es la primera vez que soy', 'Actualmente soy', 'Anteriormente fui'],
                id: 9
            },
            {
                text1: "Actualmente tengo",
                text2: "",
                options: ['ninguna mascota', 'un perro', 'un gato', 'un ave', 'un roedor', 'otro animal doméstico', 'varios de los mencionados anteriormente'],
                id: 10
            },
            {
                text1: "Mi unidad familiar está compuesta por",
                text2: "",
                options: ['solo yo', 'mi pareja', 'mi pareja y mis hijos'],
                id: 11
            },
            {
                text1: "Mis hijos son",
                text2: "",
                options: ['no tengo hijos', 'menores de 10', 'mayores de 10', 'menores y mayores'],
                id: 12
            },
            {
                text1: "En mi casa",
                text2: "en el contrato de arrendamiento",
                options: ['no hay restricciones', 'hay restricciones'],
                id: 13
            },
            {
                text1: "La mascota pasará",
                text2: "",
                options: ['de 2 a 5 horas sola en casa', 'de 5 a 8 horas sola en casa', 'de 8 a 12 horas sola en casa'],
                id: 14
            },
            {
                text1: "Si me voy de vacaciones",
                text2: "",
                options: ['tengo en mi entorno a alguien que cuide del animal', 'no tengo a nadie que cuide del animal'],
                id: 15
            }]

        return {
            answersForm,
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: "",
            question6: "",
            question7: "",
            question8: "",
            question9: "",
            question10: "",
            question11: "",
            question12: "",
            question13: "",
            question14: "",
            question15: "",

        }
    },

    methods: {
        changeOption(event, answers) {
            switch (answers.id) {
                case 1:
                    this.question1 = event.target.value;
                    break;

                case 2:
                    this.question1 = event.target.value;
                    break;

                case 3:
                    this.question1 = event.target.value;
                    break;

                case 4:
                    this.question1 = event.target.value;
                    break;

                case 5:
                    this.question1 = event.target.value;
                    break;

                case 6:
                    this.question1 = event.target.value;
                    break;

                case 7:
                    this.question1 = event.target.value;
                    break;

                case 8:
                    this.question1 = event.target.value;
                    break;

                case 9:
                    this.question1 = event.target.value;
                    break;

                case 9:
                    this.question1 = event.target.value;
                    break;

                case 10:
                    this.question1 = event.target.value;
                    break;

                case 11:
                    this.question1 = event.target.value;
                    break;

                case 12:
                    this.question1 = event.target.value;
                    break;

                case 13:
                    this.question1 = event.target.value;
                    break;

                case 14:
                    this.question1 = event.target.value;
                    break;

                case 15:
                    this.question1 = event.target.value;
                    break;
            }
            console.log(event.target.value)
        },
        addAnswerDataBase() {
            await addDoc(doc(fs, "userForm", userEmail), {
                answer1: this.question1,
                answer2: this.question2,
                answer3: this.question3,
                answer4: this.question4,
                answer5: this.question5,
                answer6: this.question6,
                answer7: this.question7,
                answer8: this.question8,
                answer9: this.question9,
                answer10: this.question10,
                answer11: this.question11,
                answer12: this.question12,
                answer13: this.question13,
                answer14: this.question14,
                answer15: this.question15,
            })
        }


    },
}

</script>

<template>
    <section>
        <a href="./index.html">
            <img src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
        </a>
        <div class="form-user-container">
            <h1>¡Encuentra a <br> tu mascota ideal!</h1>
            <p class="subtitle">Para ello, cuéntanos <br> un poco más sobre ti</p>
            <div class="questions">
                <SelectForm v-for="answers in answersForm" :key="answers" :label1="answers.text1"
                    :label2="answers.text2" :formOptions="answers.options" @change="changeOption($event, answers)" />

                <div class="rules">
                    <p>Por último y a título informativo sepa que existen una serie de normas y obligaciones legales
                        básicas:</p>
                    <ul>
                        <li>Vacunación / Identificación / Desparasitación</li>
                        <li>Con algunas razas, tener licencia municipal para la tenencia e inscribirlo en el
                            Registro Municipal de animales potencialmente peligrosos.</li>
                        <li>Tratarlos humanitariamente.</li>
                        <li>Disponer de un espacio apropiado, cómodo y cerrado sin opción de que el animal se pueda
                            escapar o se haga daño.</li>
                        <li>Mantenerlos en buenas condiciones higiénico-sanitarias.</li>
                        <li>Proporcionarles alimentación y agua en consonancia al tipo de animal.</li>
                        <li>Responsabilizarse de los daños que ocasionen.</li>
                    </ul>
                    <p>¿Está de acuerdo usted y puede cumplir con dichas obligaciones?</p>
                    <label class="checkbox"><input type="checkbox" value="checkbox"> Estoy de acuerdo</label>
                </div>
            </div>
            <button class="btn-ver-animales">Iniciar búsqueda</button>
        </div>
    </section>
</template>


<style>
section {
    background-color: var(--light-grey-color);
}

img {
    width: 7rem;
    margin-top: 2rem;
    margin-left: 3rem;
}

.form-user-container {
    width: 75vw;
    display: flex;
    flex-direction: column;
    margin: 3.5rem auto;
    font-family: var(--text-font);
    color: var(--black);
    text-align: center;
}

h1 {
    font-family: var(--text-font);
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 2.4rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 2rem;

}

p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;

}

.question {
    margin-bottom: 1rem;

}

.rules {
    margin-top: 3rem;
}

.rules p,
ul,
.checkbox {
    font-family: var(--text-font);
    list-style: none;
    font-size: 1rem;
    line-height: 1.2rem;
    margin-top: 1rem;
    text-align: left;
}

button {
    background-color: var(--orange);
    padding: 0.8rem 2rem;
    border-style: none;
    border-radius: 2rem;
    font-family: var(--text-font);
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.7s ease;
    display: flex;
    margin-top: 3rem;
    margin-bottom: 6rem;
}

button:hover {
    background-color: #cc9320;
    cursor: pointer;
}
</style>

/* img {
    width: 7rem;
    margin-left: 7rem;
} */