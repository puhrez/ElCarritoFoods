<template>
  <router-link id="shopping-cart-icon" :class="{'bouncesUp': bounceUp, 'bouncesDown': bounceDown }" to="/order-review">
    <h2>$<span :class="{ 'blinking': true }">{{ totalPrice || '_' }}</span></h2>
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
      } else if (to < from) {
        this.bounceDown = true
      }
    }
  }
}
</script>
