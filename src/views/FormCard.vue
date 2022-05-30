<template>
    <section>
        <main>
            <h1>Ficha animal</h1>
            <p>Completa el formulario y presiona el botón ‘Guardar’ para crear y publicar la ficha de tu animal.
                Puedes
                editarla en cualquier momento.</p>
        </main>
        <BaseForm />
    </section>
</template>
<script>
import BaseForm from '../components/BaseForm.vue';
export default {
    name: "FormCard",
    components: {
        BaseForm
    },
}
</script>
<style scoped>
main {
    margin: 6rem 1rem 1rem 2rem;
}

main p {
    width: 30rem;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    main {
        width: 40rem;
    }

    main p {
        width: 35rem;
    }
}

@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {
    main {
        width: 55rem;
    }
}
</style>
