<template>

    <RouterLink class="button" :to="buttonUrl" @click="generic">{{ buttonText }}</RouterLink>

</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: "",
        },
        BgColor: {
            type: String,
            default: "#f9b22a"
        }
    },
    data() {
        return {
            buttonUrl: this.url,
            buttonText: this.text,
            buttonBgColor: this.BgColor
        }
    },
    methods: {
        generic() {
            switch (this.value) {
                case "alertLogin":
                    this.alertLogin();
                    break;
                case "alertForgotError":
                    this.alertForgotError();
                    break;
                case "alertForgotSuccess":
                    this.alertForgotSuccess();
                    break;
                case "alertSignin":
                    this.alertSignin();
                    break;
                case "alertNewuser":
                    this.alertNewuser();
                    break;
                case "alertChanges":
                    this.alertChanges();
                    break;
                case "alertNewAnimal":
                    this.alertNewAnimal();
                    break;
                case "alertChangePasswordError":
                    this.alertChangePasswordError();
                    break;
                case "alertChangePasswordSuccess":
                    this.alertChangePasswordSuccess();
                    break;
                case "alertContactSuccess":
                    this.alertContactSuccess();
                    break;
                case "alertContactLogin":
                    this.alertContactLogin();
                    break;
                case "alertContactFormUser":
                    this.alertContactFormUser();
                    break;
                case "":
                    break;
                default:
                    break;
            }
        },
        alertLogin() {
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

}
</script>

<style scoped>
.button {
    background: var(--orange);
    color: var(--black);
    padding: 0.8rem 2rem;
    display: inline-block;
    text-decoration: none;
    border-radius: 3rem;
    font-family: var(--text-font);
    font-size: 1em;
    font-weight: 600;
    transition: 0.5s ease-out;
}

.button:hover {
    background: var(--hover-green);
    color: var(--white);
}
</style>
