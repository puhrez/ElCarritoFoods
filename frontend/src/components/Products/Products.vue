<template>
	<section id="products">
		<article v-if="$route.path === '/products'">
			<header>
				<h2>Productos</h2>
				<hr>
			</header>
			<p>¡Cociná como el Carrito!</p>
			<p>De sazonar a platear, los productos culinarios del Carrito son partes esenciales de una cocina moderna y creativa.</p>
		</article>
		<router-view :class="{ 'spaced-between': $store.getters.hasProducts() }" v-else></router-view>
		<products-nav class="small" v-if="$route.path !== '/products/list' && $route.path !== '/products/order-review'"></products-nav>
		<products-list class="large"></products-list>
	</section>
</template>

<script>
import ProductsList from './List'
import ProductsNav from './Nav'

export default {
  name: 'products',
  components: {
    ProductsList,
    ProductsNav
  }
}

</script>
