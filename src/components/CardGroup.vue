<template>
    <div class="group">
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardExtra />
    </div>
</template>

<script>
import CardAnimal from './CardAnimal.vue'
import CardExtra from './CardExtra.vue'
    export default {
    components: { CardExtra, CardAnimal }
}
</script>

<style scoped>

.group {
  position: relative;
  width: auto;
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 4rem;
  margin: 4rem 0 5rem;
}


@media screen and (min-width: 767px) {
    .group {
    grid-template-columns: repeat(2, 1fr);
  }

    .group .card-extra {
    display: none;
  }


}

@media screen and (min-width: 1170px) {
    .group {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

}

@media screen and (min-width: 1300px) {

    .group {
    grid-template-columns: repeat(5, 1fr);
    gap: 2.5rem;
    margin-bottom: 6rem;
  }

    .group .card-extra {
    display: grid;
  }


}

</style>
