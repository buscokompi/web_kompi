<template>
    <div class="main">
        <AnimalCard />
        <ExtraCard />
    </div>
</template>

<script>
import AnimalCard from '../components/AnimalCard.vue'
import ExtraCard from '../components/ExtraCard.vue'
export default {
    name: "MainPage",
    components: {
        AnimalCard,
        ExtraCard,
    }
}
</script>

<style scoped>
.main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>