import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Newuser.vue")
    },
    // {
    //   path: "/newuser",
    //   name: "homenewuser",
    //   component: () => import("../views/Newuser.vue")
    // },

  ]
});

export default router;
