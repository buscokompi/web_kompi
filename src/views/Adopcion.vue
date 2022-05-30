<template>
    <TheHeader />
    <div class="containerall">
        <div class="main">
            <div class="header">
                <h1>GUÍA DE ADOPCIÓN DE MASCOTA</h1>
            </div>

            <h2>¿COMO DAR EN ADOPCIÓN A TU KOMPI?</h2>
            <p> Si tienes duda de como poner en adopción a tu Kompi, aquí te lo explicaremos paso a paso</p>

        </div>

        <div class="container">
            <h2>Registrate en la página</h2>
            <p>Primero tendras que registrarte en la página para crear una cuenta la que usaras tanto para ver los Kompi
                que estan en adopción como para adoptar a tu proximo Kompi, para ello tienes que ir a <a
                    @click="changeView">Registrate</a> </p>

            <h2>Rellena tus Datos y los de tu mascota</h2>
            <p>Después de haberte registrado tendrás que rellenar tus datos personales y los datos de la mascota,
                para crear tu ficha de usuario que será muy importante para tu perfil
                de la página para adoptar, aquí te dejamos el formulario que hay que rellenar.
            </p>

            <h2>Publica</h2>
            <p>Ya creado tanto tu cuenta como tu perfil, como los datos de tu Kompi, ahora solo falta hacerlo público
            </p>

            <h2>Espera una respuesta</h2>
            <p> Una vez hayas publicado a tu kompi en nuestra página web, lo siguiente será esperar a que alguien que
                quiera adoptar a tu mascota, se ponga en contacto contigo. A partir de ahí os comunicaréis vía e-mail o
                telefónicamente </p>


        </div>
    </div>

    <TheFooter />

</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"
export default {
    name: "GuiaAdoptar",
    components: {
        TheHeader,
        TheFooter
    },
    methods: {
        changeView() {
            this.$router.push("/Signin")
        }
    }
}
</script>

<style scoped>
.containerall {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/images//imgSleapingCat.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 45vh;


}

.header h1 {
    margin-top: 5rem;
    margin-left: 3rem;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;


}




.main h2 {
    font-size: x-large;
    margin-top: 2rem !important;
    margin-bottom: 2rem;
}

.main p {
    margin: 0px 3rem;
}


.container {
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin: 3rem 0px;
}

.container h2 {
    font-size: x-large;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
}

a {
    color: blue;
    cursor: pointer;
}
</style>
