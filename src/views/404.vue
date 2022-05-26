<template>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>File not found</title>
        <link rel="stylesheet" href="./css/404file.css">
        <!--Font-Family: Dosis -->
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500;700;800&display=swap" rel="stylesheet">
        <!--Font-Family: Open Sans and Lato -->
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet">
    </head>

    <body>
        <section>
            <div class="box">
                <div class="error">
                    <img class="img-pug" src="../assets/images/img-404-error.png" alt="Imagen perro triste">
                    <h2><span>¡Ups!</span> Algo no ha ido como debía. La página que solicitas no existe.</h2>
                    <RouterLink to="/" class="button">Inicio </RouterLink>
                </div>
            </div>
        </section>

    </body>
</template>
<script>
export default {
    name: "404"

}
</script>

<style scoped>
:root {
    --orange: #f9b225;
    --yellow: #ffe194;
    --black: #3f3d3b;
    --white: white;
    --grey: #c4c4c4;
    --lightgrey: #f5f5f5;
    --green: #015865;
    --title-font: "Dosis";
    --text-font: "Open Sans";
}

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
