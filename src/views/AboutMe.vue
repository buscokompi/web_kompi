<template>
    <TheHeader />
    <div class="container-all">
        <div class="main">
            <div class="container">
                <div class="header">
                    <h1>Sobre nosotros</h1>
                    <p>Última Actualización 04/06/2022</p>
                </div>
                <div class="mision">
                    <h2>Nuestra misión</h2>
                    <p>Esta web ha sido creada con la finalidad de ...</p>

                    <p>No compres, adopta. Ese es nuestro lema y nunca nos cansaremos de repetirlo. Miles de
                        animales
                        son abandonados cada año en España.</p>
                </div>
            </div>

            <div class="containerteam">
                <h2>Nuestro equipo</h2>
                <div class="parent">


                    <div class="card">
                        <img class="foto" src="../assets/images/foto_atte.png" alt="foto Juan">
                        <div class="text-card">
                            <p class="textabout">Atteneri</p>
                            <p class="textabout">González Mendoza</p>
                            <div class="rrhh">
                                <a href="https://www.linkedin.com/in/atteneri-gonzalez-mendoza/" target="_blank"> <img
                                        class="icon" src="../assets/icons/linkedin-svgrepo-com.svg"
                                        alt="icono linkedin"></a>
                                <a href="https://github.com/AtteneriG" target="_blank"> <img class="icon"
                                        src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img class="foto" src="../assets/images/foto_alexis.jpg" alt="foto Juan">
                        <div class="text-card">
                            <p class="textabout">Alexis</p>
                            <p class="textabout">Plettener Nguyen</p>
                            <div class="rrhh">
                                <a href="https://www.linkedin.com/in/alexis-plettener-nguyen/" target="_blank"> <img
                                        class="icon" src="../assets/icons/linkedin-svgrepo-com.svg"
                                        alt="icono linkedin"></a>
                                <a href="https://github.com/alexxispn" target="_blank"> <img class="icon"
                                        src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img class="foto" src="../assets/images/foto_jose.png" alt="foto Juan">
                        <div class="text-card">
                            <p class="textabout">Jose Fernando</p>
                            <p class="textabout">Álvarez Romero</p>
                            <div class="rrhh">
                                <a href="https://www.linkedin.com/in/jose-fernando-alvarez/" target="_blank"> <img
                                        class="icon" src="../assets/icons/linkedin-svgrepo-com.svg"
                                        alt="icono linkedin"></a>
                                <a href="https://github.com/JoseFerAlvarez" target="_blank"> <img class="icon"
                                        src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img class="foto" src="../assets/images/foto_juan.jpg" alt="foto Juan">
                        <div class="text-card">
                            <p class="textabout">Juan Gabriel</p>
                            <p class="textabout">Rivero Martel</p>
                            <div class="rrhh">
                                <a href="https://www.linkedin.com/in/juan-gabriel-rivero-martel-7ab0a6ba/"
                                    target="_blank"> <img class="icon" src="../assets/icons/linkedin-svgrepo-com.svg"
                                        alt="icono linkedin"></a>
                                <a href="https://github.com/JuanGabrielRivero" target="_blank"> <img class="icon"
                                        src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img class="foto" src="../assets/images/foto_kevin.jpg" alt="foto Juan">
                        <div class="text-card">
                            <p class="textabout">Kevin</p>
                            <p class="textabout">Jerónimo Martín</p>
                            <div class="rrhh">
                                <a href="https://www.linkedin.com/in/kevin-jer%C3%B3nimo-mart%C3%ADn-449594231/"
                                    target="_blank"> <img class="icon" src="../assets/icons/linkedin-svgrepo-com.svg"
                                        alt="icono linkedin"></a>
                                <a href="https://github.com/kevichu4" target="_blank"> <img class="icon"
                                        src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img class="foto" src="../assets/images/foto_antonio.jpg" alt="foto Juan">
                        <div class="text-card">
                            <p class="textabout">Antonio</p>
                            <p class="textabout">Bogallo Fernandez</p>
                            <div class="rrhh">
                                <a href="https://www.linkedin.com/in/antonio-bogallo/" target="_blank"> <img
                                        class="icon" src="../assets/icons/linkedin-svgrepo-com.svg"
                                        alt="icono linkedin"></a>
                                <a href="https://github.com/AntonioBogallo" target="_blank"> <img class="icon"
                                        src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <TheFooter />
        </div>
    </div>

</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"
export default {
    name: "Aboutme",
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--orange);
    width: 100vw;
    height: 85vh;
}

h1 {
    font-family: var(--text-font);
    font-size: 1.6rem;
}

h2 {

    font-size: 1.6rem;
    text-align: center;
}

.mision {
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--white);

}

.parent {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(1, 30rem);
    grid-template-rows: repeat(2, 1fr);
}

.containerteam {
    background: var(--green);
}


.card {
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 23rem;
    background: rgb(255, 247, 228);
    background: linear-gradient(0deg, rgba(255, 247, 228, 1) 0%, rgba(245, 245, 245, 1) 48%, rgba(255, 255, 255, 1) 100%);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    box-shadow: 0.2rem 0.2rem 7px;
    margin-bottom: 3rem;
}

.textabout {
    text-align: center;
    font-family: var(--text-font);
    font-weight: 500;
    font-size: 1.1rem;
}

.icon {
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
}

.foto {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
    object-fit: cover;
}

.container-all {
    width: 100%
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    margin: 0px 5%;
    margin-bottom: 1rem;
    width: 90%;
    height: 90%;
}

.gridcontainer {
    width: 100%;
    background-color: var(--orange)
}

.text {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.rrhh {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.6rem;
}

.icon {
    margin-top: 2rem;
    width: 1.8rem;
}

/*Card alternativa*/



@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {

    .parent {
        display: grid;
        grid-template-columns: repeat(2, 30rem);
        grid-template-rows: repeat(2, 1fr);

    }
}


@media screen and (min-width: 1300px) {
    .gridcontainer {
        width: 80%;
        background-color: var(--orange);
        margin: 5rem 15rem;
        display: grid;
        grid-template-columns: repeat(2, 31rem);
        grid-template-rows: repeat(2, 30rem);
        justify-items: stretch;
        align-items: center;
        justify-content: center;

    }

    .parent {
        display: grid;
        grid-template-columns: repeat(3, 35rem);
        grid-template-rows: repeat(2, 1fr);

    }

    .box h3 {
        margin-top: 0rem;
    }


    .order1 {
        order: 1;
    }

    .order2 {
        order: 2;
    }

    .order3 {
        order: 4;
    }

    .order4 {
        order: 3;
    }

    img {
        margin: 0px 0%;
        margin-bottom: 1rem;
        width: 100%;
        height: 100%;
    }

    .text {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

}
</style>
