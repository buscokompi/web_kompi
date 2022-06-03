<template>
    <TheHeader />
    <section>
        <div class="img"></div>
        <div class="adopt">
            <p>ADOPCIÓN SEGURA A TRAVÉS DE KOMPI</p>
            <h1>Adopta a tu nueva mascota fácilmente</h1>
            <p>Kompi es una plataforma gratuita dedicada a la adopción de animales con cobertura total dentro del
                territorio español. Destinada a los amantes de los animales o aquellos que sueñan con tener un compañero
                de vida peludo, ponemos a su disposición un buscador capaz de filtrar por características físicas o
                preferencias sobre el animal que se desea adoptar. </p>

            <p>A diferencia de otras páginas de adopción, nosotros valoramos su privacidad. Por lo que la gestión de
                datos se tramitará de informa interna. Es el motivo por el que exigimos a nuestros usuarios que se
                registren previamente.</p>

            <p>Asegurarnos que e</p>
        </div>
        <div class="steps">

        </div>
        <h3>REQUISITOS MÍNIMOS PARA LA ADOPCIÓN EN KOMPI</h3>
        <div class="requirements">
            <p></p>
            <p></p>
            <p></p>
        </div>
        <BaseButton text="Adopta" url="/FilterAnimals" />
    </section>
    <TheFooter />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
    name: 'Adoptar',
    components: {
        TheHeader,
        BaseButton,
        TheFooter
    },
}
</script>

<style scoped>
.img {
    background-image: url("../assets/images//imgSleapingCat.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 45vh;
}

.adopt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    text-align: left;
    margin: 0 2rem;
}

h1 {
    font-family: var(--text-font);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;

}

p {
    font-size: 0.9rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

}
</style>
