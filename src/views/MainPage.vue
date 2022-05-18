<template>
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
    <ExtraCard />
    <BaseButton url="../filter-animals.html" text="Comenzar Búsqueda"/>
    <FooterSection />
</template>

<script>
import FooterSection from '../components/FooterSection.vue'
import AnimalCard from '../components/AnimalCard.vue'
import ExtraCard from '../components/ExtraCard.vue'
import BaseButton from '../components/BaseButton.vue'
    export default {
    components: {FooterSection, AnimalCard, ExtraCard, BaseButton }
}

</script>

<style scoped>

</style>
