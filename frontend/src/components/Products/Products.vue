<template>
	<section id="products">
		<article v-if="$route.path === '/products'">
			<header>
				<h2>Productos</h2>
			</header>
			<p>¡Cociná como el Carrito! </p>
			<p>Nuestros productos culinarios están hechos para elevar y apoyar cualquier plato.</p>
			<p> Del sazonar al aderezar, los productos del Carrito son ingredientes esenciales de una cocina moderna y creativa.</p>
		</article>
		<router-view :class="{ 'spaced-between': !!cart.size }" :items="cart" @reserve="addToCart" @unreserve="removeFromCart" v-else></router-view>
		<products-nav class="small" :items="cart" v-if="$route.path !== '/products/list' && $route.path !== '/products/order-review'"></products-nav>
		<products-list :items="cart" class="large"></products-list>
	</section>
</template>

<script>
import ProductsList from './List'
import ProductsNav from './Nav'

export default {
  name: 'products',
  data () {
    return {
      cart: new Set()
    }
  },
  components: {
    ProductsList,
    ProductsNav
  },
  methods: {
    addToCart (product) {
      this.cart.add(product)
    },
    removeFromCart (product) {
      this.cart.delete(product)
      if (!this.cart.size && !this.$route.path.includes('menu')) { this.$router.push('/products') }
    }
  }
}

</script>
