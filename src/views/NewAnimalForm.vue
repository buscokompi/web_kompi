<template>
    <main class="home">
        <h1>Mi perfil</h1>
        <div class="sections">
            <RouterLink to="/TemplatePage">Sobre mí</RouterLink>
            <RouterLink to="/">Perfil adoptante</RouterLink>
            <RouterLink to="/">Perfil animal</RouterLink>
            <RouterLink to="/">Favoritos</RouterLink>
            <RouterLink to="/">Ajustes</RouterLink>
            <hr class="hr">
            <hr class="hr">
            <hr class="hr">
            <hr class="hr">
            <hr class="hr">
        </div>

        <div class="profile-content">
            <RouterView />
        </div>
    </main>
</template>

<script>
export default {
    name: "NewAnimalForm"

}
</script>

<style scoped>
.home {
    width: 68vw;
    height: 2000px;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 30vh 10vh; */
    border-radius: 1rem;
}

.sections {
    width: 58vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
    row-gap: 1rem;
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
</style>