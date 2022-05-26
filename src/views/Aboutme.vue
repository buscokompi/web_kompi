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
                    <h3>Series

                    </h3>
                    <p>fgdfgfggfdgfdgfggdfgdfgdf1</p>
                </div>
                <div class="box order2">
                    <img src="../assets/images/Sobrenosotros.png" alt="">
                </div>

                <div class="box order3">
                    <h3>Series2</h3>
                    <p>fgdfgfggfdgfdgfggdfgdfgdf2</p>
                </div>
                <div class="box order4">
                    <img src="../assets/images/Sobrenosotros.png" alt="">
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
.container-all {
    width: 100%
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
    background-image: url("../assets/images/Sobrenosotros.png");
    background-size: cover;
    background-position: center;
    width: 100vw;
    margin-top: -37px;
    height: 30vh;

}


h3 {
    margin-top: 5rem;
    font-size: x-large;
    color: var(--black);
}

h2 {
    margin-top: 2rem;
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
    width: 90%;
    height: 90%;
}


@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {
    img {
        margin: 0px 5%;
        width: 400px;
        height: 300px;
    }

    .gridcontainer {
        background-color: grey;
        margin: 5rem 15rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .gridcontainer div {
        margin-bottom: 4rem;
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

    .box {
        margin: 5rem 10rem;
        width: 10rem;
        height: 20rem;
    }

    @media screen and (min-width: 1300px) {}
}
</style>
