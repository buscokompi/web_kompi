import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Formulario",
      component: () => import("../views/FormUser.vue")
    },
  ]
});

export default router;
