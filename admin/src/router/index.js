import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Almuerzos from '@/components/Almuerzo/Almuerzos'
import AlmuerzoMenu from '@/components/Almuerzo/Menus'
import AlmuerzoMenus from '@/components/Almuerzo/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/almuerzo',
      name: 'Almuerzo',
      component: Almuerzos,
      children: [
        {
          path: '',
          component: AlmuerzoMenus
        },
        {
          path: 'menu/:date',
          component: AlmuerzoMenu
        }
      ]
    }
  ]
})
