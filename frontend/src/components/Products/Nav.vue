<template>
		<nav>
			<router-link class="small" to="/products/list"><button>Catálogo</button></router-link>
			<router-link class="large" to="/products/product/adobo"><button>El Adobo</button></router-link>
			<router-link class="large" to="/products/product/sazon"><button>El Sazón</button></router-link>
			<router-link class="large" v-if="hasProducts" to="/order-review"><button class="doable">Ordenar</button></router-link>
		</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'products-list',
  computed: {
    ...mapGetters([
      'hasProducts'
    ])
  }
}

</script>

<style>
</style>
