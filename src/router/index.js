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
  ]
});

export default router;
