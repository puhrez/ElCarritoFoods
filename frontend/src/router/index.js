import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/components/Logo'
import ParaLlevar from '@/components/ParaLlevar/ParaLlevar'
import Catering from '@/components/Catering'
import Mision from '@/components/Mision'
import Products from '@/components/Products/Products'
import ProductsList from '@/components/Products/List'
import Product from '@/components/Products/Product'
import Contacto from '@/components/Contacto'
import Menu from '@/components/ui/CarritoMenu'
import ParaLlevarCalendar from '@/components/ParaLlevar/Calendar'
import ParaLlevarDayMenu from '@/components/ParaLlevar/Menu'
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
      name: 'Products',
      component: Products,
      children: [
        {
          path: 'list',
          component: ProductsList
        },
        {
          path: 'product/:name',
          component: Product
        },
        {
          path: 'order-review',
          component: OrderReview
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
      path: '/para-llevar',
      name: 'Para Llevar',
      component: ParaLlevar,
      children: [
        {
          path: 'menu/:day',
          component: ParaLlevarDayMenu
        },
        {
          path: 'calendar',
          component: ParaLlevarCalendar
        },
        {
          path: 'order-review',
          component: OrderReview
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

export default router
