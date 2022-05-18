import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CategoriesPage.vue')
    },
    {
      path: '/TemplatePage',
      name: 'Template',
      component: () => import('../views/TemplatePage.vue')
    },
  ]
})

export default router