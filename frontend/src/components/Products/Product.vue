<template>
  <section id="product">
    <article>
      <header>
	<h2>{{ $route.params.name }}</h2>
        <shopping-cart></shopping-cart>
      </header>
      <hr>
      <section class="product-description">
	<p>{{ product.description }}</p>
        <p>${{ price }}</p>
      </section>
      <quantity label="Cantidad" :quantity="quantity" @change="quantityChange"></quantity>
      <button v-show="quantity > 0" class="item-action-btn" :disabled="reserved" :class="{doable: !reserved}" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
    </article>
  </section>
</template>

<script>

import Quantity from '@/components/ui/Quantity'
import { mapGetters } from 'vuex'

export default {
  name: 'productos-product',
  components: {
    Quantity
  },
  data () {
    let reserved = this.$store.getters.getProduct(this.$route.params.name)
    return {
      reserved: !!reserved,
      quantity: reserved ? reserved.quantity : 0
    }
  },
  computed: {
    product () {
      return {
        description: 'Sabe a pelo de gato.',
        price: 5,
        name: this.$route.params.name
      }
    },
    price () {
      return this.quantity === 0 ? this.product.price : this.product.price * this.quantity
    },
    ...mapGetters([
      'isEmpty'
    ])
  },
  watch: {
    'quantity' (to, from) {
      this.reserved = false
      if (to === 0) {
        this.$store.commit('REMOVE_FROM_CART',
                           this.$route.params.name)
      }
    }
  },
  methods: {
    reserve () {
      this.reserved = true
      this.$store.commit(
        'ADD_TO_CART',
        { name: this.product.name,
          price: this.product.price,
          quantity: this.quantity }
     )
    },
    quantityChange (newQuantity) {
      this.quantity = newQuantity
    }
  }
}
</script>
