<template>
  <nav class="primary">
    <nuxt-link class="small center" :to="appropriateRoute.path"><button>{{appropriateRoute.name}}</button></nuxt-link>
  </nav>
</template>


<script>

const menuRoute = {path: '/menu', name: 'Menú'}
const instructionsRoute = {path: '/instructions', name: 'Ayuda'}

export default {
  name: 'carrito-nav',
  data () {
    let rootRoutePath = this.$route.matched[0].path
    if (rootRoutePath === '/menu') {
      return {
        appropriateRoute: instructionsRoute
      }
    }
    return {
      appropriateRoute: menuRoute
    }
  },
  watch: {
    '$route.path' (to, from) {
      let toDepth = to.split('/').length
      if (to === '/order-review' || (from === '/order-review' && to !== '/menu')) {
        this.appropriateRoute = {path: from, name: 'Volver'}
      } else if (toDepth >= 2) {
        this.appropriateRoute = to === '/menu' ? instructionsRoute : menuRoute
      }
    }
  }
}
</script>
