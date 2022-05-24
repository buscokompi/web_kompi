<template>
    <RouterLink class="button" :to="buttonUrl">{{ buttonText }}</RouterLink>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: false,
            default: "#cc9320"
        }
    },
    data() {
        return {
            buttonUrl: this.url,
            buttonText: this.text
        }
    }

}
</script>

<style scoped>
.button {
    background: var(--orange);
    padding: 0.8rem 2rem;
    text-decoration: none;
    border-radius: 3rem;
    font-family: var(--text-font);
    font-size: 1em;
    font-weight: 600;
    transition: 0.5s ease-out;
}

.button:hover {
    background: #cc9320;
}
</style>
