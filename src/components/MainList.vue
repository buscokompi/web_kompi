<template>
  <section class="accordions">
    <dl v-on:click="item.open = !item.open" v-for="(item, id) in items"> {{ item.title }}
      <dt v-if="item.open"></dt>
      <dd v-if="item.open">{{ item.content }}</dd>
    </dl>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: {
        q1: {
          title: '¿Qué es Kompi?',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          open: true
        },
        q2: {
          title: 'What is Lorem Ipsum',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          open: false
        },
        q3: {
          title: 'What is Lorem Ipsum',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryI',
          open: false
        }
      }
    }
  }
}
</script>

<style scoped>
.accordions {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4.5rem 0 7rem;
  font-family: var(--text-font);
  color: var(--black);

}

dl {
  background-color: white;
  border-radius: 2.4rem;
  border: 0.1rem solid var(--black);
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%);
  width: 75%;
  max-width: 42rem;
  height: fit-content;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 10% 90%;
  column-gap: 2rem;
  row-gap: 0.5rem;
  align-content: center;
  padding-right: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: 1s;
}

dl::before {
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

dl.open::before {
  content: "-";
  text-align: center;
  line-height: 1.8rem;
}

dd {
  font-family: var(--text-font);
  font-weight: 400;
  color: var(--black);
  font-size: 0.8rem;
  margin: 0 2.5rem 1rem 0;
}



@media screen and (min-width: 767px) {}

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
