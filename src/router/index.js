import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from '../components/baseLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/article/index.vue')
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/resume/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
