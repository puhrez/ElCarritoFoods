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
    let rootRoutePath = this.$route.matched[0]
    return {
      appropriateRoute: this.$route.path.split('/').length > 2 ? {path: rootRoutePath, name: 'Volver'} : menuRoute
    }
  },
  watch: {
    '$route' (to, from) {
      let toDepth = to.path.split('/').length
      if (toDepth === 3) {
        this.appropriateRoute = {path: from.path, name: 'Volver'}
      }
      if (to.path === '/menu' || toDepth === 2) {
        this.appropriateRoute = menuRoute
      }
    }
  }
}
</script>
