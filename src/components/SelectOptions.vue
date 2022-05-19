<template>
  <select v-html="html" @change="onChange($event)"></select>
</template>

<script>
export default {
  name: "SelectOptions",
  props: {
    options: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      html: ""
    }
  },
  created() {
    this.options.forEach(option => {
      this.html += /*html*/ `<option value="${option}">${option}</option>`
    })
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import '../assets/base.css';

select {
  background: var(--white);
  width: 13rem;
  height: 3rem;
  border-right: 1rem solid transparent;
  margin: 1rem auto 0;
}

@media screen and (min-width: 767px) {
  select {
    width: 10rem;
    height: 3.3rem;
    appearance: none;
    border-radius: 0.5rem;
  }
}

@media screen and (min-width: 1170px) {
  .filter select {
    width: 17rem;
  }
}
</style>
