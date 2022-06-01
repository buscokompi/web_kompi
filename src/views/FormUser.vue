<template>
    <section>
        <RouterLink to="/">
            <img src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
        </RouterLink>
        <div class="form-user-container">
            <h1>¡Encuentra a <br> tu mascota ideal!</h1>
            <p class="subtitle">Para ello, cuéntanos <br> un poco más sobre ti</p>
            <div class="questions">
                <!--<SelectForm v-for="answers in answersForm" :key="answers" :label1="answers.text1"
                    :formOptions="answers.options" v-model="questions[answers]" @option:selected="onChange" />-->

                <div v-for="(answer, index) in answers" :key="answer">
                    <p>{{ answers[index].text1 }}
                        <SelectOptions :options="answers[index].options" v-model="questions[index]"
                            @option:selected="onChange(questions[index])" />
                    </p>
                </div>

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
                    <p class="question-checkbox">¿Está de acuerdo usted y puede cumplir con dichas obligaciones?</p>
                    <label class="checkbox"><input ref="checkbox" type="checkbox" value="checkbox"> Estoy de
                        acuerdo</label>
                </div>
            </div>
            <BaseButton class="button" ref="basebutton" url="" text="Iniciar búsqueda" @click="changeView" />
        </div>
    </section>
</template>

<script>
import SelectForm from '../components/SelectForm.vue';
import SelectOptions from '../components/SelectOptions.vue';
import BaseButton from '../components/BaseButton.vue';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { answersForm } from "../js/options.js";

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
    name: 'FormUser',
    components: {
        SelectForm,
        BaseButton,
        SelectOptions
    },
    data() {
        return {
            firebaseapp: "",
            fs: "",
            auth: "",
            userEmail: "",

            answers: answersForm,

            questions: ["selecciona una opción", "selecciona una opción", "selecciona una opción", "selecciona una opción", "selecciona una opción",
                "selecciona una opción", "selecciona una opción", "selecciona una opción", "selecciona una opción", "selecciona una opción",
                "selecciona una opción", "selecciona una opción", "selecciona una opción", "selecciona una opción", "selecciona una opción"]

        }
    },
    mounted() {
        this.firebaseapp = initializeApp(firebaseConfig);
        this.fs = getFirestore();
        this.checkUser();
    },

    methods: {
        async addAnswerDataBase() {
            await setDoc(doc(this.fs, "userform", this.userEmail), {
                answer1: this.questions[0],
                answer2: this.questions[1],
                answer3: this.questions[2],
                answer4: this.questions[3],
                answer5: this.questions[4],
                answer6: this.questions[5],
                answer7: this.questions[6],
                answer8: this.questions[7],
                answer9: this.questions[8],
                answer10: this.questions[9],
                answer11: this.questions[10],
                answer12: this.questions[11],
                answer13: this.questions[12],
                answer14: this.questions[13],
                answer15: this.questions[14],
            })
        },
        onChange() {
            console.log(this.userEmail);
        },
        checkUser() {
            const auth = getAuth();

            auth.onAuthStateChanged((user) => {
                if (user) {
                    this.userEmail = user.email;
                    console.log(this.userEmail);
                } else {
                    this.$router.push("/Signin");
                }
            });
        },
        changeView() {
            if (this.$refs.checkbox.checked) {
                this.addAnswerDataBase();
                this.$swal({
                    title: "¡Gracias!",
                    text: "Los datos han sido guardados correctamente.",
                    icon: "success",
                    timer: 1800,
                    showConfirmButton: false,

                })
                this.$router.push("/FilterAnimals");
            } else {
                this.$swal("Error", "Selecciona la casilla 'Estoy de acuerdo' para poder continuar", "error");
            }
        }

    },
}

</script>

<style lang="scss" scoped>
section {
    background-color: var(--light-grey-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 7rem;
    margin-top: 3rem;

}

.form-user-container {
    width: 75vw;
    margin: 2.5rem auto;
    font-family: var(--text-font);
    color: var(--black);
    text-align: center;
}

.questions {
    display: flex;
    flex-direction: column;
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
    line-height: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.5rem;

}

.rules {
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-top: 3rem;
    margin-left: 1rem;
}

.rules p,
ul {
    list-style: none;
    font-size: 0.9rem;
    line-height: 1.5rem;
}

ul {
    padding: 0;
    line-height: 1.3rem;
}

li {
    margin-bottom: 0.8rem;
}

.question-checkbox {
    font-weight: 600;
}

.checkbox {
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-self: start;

}

.button {
    width: fit-content;
    margin: 4rem 0 5rem;
}

@media screen and (min-width: 767px) {
    .questions {
        display: flex;

        align-items: center;

    }
}

@media screen and (min-width: 1170px) {

    img {
        width: 7rem;
        margin-left: 9.5rem;
    }

    section {
        align-items: flex-start;
    }

    .questions {
        display: flex;
        align-items: flex-start;

    }

    .form-user-container {
        text-align: left;
    }

    h1 {
        text-align: left;
        margin: 2rem 0 1rem;
    }

    .subtitle {
        margin-bottom: 2.5rem;
    }

    br {
        display: none;
    }

    p {
        flex-direction: row;
    }

    li {
        margin-bottom: 0.4rem;
    }

    .rules {
        max-width: 60rem;
        margin: 2rem 0;
    }

    .button {
        margin: 2rem 0 4rem;

    }

}

@media screen and (min-width: 1300px) {
    .form-user-container {
        margin-left: 20rem;
    }
}
</style>

