// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ShoppingCartIcon from '@/components/ui/ShoppingCartIcon'
import OrderButton from '@/components/ui/OrderButton'
import Logo from '@/components/Logo'

Vue.component('logo', Logo)
Vue.component('order-button', OrderButton)
Vue.component('shopping-cart', ShoppingCartIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
