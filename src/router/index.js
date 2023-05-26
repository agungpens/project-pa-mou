import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Document from '../views/DocumentView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/document',
    name: 'document',
    component: Document,
    meta: {
      title: 'Document'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// title custom
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
