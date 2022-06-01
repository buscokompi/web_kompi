<template>
    <TheHeader />
    <div class="containerall">
        <div class="main">
            <div class="header">
                <h1>GUÍA DE ADOPCIÓN DE MASCOTA</h1>
                <P>Como adptar a tu nuevo Kompi</P>
            </div>

            <h2>¿COMO ADOPTAR A TU KOMPI?</h2>
            <p> Si tienes duda de como Adoptar a un Kompi, aquí te lo explicaremos paso a paso</p>

        </div>

        <div class="container">
            <h2>Registrate en la página</h2>
            <p>Primero tendras que registrarte en la pagina para crear una cuenta la que usaras tanto para ver los Kompi
                que estan en adopción como para adoptar a tu proximo Kompi, para ello tienes que ir a <a
                    href="../views/Signin.vue">Registrate</a> </p>

            <h2>Rellena tus Datos</h2>
            <p>Después de haberte registrado tendrás que rellenar tus datos personales (
                Nombre, Apellido,Localidad,etc.) para crear tu ficha de usuario que sera muy importante para tu perfil
                de la pagína para adoptar, aquí te dejamos el formulario que hay quye rellenar.
            </p>

            <h2>Formulario de elección de tu Kompi</h2>
            <p>Ya creado tanto tu cuenta como tu perfil,ahora tendra que rellenar un formulario que agilizara su
                elección de Kompi, donde podra especificar el prototipo de Kompi que deseas para hacer una busqueda
                concreta de él. </p>


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
    margin-top: 3rem;
    margin: 0px 3rem;
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
    margin-top: 1rem;
}
</style>