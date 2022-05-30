<template>
    <div>
        <section>
            <div class="box">
                <div class="error">
                    <img class="img-pug" src="../assets/images/img-404-error.png" alt="Imagen perro triste">
                    <h2><span>¡Ups!</span> Algo no ha ido como debía. La página que solicitas no existe.</h2>
                    <BaseButton url="/" text="Inicio" :bgColor="white"></BaseButton>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
    name: "Error404",
    components: {
        BaseButton
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--text-font);
    color: white;
}

section {
    background: linear-gradient(45deg, #f9b225, #ffe194);
    height: 100vh;
}

.box {
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 1rem;
    background-color: #f9b225;
    box-shadow: 0 0.1rem 1rem rgb(0 0 0 / 20%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

span {
    font-weight: 700;
}

h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1rem;
    text-align: center;
}

.img-pug {
    width: 50%;
    height: auto;
}

.button {
    padding: 0.5rem 3rem;
    border-radius: 3rem;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
    background-color: var(--green);
    margin-top: 3rem;
    cursor: pointer;
}

.button:hover {
    color: white;
    font-weight: 600;
    transition: 0.4s;
    background: #013a42;
}
</style>
