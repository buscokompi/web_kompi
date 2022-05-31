<template>
    <TheHeader />
    <section>
        <div class="white">
            <main>
                <h1>Ficha animal</h1>
                <p>Completa el formulario y presiona el botón ‘Guardar’ para crear y publicar la ficha de tu animal.
                    Puedes
                    editarla en cualquier momento.</p>
            </main>
            <BaseForm />
        </div>
    </section>
    <TheFooter />
</template>
<script>
import BaseForm from '../components/BaseForm.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
    name: "FormCard",
    components: {
        BaseForm,
        TheHeader,
        TheFooter
    },
}
</script>
<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--lightgrey);
}

.white {
    margin: 2rem 0 0;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0 2rem;
    border-radius: 0.8rem;
}

main {
    margin: 0 1rem 2rem 2rem
}

main p {
    width: 90%;
}

h1 {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

p {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    color: var(--black);
    font-weight: 600;
}


@media screen and (min-width: 767px) {
    .white {
        margin: 8rem 0;
        padding: 5rem 3rem 2rem;
    }

    main {
        width: 40rem;
    }

    main p {
        width: 35rem;
    }
}

@media screen and (min-width: 1170px) {
    .white {
        padding: 5rem 7rem 5rem;
    }

    main {
        width: 42rem;
    }

}

@media screen and (min-width: 1300px) {
    main {
        width: 60rem;
        margin-bottom: 5rem;

    }
}
</style>
