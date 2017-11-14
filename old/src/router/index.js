import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/components/Logo'
import Menu from '@/components/ui/CarritoMenu'
import Catering from '@/components/Catering'
import Mision from '@/components/Mision'
import Contacto from '@/components/Contacto'
import ElCarrito from '@/components/ElCarrito/ElCarrito'
import ElCarritoSignUp from '@/components/ElCarrito/SignUp'
import Instructions from '@/components/Instructions'

Vue.use(Router)

const router = new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  routes: [
    {
      path: '/',
      name: 'Logo',
      component: Logo
    },
    {
      path: '/menu',
      name: 'Menú',
      component: Menu
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/mision',
      name: 'Mision',
      component: Mision
    },
    {
      path: '/catering',
      name: 'Catering',
      component: Catering
    },
    {
      path: '/instructions',
      name: 'Ayuda',
      component: Instructions
    },
    {
      path: '/el-carrito',
      component: ElCarrito,
      children: [
        {
          name: 'Sign Up',
          path: '',
          component: ElCarritoSignUp
        }
      ]
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
