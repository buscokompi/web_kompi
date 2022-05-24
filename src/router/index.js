import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/ForgotPassword.vue")
    },
    {
      path: "/FilterAnimals",
      name: "FilterAnimals",
      component: () => import("../views/FilterAnimals.vue")
    },
    {
      path: "/TemplateDogPage",
      name: "TemplateDogPage",
      component: () => import("../views/TemplateDogPage.vue")
    },
  ]
});

export default router;
