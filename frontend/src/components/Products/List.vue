<template>
	<section class="isolated-nav">
		<nav>
			<router-link to="/products/product/adobo"><button>El Adobo</button></router-link>
			<router-link to="/products/product/sazon"><button>El Sazón</button></router-link>
		</nav>
		<router-link class="small" v-if="$store.getters.hasProducts()" to="/products/order-review"><button class="doable">Ordenar</button></router-link>
	</section>
</template>

<script>

export default {
  name: 'products-list',
  props: ['items']
}

</script>

<style>
</style>
