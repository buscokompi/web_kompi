<template>
    <TheHeader />
    <section>
        <main>
            <h1>Ficha animal</h1>
            <p>Completa el formulario y presiona el botón ‘Guardar’ para crear y publicar la ficha de tu animal.
                Puedes
                editarla en cualquier momento.</p>
        </main>
        <BaseForm />
    </section>
    <TheFooter />
</template>
<script>
import BaseForm from '../components/BaseForm.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import { getAuth } from 'firebase/auth';
export default {
    name: "FormCard",
    components: {
        BaseForm,
        TheHeader,
        TheFooter
    },
    mounted() {
        this.checkUser();
    },
    methods: {
        //Bloquea el acceso y redirige a iniciar sesión si el usuario no está logueado
        checkUser() {
            const auth = getAuth();

            auth.onAuthStateChanged((user) => {
                if (user) {
                    this.userEmail = user.email;

                } else {
                    this.$router.push("/Login");
                }
            });
        },
    }
}


</script>
<style scoped>
main {
    margin: 6rem 1rem 1rem 0;
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
    margin-top: 4rem;
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
