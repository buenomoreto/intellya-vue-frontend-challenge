import { createRouter, createWebHistory } from 'vue-router'
import ListingView from '../views/ListingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listing',
      component: ListingView
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
