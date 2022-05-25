import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/login.vue")
    },
    {
      path: "/OptionsNewUser",
      name: "OptionsNewUser",
      component: () => import("../views/OptionsNewUser.vue")
    },

    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      component: () => import("../views/PrivacyPolicy.vue")
    },

    {
      path: "/Aboutme",
      name: "Aboutme",
      component: () => import("../views/Aboutme.vue")
    },
  ]
});

export default router;
