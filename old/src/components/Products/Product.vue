<template>
  <section class="program-page" id="product">
    <article v-if="product">
      <header>
	<h2>{{ $route.params.name }}</h2>
        <shopping-cart :price="price"></shopping-cart>
      </header>
      <section>
        <p>{{ product.description }}</p>
       </section>
    </article>
    <article v-else>
      <h2>Esto no existe</h2>
    </article>
    <div>
      <quantity label="Cantidad" :quantity="quantity" @change="quantityChange"></quantity>
      <button class="item-action-btn" :disabled="isReserved" :class="{doable: !isReserved, 'hidden': quantity === 0}" @click="reserve">{{ isReserved ? 'Reservado' : 'Reservar' }}</button>
    </div>
    <almuerzo-nav class="small"></almuerzo-nav>
  </section>
</template>

<script>
import AlmuerzoNav from './Nav'
import Quantity from '@/components/ui/Quantity'
import Fullscreen from '../mixins/Fullscreen'
import { mapGetters } from 'vuex'

export default {
  name: 'productos-product',
  mixins: [Fullscreen],
  props: ['reserved'],
  components: {
    Quantity,
    AlmuerzoNav
  },
  data () {
    let reservation = this.$store.getters.getProduct(this.$route.params.name)
    return {
      isReserved: !!reservation,
      quantity: reservation ? reservation.quantity : 1,
      product: {}
    }
  },
  created () {
    this.getProduct()
  },
  computed: {
    price () {
      return this.quantity === 0 ? this.product.price : this.product.price * this.quantity
    },
    ...mapGetters([
      'isEmpty'
    ])
  },
  watch: {
    'quantity' (to, from) {
      if (to === 0) {
        this.$store.commit('REMOVE_FROM_CART',
                           this.$route.params.name)
      }
    }
  },
  methods: {
    reserve () {
      this.isReserved = true
      this.$store.commit(
        'ADD_TO_CART',
        { name: this.product.name,
          price: this.product.price,
          quantity: this.quantity }
     )
    },
    getProduct () {
      this.product = {
        description: 'Sabe a pelo de gato.',
        price: 5,
        name: this.$route.params.name
      }
    },
    quantityChange (newQuantity) {
      this.isReserved = false
      this.quantity = newQuantity
    }
  }
}
</script>
