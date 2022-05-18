import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// const whitelist = ['/', '/login', '/register', '/404']

router.beforeEach(async (to, from, next) => {
  NProgress.start() // 显示进度条
  next()
})

router.afterEach(() => {
  NProgress.done() // 完成进度条
})
