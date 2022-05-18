<template>
    <div class="card-extra">
        <img src="./assets/icons/icono_logo_blanco.svg" alt="Kompi Logo" width="88" height="88">
        <p><span>+315 mascotas</span></p>
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 0.5rem rgb(146 146 146 / 50%);
}

.card-extra img {
    width: 5.5rem;
    margin-top: 1.8rem;
}

.card-extra p {
    color: var(--white);
    font-size: 1rem;
    text-align: center;
    line-height: 0rem;
}

.card-extra p span {
    font-weight: 700;
}

.card-extra .footer {
    position: relative;
    bottom: 0;
    height: 27%;
    width: 100%;
    border-top: 0.1rem solid var(--white);
    display: flex;
    justify-content: center;
    align-content: center;
}

.card-extra .button {
    align-self: center;
}

/* @media screen and (min-width: 1300px) {
    .card-extra {
        display: flex;
    }
} */
</style>
