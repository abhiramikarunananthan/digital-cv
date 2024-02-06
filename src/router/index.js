import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',  // New route for projects
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')  // Assuming you have a ProjectsView component
    },
    {
      path: '/weeeve',  // New route for projects
      name: 'weeeve',
      component: () => import('../views/Weeeve.vue')  // Assuming you have a ProjectsView component
    },
    {
      path: '/smartmat',  // New route for projects
      name: 'smartmat',
      component: () => import('../views/Smartmat.vue')  // Assuming you have a ProjectsView component
    }
  ]
})

export default router
