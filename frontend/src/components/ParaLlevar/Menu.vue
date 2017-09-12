<template>
	<section id="para-llevar-day">
		<article>
			<header>
			  <h2>{{ $route.params.day }}</h2>
                          <shopping-cart-icon v-show="!$store.getters.isEmpty()"></shopping-cart-icon>
			</header>
			<hr>
			<ol>
				<li v-for="item in menuItems">{{ item }}</li>
			</ol>
			<br>
                        <quantity label="Ordenes" :quantity="quantity" @change="quantityChange"></quantity>
			<button v-show="quantity > 0" class="item-action-btn" :disabled="reserved" :class="{doable: !reserved}" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
		</article>
	</section>
</template>

<script>

import Quantity from '@/components/ui/Quantity'
import ShoppingCartIcon from '@/components/ui/ShoppingCartIcon'

export default {
  name: 'para-llevar-day-menu',
  data () {
    let reserved = this.$store.getters.getReservation(this.$route.params.day)
    return {
      reserved: !!reserved,
      quantity: reserved || 0
    }
  },
  components: {
    Quantity,
    ShoppingCartIcon
  },
  computed: {
    menuItems () {
      return ['concha en salsa verde', 'penne pasta', 'pene de búfalo', 'flan']
    }
  },
  watch: {
    'quantity' (to, from) {
      if (this.reserved) {
        this.reserved = false
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
        quantity: this.quantity})
    },
    quantityChange (newQuantity) {
      this.quantity = newQuantity
    }
  }
}
</script>

<style>
</style>
