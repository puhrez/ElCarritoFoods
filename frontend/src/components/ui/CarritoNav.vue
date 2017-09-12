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
export default {
  name: 'carrito-nav',
  data () {
    let prev = this.$route.matched[this.$route.matched.length - 1]
    return {
      appropriateRoute: prev ? {path: '/menu', name: 'Menú'} : prev
    }
  },
  watch: {
    '$route' (to, from) {
      if (from.path.split('/').length <= to.path.split('/').length) {
        this.appropriateRoute = {path: from.path, name: from.path === '/menu' || from.path === '/' ? 'Menú' : 'Volver'}
      }
    }
  }
}
  </script>
