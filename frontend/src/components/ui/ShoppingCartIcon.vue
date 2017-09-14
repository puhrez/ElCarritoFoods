<template>
  <router-link id="shopping-cart-icon"  to="/order-review">
    <h2 :class="{'bouncesUp': bounceUp, 'bouncesDown': bounceDown }">$<span :class="{ 'blinks': !totalPrice }">{{ totalPrice || '_' }}</span></h2>
  </router-link>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'shopping-cart-icon',
  data () {
    return {
      bounceUp: false,
      bounceDown: false
    }
  },
  computed: {
    ...mapGetters([
      'totalPrice'
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
