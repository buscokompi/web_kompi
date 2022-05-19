<template>

    <div class="shadow">
        <RouterLink :to="shadowUrl"><img src=""></RouterLink>
    </div>

</template>

<script>
export default {
    props: {
       url: {
           type: String,
           required: true
       },
       text:{
           type: String,
           required: true
       }
    },
    data(){
        return{
            shadowUrl: this.url,
            buttonText: this.text
        }
    }

}
</script>

<style scoped>


</style>
