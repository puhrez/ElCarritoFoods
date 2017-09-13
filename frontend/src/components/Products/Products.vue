<template>
  <section id="products">
    <products-nav class="large" v-show="$route.path !== '/products/list'"></products-nav>
    <article v-if="$route.path === '/products'">
      <header>
	<h2>Productos</h2>
        <shopping-cart v-show="!$store.getters.isEmpty()"></shopping-cart>
      </header>
      <hr>
      <p>¡Cociná como el Carrito!</p>
      <p>De sazonar a platear, los productos culinarios del Carrito son partes esenciales de una cocina moderna y creativa.</p>
    </article>
    <router-view :key="$route.path" :class="{ 'spaced-between': $store.getters.hasProducts() }" v-else></router-view>
    <products-nav class="small" v-show="$route.path !== '/products/list'"></products-nav>

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
