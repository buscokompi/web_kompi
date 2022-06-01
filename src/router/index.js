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
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/FilterAnimals",
      name: "FilterAnimals",
      component: () => import("../views/FilterAnimals.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/FormUser",
      name: "FormUser",
      component: () => import("../views/FormUser.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/FormUserEdit",
      name: "FormUserEdit",
      component: () => import("../views/FormUserEdit.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/TemplateCat",
      name: "TemplateCat",
      component: () => import("../views/TemplateCat.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/TemplateDog",
      name: "TemplateDoge",
      component: () => import("../views/TemplateDog.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/TemplateReptile",
      name: "TemplateReptile",
      component: () => import("../views/TemplateReptile.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/TemplateBird",
      name: "TemplateBird",
      component: () => import("../views/TemplateBird.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/TemplateRodent",
      name: "TemplateRodent",
      component: () => import("../views/TemplateRodent.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/NewAnimalForm",
      name: "NewAnimalForm",
      component: () => import("../views/NewAnimalForm.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/FormCard",
      name: "FormCard",
      component: () => import("../views/FormCard.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/login.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/Signin",
      name: "Signin",
      component: () => import("../views/Signin.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/ForgotPassword",
      name: "ForgotPassword",
      component: () => import("../views/ForgotPassword.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/NewUser",
      name: "NewUser",
      component: () => import("../views/NewUser.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/OptionsNewUser",
      name: "OptionsNewUser",
      component: () => import("../views/OptionsNewUser.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/AboutMe",
      name: "AboutMe",
      component: () => import("../views/AboutMe.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/GiveAdoptionInfo",
      name: "GiveAdoptionInfo",
      component: () => import("../views/GiveAdoptionInfo.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/AdoptInfo",
      name: "AdoptInfo",
      component: () => import("../views/AdoptInfo.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      component: () => import("../views/PrivacyPolicy.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/Terms&Conditions",
      name: "Terms&Conditions",
      component: () => import("../views/Terms&Conditions.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/:pathMach(.)",
      component: () => import("../views/Error404.vue"),
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
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
