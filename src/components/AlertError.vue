<template>
    <BaseButton url="" text="Enviar" @click="alertType()" />
    <BaseButton url="" text="Enviar" @click="alertForgotSuccess" />
    <BaseButton url="" text="Enviar" @click="alertSignin" />
    <BaseButton url="" text="Enviar" @click="alertNewuser" />
    <BaseButton url="" text="Enviar" @click="alertChanges" />
    <BaseButton url="" text="Enviar" @click="alertNewAnimal" />
    <BaseButton url="" text="Enviar" @click="alertChangePasswordError" />
    <BaseButton url="" text="Enviar" @click="alertChangePasswordSuccess" />
    <BaseButton url="" text="Enviar" @click="alertContactSuccess" />
    <BaseButton url="" text="Enviar" @click="alertContactLogin" />
    <BaseButton url="" text="Enviar" @click="alertContactFormUser" />

</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    components: { BaseButton },
    props: {
        type: String,
    },

    methods: {
        alertType(type) {
            switch (type) {
                case "Login":
                    this.$swal("Error", "El email o contraseña son incorrectos.", "error");
                    break;
                case "ForgotError":
                    this.$swal("Error", "El email introducido no es correcto.", "error");
                    break;
            }
        },
        alertLogin(type) {
            this.$swal("Error", "El email o contraseña son incorrectos.", "error");

        },
        alertForgotError() {
            this.$swal("Error", "El email introducido no es correcto.", "error");
        },
        alertForgotSuccess() {
            this.$swal("¡Gracias!", "Hemos enviado un correo a la dirección electrónica que nos has facilitado. Revisa tu bandeja de entrada o spam.", "success");
        },
        alertSignin() {
            this.$swal("Error", "El email que has introducido es inválido o ya existe.", "error");
        },
        alertNewuser() {
            this.$swal({
                title: "¡Gracias!",
                text: "Tu cuenta ha sido creada correctamente.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        },
        alertChanges() {
            this.$swal({
                title: "¿Quieres guardar los cambios?",
                showCancelButton: "true",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal({
                        title: "Cambios confirmados",
                        text: "Los datos han sido actualizados correctamente.",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,

                    })
                }

            });
        },
        alertNewAnimal() {
            this.$swal({
                title: "¿Quieres crear el perfil del animal?",
                text: "Una vez creado el perfil será público.",
                showCancelButton: "true",
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal({
                        title: "¡Genial!",
                        text: "El perfil se ha creado con éxito.",
                        icon: "success",
                        timer: 1500,
                    })
                }

            });
        },
        alertChangePasswordError() {
            this.$swal({
                title: "Error",
                text: "La contraseña que has introducido no es correcta.",
                icon: "error",
            });
        },
        alertChangePasswordSuccess() {
            this.$swal({
                title: "¡Hecho!",
                text: "Tu contraseña ha sido actualizada.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        },
        alertContactSuccess() {
            this.$swal({
                text: "Le enviaremos al cuidador del animal tus datos de contacto y las respuestas del formulario que has rellenado previamente. Si estás de acuerdo haz click en CONTACTAR.",
                showCancelButton: "true",
                confirmButtonText: "Contactar",
                cancelButtonText: "Volver atrás",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal({
                        title: "¡Enviado!",
                        text: "Los datos han sido enviados correctamente al cuidador del animal.",
                        icon: "success",
                        timer: 2500,
                        showConfirmButton: false,

                    })
                }

            });
        },
        alertContactLogin() {
            this.$swal({
                text: "Para poder ponerte en contacto con el cuidador del animal debes iniciar sesión previamente.",
                showCancelButton: "true",
                confirmButtonText: "Iniciar sesión",
                cancelButtonText: "Volver atrás",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push({
                        path: '/TemplatePage',
                    })
                }

            });
        },
        alertContactFormUser() {
            this.$swal({
                text: "Hemos detectado que no tienes completado el formulario del adoptante. Para poder contactar con el cuidador debes rellenarlo previamente.",
                showCancelButton: "true",
                confirmButtonText: "Completar",
                cancelButtonText: "Volver atrás",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push({
                        path: '/TemplatePage',
                    })
                }

            });
        },

    },

};
</script>


<style lang="scss">
// style.scss
@import '../../node_modules/sweetalert2/src/variables.scss';

$swal2-font: var(--text-font);
$swal2-button-font-weight: 600;
//popup
$swal2-background: var(--white);
$swal2-border-radius: 2rem;
$swal2-padding: 3rem 1rem 3rem;
//Confirm-Button
$swal2-confirm-button-border-radius: 3rem;
$swal2-confirm-button-background-color: var(--orange);
$swal2-confirm-button-color: var(--black);

//Cancel-Button
$swal2-cancel-button-border-radius: 3rem;
$swal2-cancel-button-background-color: var(--green);
$swal2-cancel-button-color: var(--white);

$swal2-button-margin: 0 0.5rem;


@import '../../node_modules/sweetalert2/src/sweetalert2.scss';
</style>
