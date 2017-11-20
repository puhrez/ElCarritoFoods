<template>
  <main id="app" :class="{'fullscreen': isFullscreen }">
    <section>
      <nuxt/>
      <carrito-menu class="large" />
    </section>
    <carrito-nav class="small"/>
  </main>
</template>

<script>

import { mapGetters } from 'vuex'
import CarritoNav from '~/components/CarritoNav.vue'
import CarritoMenu from '~/components/CarritoMenu'
export default {
  computed: {
    ...mapGetters([
      'isFullscreen'
    ])
  },
  components: {
    CarritoNav,
    CarritoMenu
  }
}
</script>

<style>
</style>
