<template>
    <TopBar />
    <MainMain />
    <!-- <MainCategory /> -->
    <MainAdoption />
    <MainCounter />
    <MainList />
    <FooterSection />
</template>

<script>
import FooterSection from '../components/FooterSection.vue'
import MainMain from '../components/MainMain.vue'
import TopBar from '../components/TopBar.vue'
import MainCategory from '../components/MainCategory.vue'
import MainAdoption from '../components/MainAdoption.vue'
import MainCounter from '../components/MainCounter.vue'
import MainList from '../components/MainList.vue'
    export default {
    components: { FooterSection, MainMain, TopBar, MainCategory, MainAdoption, MainCounter, MainList }
}

</script>

<style scoped>

</style>
