import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainPage.vue"),
      meta: {
        title: "Kompi | Buscador de animales",
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
        title: "Kompi | Filtro de búsqueda",
        metaTags: [
          {
            name: "description",
            content: "Elige quién será tu próximo Kompi entre una gran variedad de animales."
          },
          {
            property: "og:description",
            content: "Elige quién será tu próximo Kompi entre una gran variedad de animales."
          }
        ]
      }
    },
    {
      path: "/FormUser",
      name: "FormUser",
      component: () => import("../views/FormUser.vue"),
      meta: {
        title: "Kompi | Formulario usuario",
        metaTags: [
          {
            name: "description",
            content: "Rellena el formulario que será facilitado al cuidador del animal que te interesa."
          },
          {
            property: "og:description",
            content: "Rellena el formulario que será facilitado al cuidador del animal que te interesa."
          }
        ]
      }
    },
    {
      path: "/FormUserEdit",
      name: "FormUserEdit",
      component: () => import("../views/FormUserEdit.vue"),
      meta: {
        title: "Kompi | Edita tu formulario",
        metaTags: [
          {
            name: "description",
            content: "Edita el formulario que has rellenado previamente y actualiza tus respuestas en cualquier momento."
          },
          {
            property: "og:description",
            content: "Edita el formulario que has rellenado previamente y actualiza tus respuestas en cualquier momento."
          }
        ]
      }
    },
    {
      path: "/TemplateCat",
      name: "TemplateCat",
      component: () => import("../views/TemplateCat.vue"),
      meta: {
        title: "Kompi | Buscador de gatos",
        metaTags: [
          {
            name: "description",
            content: "Busca y elige a tu próximo felino."
          },
          {
            property: "og:description",
            content: "Busca y elige a tu próximo felino."
          }
        ]
      }
    },
    {
      path: "/TemplateDog",
      name: "TemplateDoge",
      component: () => import("../views/TemplateDog.vue"),
      meta: {
        title: "Kompi | Buscador de perros",
        metaTags: [
          {
            name: "description",
            content: "Busca y elige a tu próximo canino."
          },
          {
            property: "og:description",
            content: "Busca y elige a tu próximo canino."
          }
        ]
      }
    },
    {
      path: "/TemplateReptile",
      name: "TemplateReptile",
      component: () => import("../views/TemplateReptile.vue"),
      meta: {
        title: "Kompi | Buscador de reptiles",
        metaTags: [
          {
            name: "description",
            content: "Busca y elige a tu próximo reptil."
          },
          {
            property: "og:description",
            content: "Busca y elige a tu próximo reptil."
          }
        ]
      }
    },
    {
      path: "/TemplateBird",
      name: "TemplateBird",
      component: () => import("../views/TemplateBird.vue"),
      meta: {
        title: "Kompi | Buscador de aves",
        metaTags: [
          {
            name: "description",
            content: "Busca y elige a tu próxima ave."
          },
          {
            property: "og:description",
            content: "Busca y elige a tu próxima ave."
          }
        ]
      }
    },
    {
      path: "/TemplateRodent",
      name: "TemplateRodent",
      component: () => import("../views/TemplateRodent.vue"),
      meta: {
        title: "Kompi | Buscador de roedores",
        metaTags: [
          {
            name: "description",
            content: "Busca y elige a tu próximo roedor."
          },
          {
            property: "og:description",
<<<<<<< HEAD
            content: "Mira y elige tu Kompi Roedor.."
=======
            content: "Busca y elige a tu próximo roedor."
>>>>>>> atteneri
          }
        ]
      }
    },
    {
      path: "/FormCard",
      name: "FormCard",
      component: () => import("../views/FormCard.vue"),
      meta: {
        title: "Kompi | Crear ficha adopción",
        metaTags: [
          {
            name: "description",
            content: "Agrega a tu mascota para darla en adopción."
          },
          {
            property: "og:description",
            content: "Agrega a tu mascota para darla en adopción."
          }
        ]
      }
    },
    {
      path: "/LogIn",
      name: "LogIn",
      component: () => import("../views/LogIn.vue"),
      meta: {
        title: "Kompi | Inicio de sesión",
        metaTags: [
          {
            name: "description",
            content: "Inicia sesión y ten acceso a los servicios de adopción de Kompi."
          },
          {
            property: "og:description",
            content: "Inicia sesión y ten acceso a los servicios de adopción de Kompi."
          }
        ]
      }
    },
    {
      path: "/SignIn",
      name: "SignIn",
      component: () => import("../views/SignIn.vue"),
      meta: {
        title: "Kompi | Registro de usuario",
        metaTags: [
          {
            name: "description",
            content: "Crea tu cuenta y ten acceso a los servicios de adopción de Kompi."
          },
          {
            property: "og:description",
            content: "Crea tu cuenta y ten acceso a los servicios de adopción de Kompi."
          }
        ]
      }
    },
    {
      path: "/ForgotPassword",
      name: "ForgotPassword",
      component: () => import("../views/ForgotPassword.vue"),
      meta: {
        title: "Kompi | ¿Olvidaste la contraseña?",
        metaTags: [
          {
            name: "description",
            content: "¿Has olvidado tu contraseña? No te preocupes nosotros te ayudamos."
          },
          {
            property: "og:description",
            content: "¿Has olvidado tu contraseña? No te preocupes nosotros te ayudamos."
          }
        ]
      }
    },
    {
      path: "/NewUser",
      name: "NewUser",
      component: () => import("../views/NewUser.vue"),
      meta: {
        title: "Kompi | Registro de perfil",
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
        title: "Kompi | ¿Adoptar o dar en adopción?",
        metaTags: [
          {
            name: "description",
            content: "Elige entre adoptar o dar en adopción a un animal. "
          },
          {
            property: "og:description",
            content: "Elige entre adoptar o dar en adopción a un animal."
          }
        ]
      }
    },
    {
      path: "/AboutMe",
      name: "AboutMe",
      component: () => import("../views/AboutMe.vue"),
      meta: {
        title: "Kompi | Sobre nosotros",
        metaTags: [
          {
            name: "description",
            content: "Conoce más sobre nuestra página y nuestro equipo."
          },
          {
            property: "og:description",
            content: "Conoce más sobre nuestra página y nuestro equipo."
          }
        ]
      }
    },
    {
      path: "/GiveAdoptionInfo",
      name: "GiveAdoptionInfo",
      component: () => import("../views/GiveAdoptionInfo.vue"),
      meta: {
        title: "Kompi | Dar en adopción",
        metaTags: [
          {
            name: "description",
            content: "Guía paso a paso para dar en adopción fácilmente a tu mascota en nuestra plataforma."
          },
          {
            property: "og:description",
            content: "Guía paso a paso para dar en adopción fácilmente a tu mascota en nuestra plataforma."
          }
        ]
      }
    },
    {
      path: "/AdoptInfo",
      name: "AdoptInfo",
      component: () => import("../views/AdoptInfo.vue"),
      meta: {
        title: "Kompi | Adoptar",
        metaTags: [
          {
            name: "description",
            content: "Guía paso a paso para adoptar fácilmente a tu nueva mascota en nuestra plataforma."
          },
          {
            property: "og:description",
            content: "Guía paso a paso para adoptar fácilmente a tu nueva mascota en nuestra plataforma."
          }
        ]
      }
    },
    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      component: () => import("../views/PrivacyPolicy.vue"),
      meta: {
        title: "Kompi | Política y privacidad",
        metaTags: [
          {
            name: "description",
            content: "Política y privacidad en Kompi."
          },
          {
            property: "og:description",
            content: "Política y privacidad en Kompi."
          }
        ]
      }
    },
    {
      path: "/Terms&Conditions",
      name: "Terms&Conditions",
      component: () => import("../views/Terms&Conditions.vue"),
      meta: {
        title: "Kompi | Términos y condiciones",
        metaTags: [
          {
            name: "description",
            content: "Términos y condiciones de los servicios de Kompi."
          },
          {
            property: "og:description",
            content: "Términos y condiciones de los servicios de Kompi."
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
        title: "Kompi | ¡Algo no ha ido como debía!",
        metaTags: [
          {
            name: "description",
            content: "¡Algo no ha ido como debía! La página que buscas no se encuentra disponible o no existe."
          },
          {
            property: "og:description",
            content: "¡Algo no ha ido como debía! La página que buscas no se encuentra disponible o no existe."
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
