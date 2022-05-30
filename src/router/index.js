import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainPage.vue")
    },
    {
      path: "/FilterAnimals",
      name: "FilterAnimals",
      component: () => import("../views/FilterAnimals.vue")
    },
    {
      path: "/FormUser",
      name: "FormUser",
      component: () => import("../views/FormUser.vue")
    },
    {
      path: "/TemplatePageDog",
      name: "TemplateDog",
      component: () => import("../views/TemplateDogPage.vue")
    },
    {
      path: "/TemplatePageReptile",
      name: "TemplateReptile",
      component: () => import("../views/TemplateReptilePage.vue")
    },
    {
      path: "/TemplatePageBird",
      name: "TemplateBird",
      component: () => import("../views/TemplateBirdPage.vue")
    },
    {
      path: "/TemplatePageRodent",
      name: "TemplateRodent",
      component: () => import("../views/TemplateRodentPage.vue")
    },
    {
      path: "/NewAnimalForm",
      name: "NewAnimalForm",
      component: () => import("../views/NewAnimalForm.vue"),
      children: [
        {
          path: "saludo",
          component: () => import("../views/NewAnimalForm.vue")
        },
        {
          path: "otroSaludo",
          component: () => import("../views/NewAnimalForm.vue")
        },
        {
          path: "formularioEjemplo",
          component: () => import("../views/formularioEjemplo.vue")
        }
      ]
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/login.vue")
    },
    {
      path: "/Signin",
      name: "Signin",
      component: () => import("../views/Signin.vue")
    },
    {
      path: "/ForgotPassword",
      name: "ForgotPassword",
      component: () => import("../views/ForgotPassword.vue")
    },
    {
      path: "/NewUser",
      name: "NewUser",
      component: () => import("../views/NewUser.vue")
    },
    {
      path: "/OptionsNewUser",
      name: "OptionsNewUser",
      component: () => import("../views/OptionsNewUser.vue")
    },
    {
      path: "/FormUser",
      name: "FormUser",
      component: () => import("../views/FormUser.vue")
    },

    {
      path: "/AboutMe",
      name: "AboutMe",
      component: () => import("../views/Aboutme.vue")
    },
    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      component: () => import("../views/PrivacyPolicy.vue")
    },
    {
      path: "/Terms&Conditions",
      name: "Terms&Conditions",
      component: () => import("../views/Terms&Conditions.vue")
    },
    {
      path: "/Adopcion",
      name: "Adopcion",
      component: () => import("../views/Adopcion.vue")
    },

    {
      path: "/Adoptar",
      name: "Adoptar",
      component: () => import("../views/Adoptar.vue")
    }

  ]
});

export default router;
