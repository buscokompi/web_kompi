<template>

  <section class="guide">

    <h2>¿Quieres dar en adopción?</h2>
    <div class="group">

      <div class="step">
        <div class="circle">
          <p>1</p>
        </div>
        <img src="../assets/icons/icono_notificaciones.svg" alt="Registro" width="144" height="144">
        <h3>Regístrate en la web</h3>
        <p>Regístrate en dos sencillos pasos.</p>
        <p>¡No te llevará más de 1 min!</p>
      </div>

      <div class="step">
        <div class="circle">
          <p>2</p>
        </div>
        <img src="../assets/icons/icono_publica.svg" alt="Publicar" width="228" height="144">
        <h3>Publica una adopción</h3>
        <p>Crea la publicación añadiendo características e información relevante de la mascota.<br> ¡No te olvides de
          las fotos!</p>
      </div>

      <div class="step">
        <div class="circle">
          <p>3</p>
        </div>
        <img src="../assets/icons/icono_registra.svg" alt="Notificaciones" width="203" height="144">
        <h3>¡Recibe notificaciones!</h3>
        <p>Se te notificará cuando alguien esté interesado en el animal y serás tú quien cierre el acuerdo.</p>
      </div>

    </div>
    <BaseButton url="/TemplatePage" text="Leer más" />

  </section>

</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },

}
</script>

<style scoped>
.guide {
  width: 100%;
  height: fit-content;
  text-align: center;
  color: var(--black);
}

.guide h2 {
  margin: 8rem 0;
}

.guide .group {
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 7rem;
}

.guide .group .step {
  width: 17rem;
}

.guide .group .step .circle {
  background-color: var(--orange);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  position: relative;
  left: 0;
}

.guide .group .step .circle p {
  position: relative;
  top: 0.3rem;
}

.guide .group .step img {
  height: 7rem;
}

.guide .group .step h3 {
  margin: 3rem 0 1rem;
}

.guide .button {
  width: 7rem;
  margin: 6rem 0;
}

@media screen and (min-width: 767px) {
  br {
    display: none;
  }
}

@media screen and (min-width: 1170px) {
  .guide {
    display: grid;
    justify-items: center;
  }

  .guide .group {
    grid-template-columns: repeat(3, 1fr);
  }

}

@media screen and (min-width: 1300px) {

  .guide .group {
    gap: 10rem;
  }

  .guide h2 {
    margin-top: 11rem;
  }

  .guide .group .step {
    width: 20rem;
  }

  .guide .group .step img {
    height: 9rem;
  }

  .guide .button {
    margin-bottom: 6rem;
  }
}
</style>
