import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseLayout from '../components/baseLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {},
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/article/index.vue'),
        meta: {
          title: '文章',
        },
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/resume/index.vue'),
        meta: {
          title: '简历',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
