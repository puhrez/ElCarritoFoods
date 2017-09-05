<template>
  <nav class="primary">
		<router-link class="small center" :to="appropriate_route.path"><button>{{appropriate_route.name}}</button></router-link>
		<router-link class="large" to="/para-llevar"><button>Para llevar</button></router-link>
    <router-link class="large" to="/productos"><button >Productos</button></router-link>
    <router-link class="large" to="/catering"><button>Catering</button></router-link>
    <router-link class="large" to="/mision"><button>Misión</button></router-link>
    <router-link class="large" to="/contacto"><button>Contacto</button></router-link>
	</nav>
</template>

<script>

export default {
  name: 'carrito-nav',
  data () {
    let path = this.$route.path.split('/')
    let startupPath = path.length > 2 ? {path: '/' + path[path.length - 2], name: 'Volver'} : {path: '/menu', name: 'Menu'}

    return {
      appropriate_route: startupPath
    }
  },
  computed: {
    start_up_route () {
    }
  },
  watch: {
    '$route' (to, from) {
      let path = to.path.split('/')
      if (to.name === 'Menu' || path.length <= 2) {
        this.appropriate_route = {path: '/menu', name: 'Menu'}
      } else { this.appropriate_route = {path: path.slice(0, path.length - 1).join('/'), name: 'Volver'} }
    }
  }
}
</script>

<style>
</style>
