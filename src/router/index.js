import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainPage.vue"),
      meta: {
        title: "Kompi Home",
        metaTags: [
          {
            name: "description",
            content: "El portal de confianza para la adopción gratuita de animales en España. Busca el más próximo a ti y adopta fácilmente a tu nueva mascota."
          },
          {
            property: "og:description",
            content: "El portal de confianza para la adopción gratuita de animales en España. Busca el más próximo a ti y adopta fácilmente a tu nueva mascota."
          }
        ]
      }
    },
    {
      path: "/FilterAnimals",
      name: "FilterAnimals",
      component: () => import("../views/FilterAnimals.vue"),
      meta: {
        title: "Categoria Animales",
        metaTags: [
          {
            name: "description",
            content: "Elige quien sera tu proximo Kompi, en una gran variedad de mascotas."
          },
          {
            property: "og:description",
            content: "Elige quien sera tu proximo Kompi, en una gran variedad de mascotas."
          }
        ]
      }
    },
    {
      path: "/FormUser",
      name: "FormUser",
      component: () => import("../views/FormUser.vue"),
      meta: {
        title: "Formulario Usuario",
        metaTags: [
          {
            name: "description",
            content: "Rellena el formulario para hacer una busqueda más exacta de el Kompi."
          },
          {
            property: "og:description",
            content: "Rellena el formulario para hacer una busqueda más exacta de el Kompi."
          }
        ]
      }
    },
    {
      path: "/FormUserEdit",
      name: "FormUserEdit",
      component: () => import("../views/FormUserEdit.vue"),
      meta: {
        title: "Editar Formulario Usuario",
        metaTags: [
          {
            name: "description",
            content: "Edita tu usuario por si has tenido algun error un perfil."
          },
          {
            property: "og:description",
            content: "Edita tu usuario por si has tenido algun error un perfil."
          }
        ]
      }
    },
    {
      path: "/TemplateCat",
      name: "TemplateCat",
      component: () => import("../views/TemplateCat.vue"),
      meta: {
        title: "Categoria Gatos",
        metaTags: [
          {
            name: "description",
            content: "Mira y elige tu Kompi Felino."
          },
          {
            property: "og:description",
            content: "Mira y elige tu Kompi Felino.."
          }
        ]
      }
    },
    {
      path: "/TemplateDog",
      name: "TemplateDoge",
      component: () => import("../views/TemplateDog.vue"),
      meta: {
        title: "Categoria Perros",
        metaTags: [
          {
            name: "description",
            content: "Mira y elige tu Kompi Perro."
          },
          {
            property: "og:description",
            content: "Mira y elige tu Kompi Perro."
          }
        ]
      }
    },
    {
      path: "/TemplateReptile",
      name: "TemplateReptile",
      component: () => import("../views/TemplateReptile.vue"),
      meta: {
        title: "Categoria Reptiles",
        metaTags: [
          {
            name: "description",
            content: "Mira y elige tu Kompi Reptil."
          },
          {
            property: "og:description",
            content: "Mira y elige tu Kompi Reptil."
          }
        ]
      }
    },
    {
      path: "/TemplateBird",
      name: "TemplateBird",
      component: () => import("../views/TemplateBird.vue"),
      meta: {
        title: "Categoria Aves",
        metaTags: [
          {
            name: "description",
            content: "Mira y elige tu Kompi Ave."
          },
          {
            property: "og:description",
            content: "Mira y elige tu Kompi Ave."
          }
        ]
      }
    },
    {
      path: "/TemplateRodent",
      name: "TemplateRodent",
      component: () => import("../views/TemplateRodent.vue"),
      meta: {
        title: "Categoria Roedores",
        metaTags: [
          {
            name: "description",
            content: "Mira y elige tu Kompi Roedor."
          },
          {
            property: "og:description",
            content: "Mira y elige tu Kompi Roedor.."
          }
        ]
      }
    },
    {
      path: "/NewAnimalForm",
      name: "NewAnimalForm",
      component: () => import("../views/NewAnimalForm.vue"),
      meta: {
        title: "Formulario nuevo Kompi",
        metaTags: [
          {
            name: "description",
            content: "Agrega a tu Kompi para darlo en Adopción."
          },
          {
            property: "og:description",
            content: "Agrega a tu Kompi para darlo en Adopción."
          }
        ]
      }
    },
    {
      path: "/FormCard",
      name: "FormCard",
      component: () => import("../views/FormCard.vue"),
      meta: {
        title: "Formulario nuevo Kompi",
        metaTags: [
          {
            name: "description",
            content: "Agrega a tu Kompi para darlo en Adopción."
          },
          {
            property: "og:description",
            content: "Agrega a tu Kompi para darlo en Adopción."
          }
        ]
      }
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/login.vue"),
      meta: {
        title: "Iniciar Sesión",
        metaTags: [
          {
            name: "description",
            content: "Inicia tu sesión y navega con mas facilidad por la página."
          },
          {
            property: "og:description",
            content: "Inicia tu sesión y navega con mas facilidad por la página."
          }
        ]
      }
    },
    {
      path: "/Signin",
      name: "Signin",
      component: () => import("../views/Signin.vue"),
      meta: {
        title: "Registrarse en Kompi",
        metaTags: [
          {
            name: "description",
            content: "Crea tu cuenta y para registrate en la página."
          },
          {
            property: "og:description",
            content: "Crea tu cuenta y para registrate en la página."
          }
        ]
      }
    },
    {
      path: "/ForgotPassword",
      name: "ForgotPassword",
      component: () => import("../views/ForgotPassword.vue"),
      meta: {
        title: "Olvidaste tu contraseña",
        metaTags: [
          {
            name: "description",
            content: "Has olvidado tu contraseña,no te preocupes nosotors te ayudamos. "
          },
          {
            property: "og:description",
            content: "Has olvidado tu contraseña,no te preocupes nosotors te ayudamos."
          }
        ]
      }
    },
    {
      path: "/NewUser",
      name: "NewUser",
      component: () => import("../views/NewUser.vue"),
      meta: {
        title: "Nuevo Usuario",
        metaTags: [
          {
            name: "description",
            content: "Crea tu perfil de usuario y navega con el. "
          },
          {
            property: "og:description",
            content: "Crea tu perfil de usuario y navega con el."
          }
        ]
      }
    },
    {
      path: "/OptionsNewUser",
      name: "OptionsNewUser",
      component: () => import("../views/OptionsNewUser.vue"),
      meta: {
        title: "Opciones de Usuario",
        metaTags: [
          {
            name: "description",
            content: "Elige entre dar en adopción o adoptar a un Kompi. "
          },
          {
            property: "og:description",
            content: "Elige entre dar en adopción o adoptar a un Kompi."
          }
        ]
      }
    },
    {
      path: "/AboutMe",
      name: "AboutMe",
      component: () => import("../views/AboutMe.vue"),
      meta: {
        title: "Sobre Nosotros",
        metaTags: [
          {
            name: "description",
            content: "Conoce más de nuestra pagina y de nuestro equipo."
          },
          {
            property: "og:description",
            content: "Conoce más de nuestra pagina y de nuestro equipo."
          }
        ]
      }
    },
    {
      path: "/GiveAdoptionInfo",
      name: "GiveAdoptionInfo",
      component: () => import("../views/GiveAdoptionInfo.vue"),
      meta: {
        title: "Guía de Adopción",
        metaTags: [
          {
            name: "description",
            content: "Guía paso de dar en adopción tu Kompi."
          },
          {
            property: "og:description",
            content: "Guía paso de dar en adopción tu Kompi."
          }
        ]
      }
    },
    {
      path: "/AdoptInfo",
      name: "AdoptInfo",
      component: () => import("../views/AdoptInfo.vue"),
      meta: {
        title: "Guía de Adopción",
        metaTags: [
          {
            name: "description",
            content: "Guía paso de adoptar tu Kompi."
          },
          {
            property: "og:description",
            content: "Guía paso de adoptar tu Kompi."
          }
        ]
      }
    },
    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      component: () => import("../views/PrivacyPolicy.vue"),
      meta: {
        title: "Politica y Privacidad",
        metaTags: [
          {
            name: "description",
            content: "Nuestras Politicas y privacidad de la página."
          },
          {
            property: "og:description",
            content: "Nuestras Politicas y privacidad de la página."
          }
        ]
      }
    },
    {
      path: "/Terms&Conditions",
      name: "Terms&Conditions",
      component: () => import("../views/Terms&Conditions.vue"),
      meta: {
        title: "Terminos y Condiciones",
        metaTags: [
          {
            name: "description",
            content: "Nuestros Terminos y Condiciones de la página."
          },
          {
            property: "og:description",
            content: "Nuestros Terminos y Condiciones de la página."
          }
        ]
      }
    },
    {
      path: "/ViewCaptcha",
      name: "ViewCaptcha",
      component: () => import("../views/ViewCaptcha.vue")
    },
    {
      path: "/:pathMach(.*)*",
      component: () => import("../views/Error404.vue"),
      meta: {
        title: "Error 404",
        metaTags: [
          {
            name: "description",
            content: "La página no se ha encontrado o no existe."
          },
          {
            property: "og:description",
            content: "La página no se ha encontrado o no existe."
          }
        ]
      }
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },

});
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement("meta");

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute("data-vue-router-controlled", "");

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});
export default router;
