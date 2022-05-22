<script>
import SelectForm from '../components/SelectForm.vue';
export default {
    name: 'FormUser',
    components: { SelectForm },
    setup() {
        const answersForm = [
            {
                text1: "Me gustaría adoptar a",
                text2: "",
                options: ['no tengo preferencia', 'un perro', 'un gato', 'un ave', 'un roedor', 'un reptil']
            },
            {
                text1: "Me gustaría adoptar a",
                text2: "",
                options: ['no tengo preferencia', 'una hembra', 'un macho']
            },
            {
                text1: "Mi mascota ideal es",
                text2: "",
                options: ['no tengo preferencia', 'cachorro', 'joven', 'adulta', 'anciana']
            },
            {
                text1: "Prefiero una mascota que sea",
                text2: "",
                options: ['no tengo preferencia', 'pequeña', 'mediana', 'grande', 'gigante']
            },
            {
                text1: "Me gustaría que el nivel de actividad de la mascota sea",
                text2: "",
                options: ['no tengo preferencia', 'muy activo', 'activo', 'poco activo']
            },
            {
                text1: "Mi vivienda es",
                text2: "",
                options: ['un piso', 'una casa', 'una casa con jardín']
            },
            {
                text1: "Mi mascota deberá estar/tener",
                text2: "",
                options: ['no tengo preferencia', 'adiestrada', 'sus vacunas al día', 'microchip', 'todas las anteriores']
            },
            {
                text1: "Estoy",
                text2: "a adoptar a una mascota con necesidades especiales",
                options: ['dispuesto/a', 'no dispuesto/a']
            },
            {
                text1: "",
                text2: "cuidador de un animal",
                options: ['Es la primera vez que soy', 'Actualmente soy', 'Anteriormente fui']
            },
            {
                text1: "Actualmente tengo",
                text2: "",
                options: ['ninguna mascota', 'un perro', 'un gato', 'un ave', 'un roedor', 'otro animal doméstico', 'varios de los mencionados anteriormente']
            },
            {
                text1: "Mi unidad familiar está compuesta por",
                text2: "",
                options: ['solo yo', 'mi pareja', 'mi pareja y mis hijos']
            },
            {
                text1: "Mis hijos son",
                text2: "",
                options: ['no tengo hijos', 'menores de 10', 'mayores de 10', 'menores y mayores']
            },
            {
                text1: "En mi casa",
                text2: "en el contrato de arrendamiento",
                options: ['no hay restricciones', 'hay restricciones']
            },
            {
                text1: "La mascota pasará",
                text2: "sola en casa",
                options: ['de 2 a 5 horas', 'de 5 a 8 horas', 'de 8 a 12 horas']
            },
            {
                text1: "Si me voy de vacaciones",
                text2: "",
                options: ['tengo en mi entorno a alguien que cuide del animal', 'no tengo a nadie que cuide del animal']
            }]

        return { answersForm }
    }
}


</script>

<template>
    <section>
        <div class="top-bar">
            <a href="./index.html">
                <img src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
            </a>
        </div>
        <div class="form-user-container">
            <div class="progress-bar"></div>
            <div class="form-box">
                <div class="title">
                    <h1>¡Encuentra a tu mascota ideal!</h1>
                    <h2>Para ello, cuéntanos un poco más sobre ti</h2>
                </div>
                <div class="questions">


                    <SelectForm v-for="answers in answersForm" :label1="answers.text1" :label2="answers.text2"
                        :formOptions="answers.options" />

                    <!-- <div class="rules">
                    //     <p>Por último y a título informativo sepa que existen una serie de normas y obligaciones legales
                    //         básicas:</p>
                    //     <ul>
                    //         <li>Vacunación / Identificación / Desparasitación</li>
                    //         <li>Con algunas razas, tener licencia municipal para la tenencia e inscribirlo en el
                    //             Registro Municipal de animales potencialmente peligrosos.</li>
                    //         <li>Tratarlos humanitariamente.</li>
                    //         <li>Disponer de un espacio apropiado, cómodo y cerrado sin opción de que el animal se pueda
                    //             escapar o se haga daño.</li>
                    //         <li>Mantenerlos en buenas condiciones higiénico-sanitarias.</li>
                    //         <li>Proporcionarles alimentación y agua en consonancia al tipo de animal.</li>
                    //         <li>Responsabilizarse de los daños que ocasionen.</li>
                    //     </ul>
                    //     <p>¿Está de acuerdo usted y puede cumplir con dichas obligaciones?</p>
                    //     <label class="checkbox"><input type="checkbox" value="checkbox"> Estoy de acuerdo</label> -->
                    <!-- </div> -->
                </div>
                <button class="btn-ver-animales">Iniciar búsqueda</button>
            </div>
        </div>
    </section>
</template>


<style>
section {
    margin: 0;
    box-sizing: border-box;
    background-color: var(--light-grey-color);
}

.top-bar {
    width: 100%;
    height: 5rem;
    background-color: var(--white-color);
    display: flex;
    align-items: center;
}

img {
    width: 7rem;
    margin-left: 7rem;
}

.form-user-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-box {
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5rem;
}

.question {
    font-size: 1rem;
    font-weight: 600;
    font-family: var(--text-font);
    color: var(--green);
    border: 0px;
    background-color: var(--lightgrey);
    border-radius: 1rem;
    margin: 0.2rem;
    padding: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
}

.question:focus {
    outline-color: var(--grey);
}

h1 {
    font-family: var(--text-font);
    font-size: 2rem;
    font-weight: 800;
    color: var(--black);
    text-align: left;
    margin: 0;
}

h2 {
    font-family: var(--text-font);
    font-size: 2rem;
    font-weight: 600;
    color: var(--black);
    text-align: left;
    margin-top: 0.2rem;
}

p {
    font-family: var(--text-font);
    font-size: 1rem;
    line-height: 2rem;
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
}

.checkbox {
    margin-bottom: 2 rem;
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