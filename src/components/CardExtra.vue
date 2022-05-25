<template>
    <div class="card-extra">
        <img src="../assets/icons/icono_logo_blanco.svg" alt="Kompi Logo" width="88" height="88">
        <h3>+315 mascotas</h3>>
        <p>disponibles en kompi</p>
        <div class="footer">
            <BaseButton url="../filter-animals.html" text="Ver más"/>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    components: {BaseButton }

}
</script>

<style scoped>
.card-extra {
    width: 16rem;
    height: 22rem;
    background-color: var(--green);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(18, 1fr);
    align-items: center;
    justify-items: center;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 0 0.5rem rgb(146 146 146 / 50%);
}

img {
    grid-area: 4 / 1 / 8 / 2;
    width: 5.5rem;
}

h3 {
    color: var(--white);
    font-size: 1rem;
    grid-area: 9 / 1 / 10 / 2;
    font-weight: 700;
        line-height: 0rem;

}
p {
    grid-area: 10 / 1 / 11 / 2;
    color: var(--white);
    font-size: 1rem;
    line-height: 0rem;
}


.card-extra .footer {
    grid-area: 12 / 1 / 19 / 2;
    height: 100%;
    width: 100%;
    border-top: 0.1rem solid var(--white);
    display: flex;
    justify-content: center;
    align-content: center;
}

.card-extra .button {
    align-self: center;
}

@media screen and (min-width: 767px) {
}
</style>
