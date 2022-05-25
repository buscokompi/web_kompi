<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <a href="#">
                <img class="logo" src="../assets/icons/version_primario_logo.svg" alt="Kompi Logo">
            </a>
            <ul v-show="desktop" class="desktop">
                <li>
                    <RouterLink class="link" to="/TemplatePageRodent">Adopción</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" to="/FilterAnimals">Categorías</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" to="/TemplatePageDog">Sobre nosotros</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" to="/TemplatePageBird"><img src="../assets/icons/corazon_icono.svg"
                            alt="favoritos">
                    </RouterLink>
                </li>
                <li class="vertical-line"></li>
                <li>
                    <RouterLink class="link" to="/TemplatePageReptile">Iniciar sesión</RouterLink>
                </li>
            </ul>
            <div class="burger">
                <i @click="toggleMenu" v-show="!desktop" class="burger-img" :class="{ 'burger-close': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <div v-show="mobileNav" class="dropdown">
                    <ul class="list">
                        <li>
                            <RouterLink class="link" to="/" @click="closeNav">Adopción</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/TemplatePage" @click="closeNav">Categorías</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/" @click="closeNav">Sobre nosotros</RouterLink>
                        </li>
                    </ul>
                    <!-- <a href="./login.html" class="m-contact">Contáctanos</a> -->
                    <ul class="icons">
                        <li>
                            <RouterLink class="link" to="/"><img src="../assets/icons/icono_facebook_yellow.svg"
                                    alt="Facebook"></RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/"><img src="../assets/icons/icono_instagram_yellow.svg"
                                    alt="Instagram"></RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/"><img src="../assets/icons/icono_twitter_yellow.svg"
                                    alt="Twitter"></RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/"><img src="../assets/icons/corazon_icono.svg"
                                    alt="Favoritos"></RouterLink>
                        </li>
                    </ul>
                    <div class="m-footer">
                        <a href="./login.html">Iniciar sesión</a>
                    </div>
                </div>
            </transition>
            <div v-show="mobileNav" class="opacity"></div>
        </nav>
    </header>
    <div class="view-container">
        <RouterView />
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
            scrolledNav: null,
            desktop: false,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounter() {
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        toggleMenu() {
            this.mobileNav = !this.mobileNav;

        },

        closeNav() {
            this.mobileNav = false;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth >= 1300) {
                this.desktop = true;
                this.mobileNav = false;
                return;
            }
            this.desktop = false;
            this.mobileNav = false;
            return;
        }
    },
};
</script>

<style scoped>
header {
    width: 100%;
    height: 5rem;
    background: var(--white);
    position: fixed;
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 20%);
    z-index: 9;
    transition: 0.5s ease all
}

nav {
    display: flex;
    flex-direction: row;
    transition: 0.5s ease all;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    align-items: center;
}

ul,
.link {
    list-style: none;
    text-decoration: none;
    color: var(--black);
    font-family: var(--text-font);
    transition: color 0.5s;

}

.link {
    cursor: pointer;
}

.link:hover {
    color: var(--orange)
}


.logo {
    width: 7rem;
    margin: 1rem
}

.burger-img {
    width: 3rem;
    height: 3rem;
    background: url("../assets/icons/menu-icon.svg");
    background-size: 2rem;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    position: absolute;
    right: 2.5rem;
    top: 1rem;
}

.burger-close {
    background: url("../assets/icons/menu-exit.svg");
    background-size: 1.3rem;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.6s linear;
    z-index: 6;
    position: absolute;
    top: 1.5rem;
}

.opacity {
    z-index: -2;
    background: rgb(50 48 53/100%);
    opacity: 0.6;
    width: 100vw;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
}

.dropdown {
    max-width: 42rem;
    width: 85%;
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 45% 15%;
    z-index: 5;
}


.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(50rem);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

.list {
    display: grid;
    align-content: center;
    gap: 2rem;
}


.list .link {
    font-size: 2rem;
    font-weight: 700;
    width: fit-content;
}




.icons {
    display: grid;
    width: 8rem;
    grid-auto-columns: repeat(4, 1fr);
    grid-auto-flow: column;
    justify-items: center;
    transition: color 0.5s;
    top: 24rem;
    left: 2.4rem;
}

.icons a {
    height: fit-content;
}

.icons img {
    width: 1.7rem;
    height: 1.7rem;
}

.icons img:hover {
    filter: invert(95%) sepia(98%) saturate(6680%) hue-rotate(325deg) brightness(92%) contrast(112%);
    border: 0.1rem solid var(--orange);
    border-radius: 25%;
}

.m-footer {
    background: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;

}

.m-footer a {
    font-family: var(--text-font);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--black);
    text-decoration: none;
}


.desktop {
    display: flex;
    gap: 2rem;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 5rem;
}

.desktop .link {
    font-size: 0.9rem;
    font-weight: 600;
}

.desktop img {
    width: 1rem;
    transition: 0.1s;
}


.desktop .vertical-line {
    display: inline-block;
    height: 3rem;
    width: 0.1rem;
    background-color: var(--black);
    cursor: auto;
}
</style>
