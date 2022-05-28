<template>
    <TheHeader />
    <main class="home">
        <h1>Mi perfil</h1>
        <div class="sections">
            <RouterLink to="/NewAnimalForm/saludo">Sobre mí</RouterLink>
            <RouterLink to="/NewAnimalForm/otroSaludo">Perfil adoptante</RouterLink>
            <RouterLink to="/NewAnimalForm/formularioEjemplo">Perfil animal</RouterLink>
            <!-- <RouterLink to="/">Favoritos</RouterLink> -->
            <RouterLink to="/">Ajustes</RouterLink>
        </div>

        <div class="profile-content">
            <RouterView />
        </div>
    </main>
    <TheFooter />
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
    name: "NewAnimalForm",
    components: { TheHeader, TheFooter }
}
</script>

<style scoped>
.home {
    width: 100vw;
    background: var(--lightgrey);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 30vh 10vh; */
    border-radius: 1rem;
}

h1 {
    margin-top: 8rem;
}

.sections {
    width: 58vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
    row-gap: 1rem;
    padding: 0.5rem 0;
    border-bottom: 0.1rem solid var(--black);
}

.sections .hr {
    width: 100%;
    background-color: var(--grey);
}

.sections .selected {
    background-color: var(--orange);
    height: 0.5rem;
    border-radius: 5px;
    border-color: var(--orange);
}

.sections a {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
}

.sections a:hover {
    cursor: pointer;
}

.profile-content {
    width: 52vw;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {}
</style>
