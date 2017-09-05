import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/components/Logo'
import ParaLlevar from '@/components/ParaLlevar'
import Catering from '@/components/Catering'
import Mision from '@/components/Mision'
import Productos from '@/components/Productos'
import Contacto from '@/components/Contacto'
import Menu from '@/components/ui/CarritoMenu'

Vue.use(Router)

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  routes: [
    {
      path: '/',
      name: 'Logo',
      component: Logo
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/productos',
      name: 'Productos',
      component: Productos
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
      component: ParaLlevar
    },

    {
      path: '*', redirect: '/'
    }
  ]
})
