<template>
		<nav>
			<router-link class="small" to="/products/list"><button>Productos</button></router-link>
			<router-link class="large" to="/products/product/adobo"><button>El Adobo</button></router-link>
			<router-link class="large" to="/products/product/sazon"><button>El Sazón</button></router-link>
			<router-link class="small" v-if="$store.getters.hasProducts()" to="/order-review"><button class="doable">Ordenar</button></router-link>
		</nav>
</template>

<script>

export default {
  name: 'products-list'
}

</script>

<style>
</style>
