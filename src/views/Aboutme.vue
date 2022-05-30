<template>
    <TheHeader />
    <div class="container-all">
        <div class="main">
            <div class="container">
                <div class="header">
                    <h1> Sobre nosotros</h1>
                </div>
                <h3>¿QUÉ HACEMOS?</h3>
                <h2>Servicios</h2>
                <p>Esta web ha sido creada con la finalidad de ...</p>
            </div>

            <div class="gridcontainer">
                <div class="box order1">
                    <div class="text">
                        <h3>Adopción</h3>
                        <p>No compres, adopta. Ese es nuestro lema y nunca nos cansaremos de repetirlo. Miles de
                            animales
                            son abandonados cada año en España.</p>
                    </div>

                </div>
                <div class="box order2">
                    <div class="text">
                        <img src="../assets/images/Sobrenosotros.png" alt="">
                    </div>
                </div>

                <div class="box order3">
                    <div class="text">
                        <h3>Amor</h3>
                        <p>Nuestro amor por los animales es lo que mueve este proyecto. Queremos ayudar a los animales
                            abandonados a encontrar una familia.</p>
                    </div>
                </div>
                <div class="box order4">
                    <div class="text">
                        <img src="../assets/images/Sobrenosotros.png" alt="">
                    </div>
                </div>

            </div>
        </div>

        <div class="containerteam">
            <h1>EL EQUIPO</h1>
            <div class="parent">

                <div class="card">
                    <img class="foto" src="../assets/images/foto_atte.png" alt="foto Atteneri">
                    <div class="text-card">
                        <p class="textabout">Atteneri González Mendoza </p>
                        <a href="https://www.linkedin.com/in/atteneri-gonzalez-mendoza/" target="_blank"> <img
                                class="icon" src="../assets/icons/linkedin.svg" alt="icono linkedin"></a>

                        <a href="https://github.com/AtteneriG" target="_blank"> <img class="icon"
                                src="../assets/icons/github.svg" alt="icono github"></a>
                    </div>
                </div>
                <div class="card"> <img class="foto" src="../assets/images/foto_kevin.jpg" alt="foto Juan">
                    <div class="text-card">
                        <p class="textabout">Kevin Jerónimo Martín</p>
                        <a href="https://www.linkedin.com/in/kevin-jer%C3%B3nimo-mart%C3%ADn-449594231/"
                            target="_blank">
                            <img class="icon" src="../assets/icons/linkedin.svg" alt="icono linkedin"></a>

                        <a href="https://github.com/kevichu4" target="_blank"> <img class="icon"
                                src="../assets/icons/github.svg" alt="icono github"></a>
                    </div>
                </div>
                <div class="card"><img class="foto" src="../assets/images/foto_juan.jpg" alt="foto Juan">
                    <div class="text-card">
                        <p class="textabout">Alexis Plettener Nguyen</p>
                        <a href="https://github.com/alexxispn" target="_blank"> <img class="icon"
                                src="../assets/icons/linkedin.svg" alt="icono linkedin"></a>

                        <a href="https://github.com/alexxispn" target="_blank"> <img class="icon"
                                src="../assets/icons/github.svg" alt="icono github"></a>
                    </div>
                </div>
                <div class="card"><img class="foto" src="../assets/images/foto_antonio.jpg" alt="foto Juan">
                    <div class="text-card">
                        <p class="textabout">Antonio Bogallo Fernandez </p>
                        <a href="https://www.linkedin.com/in/antonio-bogallo/" target="_blank"> <img class="icon"
                                src="../assets/icons/linkedin.svg" alt="icono linkedin"></a>

                        <a href="https://github.com/AntonioBogallo" target="_blank"> <img class="icon"
                                src="../assets/icons/github.svg" alt="icono github"></a>
                    </div>
                </div>
                <div class="card"><img class="foto" src="../assets/images/foto_juan.jpg" alt="foto Juan">
                    <div class="text-card">
                        <p class="textabout">Juan Gabriel Rivero Martel</p>
                        <a href="https://www.linkedin.com/in/atteneri-gonzalez-mendoza/" target="_blank"> <img
                                class="icon" src="../assets/icons/linkedin.svg" alt="icono linkedin"></a>

                        <a href="https://github.com/JuanGabrielRivero" target="_blank"> <img class="icon"
                                src="../assets/icons/github.svg" alt="icono github"></a>
                    </div>
                </div>
                <div class="card"><img class="foto" src="../assets/images/foto_josefer.jpg" alt="foto Juan">
                    <div class="text-card">
                        <p class="textabout">Jose Fernando Álvarez Romero</p>
                        <a href="https://www.linkedin.com/in/jose-fernando-alvarez/" target="_blank"> <img class="icon"
                                src="../assets/icons/linkedin.svg" alt="icono linkedin"></a>

                        <a href="https://github.com/JoseFerAlvarez" target="_blank"> <img class="icon"
                                src="../assets/icons/github.svg" alt="icono github"></a>
                    </div>
                </div>



            </div>
        </div>

        <TheFooter />
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
.containerteam {
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}

.parent {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(1, 30rem);
    grid-template-rows: repeat(2, 1fr);

}

.card {
    display: flex;
    width: 15rem;
    height: 20rem;
    margin-bottom: 3rem;
    margin-top: 6rem;
    background: linear-gradient(0deg, rgba(34, 80, 195, 1) 0%, rgba(63, 253, 45, 1) 100%);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 2s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    border-radius: 5%;

}

.text-card {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

}

.textabout {
    width: 3rem;
}

.icon {
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
}

.card:hover {
    width: 17rem;
    height: 21rem;
    box-shadow: 0px 20px 20px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

}

/* .foto {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-size: cover;
} */
.foto {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-size: cover;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
}

.foto:hover {
    height: 12rem;
    width: 12rem;

}

.container-all {
    width: 100%
}

.main {
    display: flex;
    flex-direction: column;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/images//imgSleapingCat.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    margin-top: -2.3rem;
    height: 45vh;

}

h1 {
    padding-top: 3rem;
    text-align: center;
}

h3 {
    margin-top: 3rem;
    font-size: x-large;
    color: var(--black);
}

h2 {
    margin-top: 2rem;
}

p {
    width: 19rem;
    margin: 0.5rem;
}

.main {
    padding: 120px 0 40px 0;
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: var(--lightgrey);
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



@media screen and (min-width: 767px) {
    .box p {
        font-size: large;
        width: 90%;
    }

    .box h3 {
        font-size: 40px;
    }

    .parent {
        display: grid;
        grid-template-columns: repeat(2, 23rem);
        grid-template-rows: repeat(2, 1fr);

    }



}

@media screen and (min-width: 1070px) {

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
        grid-template-columns: repeat(3, 33rem);
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

@media screen and (min-width: 1550px) {
    .gridcontainer {
        width: 70%;
        background-color: var(--orange);
        margin: 5rem 15rem;
        display: grid;
        grid-template-columns: repeat(2, 35rem);
        grid-template-rows: repeat(2, 26rem);

    }

    img {
        margin: 0px 0%;
        margin-bottom: 1rem;
        width: 80%;
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

@media screen and (min-width: 2300px) {
    .gridcontainer {
        width: 65%;
        background-color: var(--orange);
        margin: 5rem 15rem;
        display: grid;
        grid-template-columns: repeat(2, 52rem);
        grid-template-rows: repeat(2, 30rem);

    }

    img {
        text-align: center;
        width: 80%;
        height: 80%;
    }

    .box {
        margin: 5%;
    }

    .box h3 {
        font-size: 50px;
    }

    .box p {
        font-size: large;
        width: 90%;
    }

}
</style>
