<template>
  <nuxt-link id="shopping-cart-icon"  to="/menu">
    <h2 :class="{'bouncesUp': bounceUp, 'bouncesDown': bounceDown, 'doable': !totalPrice}">$<span :class="{ 'blinks': isEmpty() }">{{ price || totalPrice || '_' }}</span></h2>
  </nuxt-link>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'shopping-cart-icon',
  props: ['price'],
  data () {
    return {
      bounceUp: false,
      bounceDown: false
    }
  },
  computed: {
    ...mapGetters([
      'totalPrice',
      'isEmpty'
    ])
  },
  watch: {
    'totalPrice' (to, from) {
      if (to > from) {
        this.bounceUp = true
        setTimeout(() => { this.bounceUp = false }, 1000)
      } else if (to < from) {
        this.bounceDown = true
        setTimeout(() => { this.bounceDown = false }, 1000)
      }
    }
  }
}
</script>
