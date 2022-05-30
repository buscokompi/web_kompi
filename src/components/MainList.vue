<template>
  <section id="frequentquestion" class="accordions">
    <h2>Preguntas frecuentes</h2>
    <div class="question" :class="[item.open ? 'open' : '']" @click="item.open = !item.open"
      v-for="(item, id) in items"> {{
          item.title
      }}
      <h3 v-if="item.open"></h3>
      <p v-html="item.content" v-if="item.open"></p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: {
        q1: {
          title: "¿Qué es Kompi?",
          content: `Es una plataforma destinada a la adopción de animales en España,
            en donde puedes encontrar animales para adoptar tanto de particulares como de protectoras
            y asociaciones. Aunque por motivos diferentes, todas los animales comparten que necesitan
            un nuevo hogar urgentemente. Si quieres obtener más información sobre el animal que te gusta,
            lee su ficha de descripción y haz click en "Adopta" para ponerte en contacto con su cuidador actual.`,
          open: false
        },
        q2: {
          title: "¿Cómo funciona?",
          content: `La plataforma es muy fácil, sencilla e intuitiva por lo que cualquier persona podrá entrar y
            navegar en ella sin ningún problema. Es tan sencillo como buscar el tipo de mascota que te
            interesa haciendo uso de los filtros de búsqueda. Una vez sientas que hayas encontrado a tu
            próximo kompi se te pondrá en contacto con el cuidador actual del animal, así podrán tramitar
            sin intermediarios los detalles del proceso de adopción.`,
          open: false
        },
        q3: {
          title: " ¿Qué animales puedo encontrar / publicar?",
          content: `Nuestra página web aloja a todo tipo de mascotas(legales), la oferta disponible depende del
            momento. Si estás buscando una mascota con ciertas características y no la
            encuentras, visítanos con regularidad ya que nuevos animales se unen a Kompi cada día.
            Podrás encontrar entre nuestras categorías: perros, gatos, aves, roedores y reptiles.
            Si lo que quieres es dar en adopción a tu mascota, regístrate y sigue los pasos para crear la
            ficha de adopción.`,
          open: false
        },
        q4: {
          title: "¿Es gratis?",
          content: `<p>Kompi es totalmente gratuita. Lo único que tienes que hacer es registrarte tanto
            si quieres adoptar, como dar en adopción.</p>
          <p>Esta web está orientada a la adopción, no a la venta.</p>`,
          open: false
        },
        q5: {
          title: "¿Por qué tengo que registrarme?",
          content: `El registro en nuestra web se solicita única y exclusivamente por seguridad.
            Sus datos no serán compartidos con terceros ya que
            serán almacenados únicamente en nuestra base de datos.`,
          open: false
        },
        q6: {
          title: "¿Puedo editar una publicación? ¿Y eliminarla?",
          content: `Sí, en el apartado de 'mi perfil' puede editar la información de su mascota, así como eliminarla.`,
          open: false
        },
        q7: {
          title: "¿Si somos una asociación o protectora, podemos publicar adopciones?",
          content: `<p>Sí, en Kompi no hay límite en el número de fichas de adopción a publicar.</p>
          <p>No olvides mandarnos un correo indicando el nombre de la asociación o protectora
            para añadiros como colaboradoras</p>`,
          open: false
        },
        q8: {
          title: "Requisitos mínimos para adoptar",
          content: `          <p>
            Entre nuestros requisitos mínimos para adoptar o dar en adopción se encuentran:
          <ul>
            <li>- Ser mayor de edad(+18).</li>
            <li>- Tener un espacio u hogar en condiciones salubres para el animal.</li>
            <li>- Tener tiempo para la atención y el cuidado de tu mascota.</li>
            <li>- Cumplir con las normas minimas de vacunación y desparacitación.</li>
          </ul>
          </p>`,
          open: false
        }
      }
    };
  },
  components: {},
  methods: {

  }
}

</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
}

.accordions {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4.5rem 0 7rem;
  font-family: var(--text-font);
  color: var(--black);
  gap: 2.5rem;

}

.question {
  background-color: white;
  border-radius: 2.4rem;
  border: 0.1rem solid var(--black);
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 25%);
  width: 75%;
  max-width: 42rem;
  height: fit-content;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 15% 85%;
  column-gap: 2rem;
  row-gap: 0.5rem;
  align-content: center;
  align-items: center;
  cursor: pointer;
  transition: 2s;
}

.question::before {
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

.question.open::before {
  content: "-";
  text-align: center;
  line-height: 1.8rem;
}

.question.active::after {
  transform: rotate(45deg);
}

p {
  font-family: var(--text-font);
  font-weight: 400;
  color: var(--black);
  font-size: 0.8rem;
  margin: 0 2.5rem 1rem 0;
}



@media screen and (min-width: 767px) {
  .question {
    grid-template-columns: 6% 94%;
  }
}

@media screen and (min-width: 1170px) {
  .accordions {}


  dt {}

  dd {}
}

@media screen and (min-width: 1300px) {
  .accordions {}


  dt {}

  dd {}

}
</style>
