<template>
  <nav class="primary">
    <router-link class="small center" :to="appropriateRoute.path"><button>{{appropriateRoute.name}}</button></router-link>
    <router-link class="large" to="/para-llevar"><button>Para llevar</button></router-link>
    <router-link class="large" to="/products"><button >Productos</button></router-link>
    <router-link class="large" to="/catering"><button>Catering</button></router-link>
    <router-link class="large" to="/mision"><button>Misión</button></router-link>
    <router-link class="large" to="/contacto"><button>Contacto</button></router-link>
  </nav>
</template>


<script>

const menuRoute = {path: '/menu', name: 'Menú'}

export default {
  name: 'carrito-nav',
  data () {
    let prev = this.$route.matched[this.$route.matched.length - 1]
    return {
      appropriateRoute: prev ? menuRoute : prev
    }
  },
  watch: {
    '$route' (to, from) {
      let toDepth = to.path.split('/').length
      if (to.path === this.appropriateRoute.path && this.$route.matched.length > 1) {
        this.appropriateRoute = {
          path: this.$route.matched[this.$route.matched.length - 2].path,
          name: 'Volver'
        }
      }
      if (from.path.split('/').length <= toDepth) {
        this.appropriateRoute = {
          path: from.path,
          name: from.path === '/menu' || from.path === '/' ? 'Menú' : 'Volver'}
      }
      if (to.path === '/menu' || toDepth === 2) {
        this.appropriateRoute = menuRoute
      }
    }
  }
}
</script>
