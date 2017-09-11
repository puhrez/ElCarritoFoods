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
		<router-view :class="{ 'spaced-between': !!Object.keys(cart).length }" :items="cart" @reserve="addToCart" @unreserve="removeFromCart" v-else></router-view>
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
      cart: {}
    }
  },
  components: {
    ProductsList,
    ProductsNav
  },
  methods: {
    addToCart (product, quantity) {
      this.cart[product] = quantity || 1
    },
    removeFromCart (product) {
      delete this.cart[product]
      if (!Object.keys(this.cart).length && !this.$route.path.includes('product')) { this.$router.push('/products') }
    }
  }
}

</script>
