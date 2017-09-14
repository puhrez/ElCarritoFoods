<template>
	<section class="isolated-nav" :class="{ 'spaced-between': hasProducts }">
		<nav>
		  <router-link to="/products/product/adobo">
                    <button :class="{ 'reserved': getProduct('adobo') }">El Adobo</button></router-link>
		  <router-link to="/products/product/sazon">
                    <button :class="{ 'reserved': getProduct('sazon') }">El Sazón</button></router-link>
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
      'hasProducts',
      'getProduct'
    ])
  }
}

</script>

<style>
</style>
