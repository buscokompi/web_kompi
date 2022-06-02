<template>
    <TheHeader />
    <section>
        <main>
            <h1>Ficha animal</h1>
            <p>Completa el formulario y presiona el botón ‘Guardar’ para crear y publicar la ficha de tu animal.
                Puedes
                editarla en cualquier momento.</p>
        </main>
        <BaseForm @click="postDataAnimal()" text="Guardar" />
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
        async postDataAnimal(userEmail) {
            const docRef = doc(this.fs, "userform", userEmail);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.templateparams.question1 = docSnap.data().answer1;
                this.templateparams.question2 = docSnap.data().answer2;
                this.templateparams.question3 = docSnap.data().answer3;
                this.templateparams.question4 = docSnap.data().answer4;
                this.templateparams.question5 = docSnap.data().answer5;
                this.templateparams.question6 = docSnap.data().answer6;
                this.templateparams.question7 = docSnap.data().answer7;
                this.templateparams.question8 = docSnap.data().answer8;
                this.templateparams.question9 = docSnap.data().answer9;
                this.templateparams.question10 = docSnap.data().answer10;
                this.templateparams.question11 = docSnap.data().answer11;
                this.templateparams.question12 = docSnap.data().answer12;
                this.templateparams.question13 = docSnap.data().answer13;
                this.templateparams.question14 = docSnap.data().answer14;
                this.templateparams.question15 = docSnap.data().answer15;

                this.$swal({
                    title: "¡Gracias!",
                    text: "La ficha del animal ha sido creada correctamente.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } else {
                this.$swal("Lo sentimos", "Ha habido algún error. Vuelva a intentarlo más tarde", "error");
            }
        }
    }
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
