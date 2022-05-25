<template>
    <footer>

        <div class="information">

            <div class="column two">
                <a href="./index.html"><img class="logo" src="../assets/icons/version_blanca_logo.svg"></a>
                <a href="mailto:buscokompi@gmail.com" class="mail">adoptaunkompi@gmail.com</a>
                <div class="social">
                    <a href="https://www.facebook.com/adoptaunkompi/"><img src="../assets/icons/icono_facebook.svg"
                            alt="facebook"></a>
                    <a href="https://www.instagram.com/adoptaunkompi"><img src="../assets/icons/icono_instagram.svg"
                            alt="instagram"></a>
                    <a href="https://twitter.com/adoptaunkompi"><img src="../assets/icons/icono_twitter.svg"
                            alt="twitter"></a>
                </div>
            </div>

            <div class="column">
                <p>Información</p>
                <a href="./404file.html">Sobre nosotros</a>
                <a href="./filter-animals.html">Busca una mascota</a>
                <a href="./404file.html">Contáctanos</a>
            </div>

            <div class="column three">
                <p>Acerca de</p>
                <a href="./404file.html">Política de privacidad</a>
                <a href="./404file.html">Términos y condiciones</a>
                <a href="./index.html#faq">Preguntas frecuentes</a>
            </div>
        </div>

        <div class="copyright">
            <hr class=" horizontal-line">
            <p>© 2022 Todos los Derechos Reservados. <br>Desarrollado por Karmic Koala</p>
        </div>

    </footer>
</template>

<script>
export default {
    name: "FooterSection"
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 80vh;
    background: var(--black);
}

footer .column p {
    color: var(--white);
    font-family: var(--text-font);
    font-size: 0.9rem;
    margin: 0.5rem 0 0;
    font-weight: 700;
}

footer p {
    color: var(--white);
    font-family: var(--text-font);
    font-size: 0.8rem;
}

footer a {
    color: var(--white);
    font-family: var(--text-font);
    font-size: 0.8rem;
    font-weight: 400;
}

footer .information {
    height: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    gap: 5vh;
    margin: 0 2rem;
}

footer .information .column {
    width: 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    text-align: center;
    line-height: 0.8rem;
    position: relative;
}

footer .information .column .mail {
    text-decoration: underline;
}

footer .information .column img {
    height: 1.4rem;
    margin-top: -1rem;
}

footer .information .column .social img {
    filter: invert(50%) sepia(1%) saturate(43%) hue-rotate(270deg) brightness(109%) contrast(101%);
    width: 1.3rem;
    height: 1.3rem;
    margin: 1rem 0.3rem 0;
}

footer .information .column a {
    margin: 0.6rem 0 0;
}

footer .copyright {
    width: 100%;
    height: 15%;
    text-align: center;
}

footer .copyright .horizontal-line {
    width: 70%;
    margin-top: -1rem;
}

footer .copyright p {
    margin: 1rem;
}

@media screen and (min-width: 767px) {
    h1 {
        font-size: 3.1rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    p {
        font-size: 0.9rem;
    }

    footer {
        height: 40vh;
    }

    footer .column p {
        margin-bottom: 1rem;
    }

    footer p {
        font-size: 0.8rem;
        font-weight: 500;
    }

    footer a {
        font-size: 0.8rem;
        font-weight: 500;
    }

    footer .information {
        flex-direction: row;
        gap: 6rem;
    }

    footer .information .two {
        order: 1;
        margin-top: -1rem;
    }

    footer .information .column {
        text-align: left;
        line-height: 1.5rem;
        width: 12rem;
    }

    .copyright br {
        display: none;
    }

}

@media screen and (min-width: 1170px) {
    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1rem;
    }

    footer .information {
        gap: 3vw;
        justify-content: flex-start;
        margin: 0 15vw;
    }

    footer .information .column {
        width: 13rem;
    }

    footer .information .two {
        position: absolute;
        right: 15vw;
    }
}

@media screen and (min-width: 1300px) {
    h1 {
        font-size: 4rem;
    }

    footer .information {
        margin: 0 19vw;
    }

    footer .information .two {
        right: 19vw;
    }
}
</style>
