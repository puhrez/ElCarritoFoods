<template>
  <section id="para-llevar-menu">
    <article>
      <header>
	<h2>{{ $route.params.day }}</h2>
        <shopping-cart></shopping-cart>
      </header>
      <hr>
      <ol>
	<li v-for="item in menu.items">{{ item }}</li>
      </ol>
      <p>${{ quantity ? menu.price * quantity : menu.price }}</p>
      <quantity label="Ordenes" :quantity="quantity" @change="quantityChange"></quantity>
      <button v-show="quantity > 0" class="item-action-btn" :disabled="reserved" :class="{doable: !reserved}" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
    </article>
  </section>
</template>

<script>

import Quantity from '@/components/ui/Quantity'
import { mapGetters } from 'vuex'

export default {
  name: 'para-llevar-day-menu',
  data () {
    let reserved = this.$store.getters.getReservation(this.$route.params.day)
    return {
      reserved: !!reserved,
      quantity: reserved ? reserved.quantity : 0
    }
  },
  components: {
    Quantity
  },
  computed: {
    menu () {
      return {
        items: ['concha en salsa verde', 'penne pasta', 'pene de búfalo', 'flan'],
        price: 5
      }
    },
    ...mapGetters([
      'isEmpty'
    ])
  },
  watch: {
    'quantity' (to, from) {
      this.reserved = false
      if (to === 0) {
        this.$store.commit('UNRESERVE',
                           this.$route.params.day)
      }
    }
  },
  methods: {
    reserve () {
      this.reserved = true
      this.$store.commit('RESERVE', {
        day: this.$route.params.day,
        quantity: this.quantity,
        price: this.menu.price
      })
    },
    quantityChange (newQuantity) {
      this.quantity = newQuantity
    }
  }
}
</script>

<style>
</style>
