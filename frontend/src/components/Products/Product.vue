<template>
  <section id="product">
    <article>
      <header>
	<h2>{{ $route.params.name }}</h2>
        <shopping-cart v-show="!$store.getters.isEmpty()"></shopping-cart>
      </header>
      <hr>
      <section class="product-description">
	<p>{{ description }}</p>
      </section>
      <br>
      <quantity label="Cantidad" :quantity="quantity" @change="quantityChange"></quantity>
      <button v-show="quantity > 0" class="item-action-btn" :disabled="reserved" :class="{doable: !reserved}" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
    </article>
  </section>
</template>

<script>

import Quantity from '@/components/ui/Quantity'

export default {
  name: 'productos-product',
  components: {
    Quantity
  },
  data () {
    let reserved = this.$store.getters.getProduct(this.$route.params.name)
    return {
      reserved: !!reserved,
      quantity: reserved || 0
    }
  },
  computed: {
    description () {
      return 'Sabe a pelo de gato.'
    }
  },
  watch: {
    'quantity' (to, from) {
      if (this.reserved) {
        this.reserved = false
        this.$store.commit('REMOVE_FROM_CART',
                           this.$route.params.name)
      }
    }
  },
  methods: {
    reserve () {
      this.reserved = true
      this.$store.commit('ADD_TO_CART', {
        product: this.$route.params.name,
        quantity: this.quantity})
    },
    quantityChange (newQuantity) {
      this.quantity = newQuantity
    }
  }
}
</script>
