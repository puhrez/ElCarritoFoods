<template>
  <main id="app" :class="{'fullscreen': isFullscreen }">
    <nuxt/>
    <carrito-nav/>
  </main>
</template>

<script>

import { mapGetters } from 'vuex'
import CarritoNav from '~/components/CarritoNav.vue'
export default {
  computed: {
    ...mapGetters([
      'isFullscreen'
    ])
  },
  components: {
    CarritoNav
  }
}
</script>

<style>
</style>
