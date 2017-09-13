<template>
  <section id="products">
    <products-nav class="large" v-if="$route.path !== '/products/list'"></products-nav>
    <article v-if="$route.path === '/products'">
      <header>
	<h2>Productos</h2>
        <shopping-cart v-show="!isEmpty()"></shopping-cart>
      </header>
      <hr>
      <p>¡Cociná como el Carrito!</p>
      <p>De sazonar a platear, los productos culinarios del Carrito son partes esenciales de una cocina moderna y creativa.</p>
    </article>
    <router-view :key="$route.path" :class="{ 'spaced-between': hasProducts }" v-else></router-view>
    <products-nav class="small" v-if="$route.path !== '/products/list'"></products-nav>

  </section>
</template>

<script>
import ProductsList from './List'
import ProductsNav from './Nav'
import { mapGetters } from 'vuex'

export default {
  name: 'products',
  components: {
    ProductsList,
    ProductsNav
  },
  computed: {
    ...mapGetters([
      'hasProducts',
      'isEmpty'
    ])
  }
}

</script>
