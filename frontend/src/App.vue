<template>
  <main id="app" :class="{fullscreen: this.$route.path !== '/menu' && this.$route.path !== '/'}">
    <router-view></router-view>
    <carrito-nav></carrito-nav>
  </main>
</template>

<script>
import CarritoNav from './components/ui/CarritoNav'

export default {
  name: 'app',
  components: {
    CarritoNav
  }
}
</script>

<style>
</style>
