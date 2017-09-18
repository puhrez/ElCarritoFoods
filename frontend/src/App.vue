<template>
  <main id="app">
    <router-view></router-view>
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
