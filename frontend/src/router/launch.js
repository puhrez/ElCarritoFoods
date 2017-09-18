import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/components/Logo'
import Almuerzo from '@/components/Almuerzo/Almuerzo'
import Catering from '@/components/Catering'
import Mision from '@/components/Mision'
import Products from '@/components/Products/Products'
import ProductsList from '@/components/Products/List'
import ProductsInstructions from '@/components/Products/Instructions'
import Product from '@/components/Products/Product'
import Contacto from '@/components/Contacto'
import Menu from '@/components/ui/CarritoMenu'
import Instructions from '@/components/Instructions'
import AlmuerzoCalendar from '@/components/Almuerzo/Calendar'
import AlmuerzoInstructions from '@/components/Almuerzo/Instructions'
import AlmuerzoDayMenu from '@/components/Almuerzo/Menu'
import OrderReview from '@/components/ui/OrderReview'

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
      path: '/instructions',
      name: 'Instructions',
      component: Instructions
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
      path: '/products',
      component: Products,
      children: [
        {
          path: '',
          name: 'Products',
          component: ProductsInstructions
        },
        {
          path: 'list',
          component: ProductsList
        },
        {
          path: 'product/:name',
          component: Product
        }
      ]
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
      name: 'Pedido',
      path: '/order-review',
      component: OrderReview
    },
    {
      path: '/almuerzo',
      component: Almuerzo,
      children: [
        {
          name: 'Almuerzo Instructions',
          path: '',
          component: AlmuerzoInstructions
        },
        {
          name: 'Menú del día',
          path: 'menu/:day',
          component: AlmuerzoDayMenu
        },
        {
          name: 'Almuerzo Calendario',
          path: 'calendar',
          component: AlmuerzoCalendar
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
