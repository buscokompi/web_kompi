<template>
    <div>

    </div>
</template>

<script>
import { KompiStore } from "@/stores/KompiStore.js" // Almacen de pinia
export default {
    name: "CategoriesPage",
    mounted() {
        const aux = KompiStore();
        aux.setId("1kHYH0nxbHYhM94m2MRX")
    }
}
</script>

<style scoped>
</style>