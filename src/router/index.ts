import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EnterIT from '../views/EnterIT.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enterit',
    name: 'EnterIT',
    component: EnterIT
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
