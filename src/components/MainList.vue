<template>
  <section class="list">

    <h2>Preguntas frecuentes</h2>
    <div class="container">
      <div class="question question1">
        ¿Qué es Kompi?
      </div>
      <div class="answercont">
        <div class="answer">
          <p> Es una plataforma destinada a la adopción de animales en España,
            en donde puedes encontrar animales para adoptar tanto de particulares como de protectoras
            y asociaciones. Aunque por motivos diferentes, todas los animales comparten que necesitan
            un nuevo hogar urgentemente. Si quieres obtener más información sobre el animal que te gusta,
            lee su ficha de descripción y haz click en "Adopta" para ponerte en contacto con su cuidador actual.</p>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="question question2">
        ¿Cómo funciona?
      </div>
      <div class="answercont">
        <div class="answer">
          <p> La plataforma es muy fácil, sencilla e intuitiva por lo que cualquier persona podrá entrar y
            navegar en ella sin ningún problema. Es tan sencillo como buscar el tipo de mascota que te
            interesa haciendo uso de los filtros de búsqueda. Una vez sientas que hayas encontrado a tu
            próximo kompi se te pondrá en contacto con el cuidador actual del animal, así podrán tramitar
            sin intermediarios los detalles del proceso de adopción.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="question question3">
        ¿Qué animales puedo encontrar / publicar?
      </div>
      <div class="answercont">
        <div class="answer">
          <p>Nuestra página web aloja a todo tipo de mascotas(legales), la oferta disponible depende del
            momento. Si estás buscando una mascota con ciertas características y no la
            encuentras, visítanos con regularidad ya que nuevos animales se unen a Kompi cada día.
            Podrás encontrar entre nuestras categorías: perros, gatos, aves, roedores y reptiles.
            Si lo que quieres es dar en adopción a tu mascota, regístrate y sigue los pasos para crear la
            ficha de adopción.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="question question4">
        ¿Es gratis?
      </div>
      <div class="answercont">
        <div class="answer">
          <p>Kompi es totalmente gratuita. Lo único que tienes que hacer es registrarte tanto
            si quieres adoptar, como dar en adopción.</p>
          <p>Esta web está orientada a la adopción, no a la venta.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="question question5">
        ¿Por qué tengo que registrarme?
      </div>
      <div class="answercont">
        <div class="answer">
          <p> El registro en nuestra web se solicita única y exclusivamente por seguridad.
            Sus datos no serán compartidos con terceros ya que
            serán almacenados únicamente en nuestra base de datos.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="question question6">
        ¿Puedo editar una publicación? ¿Y eliminarla?
      </div>
      <div class="answercont">
        <div class="answer">
          <p>Sí, en el apartado de 'mi perfil' puede editar la información de su mascota, así como eliminarla.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="question question7">
        ¿Si somos una asociación o protectora, podemos publicar adopciones?
      </div>
      <div class="answercont">
        <div class="answer">
          <p>Sí, en Kompi no hay límite en el número de fichas de adopción a publicar.</p>
          <p>No olvides mandarnos un correo indicando el nombre de la asociación o protectora
            para añadiros como colaboradoras</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="question question8">
        Requisitos mínimos para adoptar
      </div>
      <div class="answercont">
        <div class="answer">
          <p>
            Entre nuestros requisitos mínimos para adoptar o dar en adopción se encuentran:
          <ul>
            <li>- Ser mayor de edad(+18).</li>
            <li>- Tener un espacio u hogar en condiciones salubres para el animal.</li>
            <li>- Tener tiempo para la atención y el cuidado de tu mascota.</li>
            <li>- Cumplir con las normas minimas de vacunación y desparacitación.</li>
          </ul>
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
    }
</script>

<style scoped>

.list {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4.5rem 0 7rem;
  color: var(--black);
}

.list .container {
  width: 75%;
  max-width: 42rem;
  height: fit-content;
  background-color: white;
  border-radius: 50px;
  border: 0.1rem solid var(--black);
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%);
  margin: 1rem 0;
  padding: 1rem 2rem;
}

.list h2 {
  margin: 4rem 1rem;
  text-align: center;
}

.list .container .question {
  font-family: var(--text-font);
  color: var(--black);
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  cursor: pointer;
  display: grid;
  justify-content: center;
  grid-template-columns: 10% 90%;
  gap: 2.5rem;
  align-content: center;
  padding-right: 0.5rem;
}

.list .container .question::before {
  margin-left: 1.3rem;
  content: "\002B";
  font-size: 1.5rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;
  transition: 0.2s;
  border-radius: 50%;
  border: 0.13rem solid var(--black);
  text-align: center;
}

.list .container .question.active::before {
  content: "-";
  text-align: center;
  line-height: 1.8rem;
}

.list .container .question.active::after {
  transform: rotate(45deg);
}

.list .container .answercont {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s;
  line-height: 1.5rem;
}

.list .container .answer {
  padding: 1.25rem;
}

.list .container .answer p {
  font-weight: 400;

  /* padding: 1.25rem; */
}

.list .container .answer ul {
  font-family: var(--text-font);
  font-weight: 400;
  color: var(--black);
  font-size: 0.8rem;
  padding-left: 0.7rem;
}

@media screen and (min-width: 767px) {

}

@media screen and (min-width: 1170px) {
.list .container .question {
    gap: 1rem;
  }

  .list .container .answer ul {
    font-size: 1rem;
  }

}

@media screen and (min-width: 1300px) {
.list h2 {
    margin-top: 2rem;
  }

  .list {
    margin-bottom: 11rem;
  }

  .list .container .question {
    gap: 0;
  }

}

</style>
