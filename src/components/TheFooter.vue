<template>
  <footer>

    <div class="information">

      <div class="column two">
        <a href="./index.html"><img src="../assets/icons/version_blanca_logo.svg" alt="Kompi logo" width="65"></a>
        <a href="mailto:adoptaunkompi@gmail.com" class="mail">adoptaunkompi@gmail.com</a>
        <div class="social">
          <a href="https://www.facebook.com/adoptaunkompi/"><img src="../assets/icons/icono_facebook.svg" width="21"
              height="21" alt="Facebook"></a>
          <a href="https://www.instagram.com/adoptaunkompi"><img src="../assets/icons/icono_instagram.svg" width="21"
              height="21" alt="Instagram"></a>
          <a href="https://twitter.com/adoptaunkompi"><img src="../assets/icons/icono_twitter.svg" width="21"
              height="21" alt="Twitter"></a>
        </div>
      </div>

      <div class="column">
        <p>Información</p>
        <RouterLink to="/AboutMe">Sobre nosotros</RouterLink>
        <RouterLink to="/FilterAnimals">Busca una mascota</RouterLink>
        <RouterLink to="/AdoptInfo">Adopta una mascota</RouterLink>
        <RouterLink to="/GiveAdoptionInfo">Publica una mascota</RouterLink>
      </div>

      <div class="column three">
        <p>Acerca de</p>
        <RouterLink to="/PrivacyPolicy">Política de privacidad</RouterLink>
        <RouterLink to="/Terms&Conditions">Términos y condiciones</RouterLink>
        <RouterLink to="/#frequentquestion">Preguntas frecuentes</RouterLink>
        <!-- <a href=" ./404file.html">Preguntas frecuentes</a> -->
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
  name: "TheFooter",

}




</script>

<style scoped>
footer {
  width: 100%;
  height: fit-content;
  background: var(--black);
}

footer .column p {
  color: var(--white);
  font-size: 1rem;
  margin: 0.5rem 0 0;
  font-weight: 700;
}

footer p {
  color: var(--white);
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
  width: 9rem;
}

footer .information .column img {
  height: 1.4rem;
  margin-top: 2rem;
}

.social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
}

footer .information .column .social a {
  margin: 0;

}

footer .information .column .social img {
  filter: invert(50%) sepia(1%) saturate(43%) hue-rotate(270deg) brightness(200%) contrast(101%);
  width: 1.3rem;
  height: 1.3rem;

}

footer .information .column a {
  margin: 1.5rem 0 0;
}

footer .copyright {
  width: 80%;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

footer .copyright .horizontal-line {
  width: 100%;

}

footer .copyright p {
  margin: 1rem 0 2rem;
  font-size: 0.8rem;
}

@media screen and (min-width: 1000px) {
  br {
    display: none;
  }

  footer {
    height: 51vh;
  }

  footer p,
  footer a {
    font-size: 0.9rem;
  }

  footer .information {
    height: 80%;
    flex-direction: row;
  }

  footer .information .two {
    order: 1;
  }

  footer .information .column img {
    margin: 0;
  }

  footer .information .column {
    height: 40%;
    width: 12rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    line-height: 1.5rem;

  }

  footer .information .three {
    margin-right: 15%;
  }

  footer .information .two a {
    margin: 0;
  }

  footer .information .column a {
    margin-top: 1.2rem;
  }

  .social {
    margin-top: 1.5rem;
  }

  footer .copyright {
    margin-top: 0;
  }

  footer .copyright p {
    font-size: 0.9rem;
  }
}

@media screen and (min-width: 1170px) {
  footer .information {
    justify-content: flex-start;
    margin: 0 10vw;
  }

  footer .information .column {
    width: 13rem;
  }

  footer .information .two a {
    margin: 0 0 0.6rem 0;
  }

  footer .information .three {
    margin-right: 25%;
  }


}

@media screen and (min-width: 1300px) {

  footer .information .three {
    margin-right: 45%;
  }
}
</style>
