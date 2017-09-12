<template>
		<section id="product">
		<article>
			<header>
			  <h2>{{ $route.params.name }}</h2>
                          <shopping-cart-icon v-show="!$store.getters.isEmpty()"></shopping-cart-icon>
			</header>
                        <hr>
                        <section class="product-description">
			  <p>{{ description }}</p>
                        </section>
			<br>
 			<div class="quantity">
				<h4>Cantidad: {{ quantity }}</h4>
				<div><button :disabled="quantity === 0" @click="less">-</button><button @click="more">+</button></div>
			</div>
			<button v-show="quantity > 0" class="item-action-btn" :disabled="reserved" :class="{doable: !reserved}" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
		</article>
	</section>

</template>

<script>

import ShoppingCartIcon from '@/components/ui/ShoppingCartIcon'

export default {
  name: 'productos-product',
  components: {
    ShoppingCartIcon
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
    'reserved' (to, from) {
      if (to) {
        this.$store.commit('ADD_TO_CART', {
          product: this.$route.params.name,
          quantity: this.quantity})
      } else {
        this.$store.commit('REMOVE_FROM_CART',
                           this.$route.params.product)
      }
    }
  },
  methods: {
    reserve () {
      if (this.reserved) {
        this.reserved = false
        this.quantity = 0
      } else {
        this.reserved = true
      }
    },
    less () {
      this.quantity -= 1
      this.reserved = false
    },
    more () {
      this.quantity += 1
      this.reserved = false
    }
  }
}
</script>
