<template>
    <TheHeader />
    <div class="body">
        <main>
            <div>
                <h1>Nuestra misión</h1>
                <p>Kompi es una plataforma gratuita dedicada a la adopción de animales con cobertura total dentro del
                    territorio español. Destinada a los amantes de los animales o aquellos que sueñan con tener un
                    compañero
                    de vida peludo, ponemos a su disposición un buscador capaz de filtrar por características físicas o
                    preferencias sobre el animal que se desea adoptar.

                    A diferencia de otras páginas de adopción, nosotros valoramos su privacidad. Por lo que la gestión
                    de
                    datos se tramitará de informa interna. Es el motivo por el que exigimos a nuestros usuarios que se
                    registren previamente.</p>
            </div>
        </main>

        <section>
            <div class="title">
                <h2>Nuestro equipo</h2>
                <p>Proyecto de Desarrollo Frontend por alumnos de la EOI</p>
            </div>
            <div class="card">
                <img class="foto" src="../assets/images/foto_atte.png" alt="foto Juan">
                <div class="text-card">
                    <p class="name">Atteneri</p>
                    <p class="name">González Mendoza</p>
                    <div class="rrhh">
                        <a href="https://www.linkedin.com/in/atteneri-gonzalez-mendoza/" target="_blank"> <img
                                class="icon" src="../assets/icons/linkedin-svgrepo-com.svg" alt="icono linkedin"></a>
                        <a href="https://github.com/AtteneriG" target="_blank"> <img class="icon"
                                src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                    </div>
                </div>
            </div>

            <div class="card">
                <img class="foto" src="../assets/images/foto_alexis.jpg" alt="foto Juan">
                <div class="text-card">
                    <p class="name">Alexis</p>
                    <p class="name">Plettener Nguyen</p>
                    <div class="rrhh">
                        <a href="https://www.linkedin.com/in/alexis-plettener-nguyen/" target="_blank"> <img
                                class="icon" src="../assets/icons/linkedin-svgrepo-com.svg" alt="icono linkedin"></a>
                        <a href="https://github.com/alexxispn" target="_blank"> <img class="icon"
                                src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                    </div>
                </div>
            </div>

            <div class="card">
                <img class="foto" src="../assets/images/foto_jose.png" alt="foto Juan">
                <div class="text-card">
                    <p class="name">Jose Fernando</p>
                    <p class="name">Álvarez Romero</p>
                    <div class="rrhh">
                        <a href="https://www.linkedin.com/in/jose-fernando-alvarez/" target="_blank"> <img class="icon"
                                src="../assets/icons/linkedin-svgrepo-com.svg" alt="icono linkedin"></a>
                        <a href="https://github.com/JoseFerAlvarez" target="_blank"> <img class="icon"
                                src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                    </div>
                </div>
            </div>

            <div class="card">
                <img class="foto" src="../assets/images/foto_juan.jpg" alt="foto Juan">
                <div class="text-card">
                    <p class="name">Juan Gabriel</p>
                    <p class="name">Rivero Martel</p>
                    <div class="rrhh">
                        <a href="https://www.linkedin.com/in/juan-gabriel-rivero-martel-7ab0a6ba/" target="_blank">
                            <img class="icon" src="../assets/icons/linkedin-svgrepo-com.svg" alt="icono linkedin"></a>
                        <a href="https://github.com/JuanGabrielRivero" target="_blank"> <img class="icon"
                                src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                    </div>
                </div>
            </div>

            <div class="card">
                <img class="foto" src="../assets/images/foto_kevin.jpg" alt="foto Juan">
                <div class="text-card">
                    <p class="name">Kevin</p>
                    <p class="name">Jerónimo Martín</p>
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
                    <p class="name">Antonio</p>
                    <p class="name">Bogallo Fernandez</p>
                    <div class="rrhh">
                        <a href="https://www.linkedin.com/in/antonio-bogallo/" target="_blank"> <img class="icon"
                                src="../assets/icons/linkedin-svgrepo-com.svg" alt="icono linkedin"></a>
                        <a href="https://github.com/AntonioBogallo" target="_blank"> <img class="icon"
                                src="../assets/icons/github-svgrepo-com.svg" alt="icono github"></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <TheFooter />
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
main {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--orange);
    width: 100vw;
    height: 100vh;
}

main div {
    width: 80%;
    margin-top: -15rem;
}

main p {
    color: var(--black);
    margin-bottom: 5rem;
    width: 80%;
}

h1 {
    font-family: var(--text-font);
    color: var(--black);
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.6rem;
    text-align: center;
    margin: 3rem 0 0.5rem;
}

p {
    font-family: var(--text-font);

}


section {
    background: var(--lightgrey);
    min-height: 65vh;
    color: var(--black);
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-bottom: 3.5rem;
}



.card {
    display: flex;
    flex-direction: column;
    width: 10rem;
    height: 15rem;
    background: linear-gradient(0deg, rgba(255, 247, 228, 1) 0%, rgba(245, 245, 245, 1) 48%, rgba(255, 255, 255, 1) 100%);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    box-shadow: 0.2rem 0.2rem 7px;
    margin-bottom: 3rem;
}

.card:last-child {
    margin-bottom: 7rem;
}

.foto {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    text-align: center;
    font-family: var(--text-font);
    font-weight: 500;
    font-size: 0.9rem;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 1rem;
    transition: 0.7s;
    filter: brightness(0) saturate(100%) invert(16%) sepia(1%) saturate(5616%) hue-rotate(341deg) brightness(99%) contrast(77%);
}

.icon:hover {
    transform: scale(1.2);
}

.body {
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
    width: 70%;
    height: 70%;
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
    gap: 1.8rem;
}


/*Card alternativa*/



@media screen and (min-width: 767px) {
    main {
        justify-content: center;
        height: 55vh;
    }



    main p {
        margin-bottom: 0;
        font-size: 1rem;

    }

    main div {
        width: 80%;
        margin-top: 7rem;
    }
}

@media screen and (min-width: 1170px) {
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 0.3fr repeat(2, 1fr);
        justify-items: center;
        padding-bottom: 5rem;
    }

    .title {
        grid-area: 1 / 1 / 2 / 4;
    }

    .card:last-child {
        margin-bottom: 3rem;
    }
}


@media screen and (min-width: 1300px) {

    main p {
        width: 65%;
    }

    .card:nth-child(2) {
        justify-self: flex-end;
    }

    .card:nth-child(4) {
        justify-self: baseline;
    }

    .card:nth-child(5) {
        justify-self: flex-end;
    }

    .card:nth-child(7) {
        justify-self: baseline;
    }
}

@media screen and (min-width: 1440px) {
    section {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 0.3fr 1fr;
    }

    .title {
        grid-area: 1 / 1 / 2 / 9;
    }

    .card:nth-child(1) {
        justify-self: center;
        grid-area: 1 / 1 / 2 / 9;
    }

    .card:nth-child(2) {
        justify-self: center;
        grid-area: 2 / 2 / 3 / 3;
    }

    .card:nth-child(3) {
        justify-self: center;
        grid-area: 2 / 3 / 3 / 4;
    }

    .card:nth-child(4) {
        justify-self: center;
        grid-area: 2 / 4 / 3 / 5;
    }

    .card:nth-child(5) {
        justify-self: center;
        grid-area: 2 / 5 / 3 / 6;

    }

    .card:nth-child(6) {
        justify-self: center;
        grid-area: 2 / 6 / 3 / 7;
    }

    .card:nth-child(7) {
        justify-self: center;
        grid-area: 2 / 7 / 3 / 8;

    }
}
</style>
