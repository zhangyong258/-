import router from '@/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// const whitelist = ['/login', '/register', '/404'];

router.beforeEach(async (to, from, next) => {
  NProgress.start(); // 显示进度条
  // if (whitelist.includes(to.path)) return next();
  // const token = localStorage.getItem('TOKEN');
  // if (!token) return next('/login');
  next();
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Own Verse';
  NProgress.done(); // 完成进度条
});
