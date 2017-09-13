<template>
	<section class="isolated-nav">
		<nav>
			<router-link to="/products/product/adobo"><button>El Adobo</button></router-link>
			<router-link to="/products/product/sazon"><button>El Sazón</button></router-link>
		</nav>
		<router-link class="small" v-if="hasProducts" to="/order-review"><button class="doable">Ordenar</button></router-link>
	</section>
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
