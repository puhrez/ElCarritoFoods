<template>
  <section id="product-list">
    <article>
      <header>
        <h2>Catálogo</h2>
        <shopping-cart></shopping-cart>
      </header>
      <section class="isolated-nav">
        <nav v-if="products">
          <router-link v-for="product in products"
                       :key="product"
                       :reserved="isReserved(product)"
                       :to="`/products/product/${product}`">
            <button :class="{'reserved': isReserved() }">{{ product }}
            </button>
          </router-link>
        </nav>
        <h2 v-else>Estos vagos no tienen ná</h2>
      </section>
      </article>
    <order-button></order-button>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import Fullscreen from '../mixins/Fullscreen'

export default {
  name: 'products-list',
  mixins: [Fullscreen],
  data () {
    return {
      products: []
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    isReserved (p) {
      return this.getProduct(p)
    },
    getProducts () {
      this.products = [
        'el adobo',
        'el sazón'
      ]
    }
  },
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
