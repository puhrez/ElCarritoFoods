<template>
  <main id="app" :class="{'fullscreen': isFullscreen }">
    <router-view></router-view>
    <carrito-nav></carrito-nav>
  </main>
</template>

<script>
import CarritoNav from './components/ui/CarritoNav'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  mounted () {
    window.scrollTo(0, 0)
  },
  computed: {
    ...mapGetters([
      'isEmpty',
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
