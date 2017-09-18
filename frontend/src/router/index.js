import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'

Vue.use(Router)

const router = new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  routes: [
    {
      path: '/',
      component: SignUp,
      name: 'SignUp'
    },
    {
      path: '*', redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  router.history.previous = from
  next()
})
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
