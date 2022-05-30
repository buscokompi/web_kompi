<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <RouterLink to="/">
                <img class="logo" src="../assets/icons/version_primario_logo.svg" alt="Kompi Logo">
            </RouterLink>
            <ul v-show="desktop" class="desktop">
                <li>
                    <p class="link" @click="openAdoption">Adopción</p>
                </li>
                <ul class="display adoption" @mouseout="close" v-show="displayAdoption">
                    <li>
                        <RouterLink class="link" to="/">Adoptar</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="link" to="/">Poner en adopción</RouterLink>
                    </li>
                </ul>
                <li>
                    <RouterLink class="link" to="/FilterAnimals">Categorías</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" to="/AboutMe">Sobre nosotros</RouterLink>
                </li>
                <!-- <li>
                    <RouterLink class="link" to="/TemplatePageBird"><img src="../assets/icons/corazon_icono.svg"
                            alt="favoritos">
                    </RouterLink>
                </li> -->
                <li class="vertical-line"></li>
                <li v-show="!sessionLog">
                    <RouterLink class="link" to="/Login">Iniciar sesión</RouterLink>
                </li>
                <li v-show="sessionLog" class="display" @click="openProfile">
                    <img src="../assets/icons/user.svg" alt="Mi perfil" width="26" height="26">
                    <p class="profile-name">{{ nameProfile }}</p>
                    <ul class="profile" v-show="displayProfile">
                        <li>
                            <RouterLink class="link" to="/">Mi perfil</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/">Ajustes</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" to="/" @click="closeSession">Cerrar sesión</RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="burger">
                <i @click="toggleMenu" v-show="!desktop" class="burger-img" :class="{ 'burger-close': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <div v-show="mobileNav" class="dropdown">
                    <div class="invisible" v-show="!sessionLog">
                        <ul class="list">
                            <li>
                                <RouterLink class="link" to="/">Adoptar</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/">Dar en adopción</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/FilterAnimals">Categorías</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/">Sobre nosotros</RouterLink>
                            </li>
                        </ul>
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
                            <!-- <li>
                            <RouterLink class="link" to="/"><img src="../assets/icons/corazon_icono.svg"
                                    alt="Favoritos"></RouterLink>
                        </li> -->
                        </ul>
                        <button>
                            <RouterLink class="m-footer" to="/Login">Iniciar sesión</RouterLink>
                        </button>
                    </div>
                    <div class="invisible" v-show="sessionLog">
                        <ul class="list">
                            <li>
                                <RouterLink class="link" to="/">Adoptar</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/">Dar en adopción</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/FilterAnimals">Categorías</RouterLink>
                            </li>

                            <li>
                                <RouterLink class="link" to="/FormUser">Formulario adoptante</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/FormCard">Crear ficha animal
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="link" to="/">Ajustes</RouterLink>
                            </li>
                        </ul>
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
                            <!-- <li>
                            <RouterLink class="link" to="/"><img src="../assets/icons/corazon_icono.svg"
                                    alt="Favoritos"></RouterLink>
                        </li> -->
                        </ul>
                        <button @click="closeNav">
                            <RouterLink @click="closeSession" class="m-footer" to="/">Cerrar sesión</RouterLink>
                        </button>
                    </div>
                </div>
            </transition>
            <div v-show="mobileNav" class="opacity">
            </div>
        </nav>
    </header>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
    authDomain: "web-kompi.firebaseapp.com",
    projectId: "web-kompi",
    storageBucket: "web-kompi.appspot.com",
    messagingSenderId: "556298514839",
    appId: "1:556298514839:web:92e508e18c5685e99694d2",
    measurementId: "G-93MGP34YQN"
};
export default {
    name: "TheHeader",
    data() {
        return {
            scrolledNav: null,
            desktop: false,
            mobileNav: null,
            windowWidth: null,
            auth: "",
            firebaseapp: "",
            nameProfile: "",
            emailProfile: "",
            fs: "",
            sessionLog: true,
            displayProfile: false,
            displayAdoption: false,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
        this.firebaseapp = initializeApp(firebaseConfig);
        this.checkSession();
        this.fs = getFirestore();
    },
    methods: {
        toggleMenu() {
            this.mobileNav = !this.mobileNav;
        },
        toggleDisplay() {
            this.sessionLog = !this.sessionLog;
        },
        openProfile() {
            this.displayProfile = !this.displayProfile;
        },
        openAdoption() {
            this.displayAdoption = !this.displayAdoption;
        },

        close() {
            setTimeout(() => {
                this.displayAdoption = false;
            }, 1000);

        },
        closeNav() {
            this.mobileNav = false;
        },
        async closeSession() {
            const auth = getAuth();
            await signOut(auth).then(() => {
                router.go("/");
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        },
        async getNameProfile(userEmail) {
            const docRef = doc(this.fs, "usuarios", userEmail);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.nameProfile = docSnap.data().name;
            }
            else {
                this.nameProfile = userEmail;
            }
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
        },
        checkSession() {
            const auth = getAuth();
            auth.onAuthStateChanged((user) => {
                console.log(user);
                if (user) {
                    this.sessionLog = true;
                    console.log("usuario autenticado");
                    this.emailProfile = user.email;
                    this.getNameProfile(this.emailProfile);
                }
                else {
                    this.sessionLog = false;
                    console.log("usuario no autenticado");
                }
            });
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    components: {}
}
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

ul {
    list-style: none;
    text-decoration: none;
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
    z-index: 0;
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
    grid-template-rows: 70% 15% 15%;
    z-index: 5;
}

.invisible {
    display: contents;
    position: fixed;
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;

}



.icons {
    display: grid;
    width: 10rem;
    grid-auto-columns: repeat(4, 1fr);
    grid-auto-flow: column;
    justify-items: start;
    transition: color 0.5s;
}

.icons a {
    height: fit-content;
}

.icons img {
    width: 1.7rem;
    height: 1.7rem;
}

.icons img:hover {
    filter: brightness(0) saturate(100%) invert(19%) sepia(9%) saturate(7096%) hue-rotate(149deg) brightness(91%) contrast(105%);
    border: 0.1rem solid var(--orange);
    border-radius: 25%;
}

button {
    border: 0;
    padding: 0;
}

.m-footer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--orange);
    font-family: var(--text-font);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--black);
    text-decoration: none;
}

.m-footer:hover {
    background-color: var(--green);
    color: var(--white);
    transition: all 0.5s;
}


.desktop {
    display: flex;
    gap: 2rem;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 5rem;
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

.display {
    grid-auto-flow: column;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.profile {
    background: var(--orange);
    position: absolute;
    top: 4rem;
    right: -4.4rem;
    width: fit-content;
    height: fit-content;
    padding: 2rem 2.5rem;
    transition: 0.3s linear;
    line-height: 2rem;
}

.adoption {
    background: var(--orange);
    display: flex;
    gap: 1rem;
    padding: 1.5rem 2.5rem;
    position: fixed;
    margin-bottom: -11.4rem;
    flex-direction: column;

}

.desktop {
    display: flex;
    gap: 2rem;
    position: absolute;
    align-items: center;
    right: 8rem;
}



.desktop img {
    width: 1rem;
    transition: 0.1s;
}

.desktop .display img {
    width: 1.6rem;
}

.desktop a:hover,
.desktop .display p:hover,
.dropdown .link:hover {
    color: var(--orange);
}

.dropdown .m-footer .link:hover {
    color: var(--white);
}

.desktop .profile a,
.desktop .adoption a {
    width: 100%;
}

.desktop .profile a:hover,
.desktop .adoption a:hover {
    color: var(--white);
    background: var(--green);
}

a,
.display li,
.display p,
.link {
    color: var(--black);
    font-family: var(--text-font);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.5s;
    cursor: pointer;
}

.dropdown .link {
    font-size: 1.2rem;
    font-weight: 700;
}
</style>
