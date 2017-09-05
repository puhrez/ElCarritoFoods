<template>
  <main id="app" :class="{fullscreen: this.$route.name !== 'Menu' && this.$route.name !== 'Logo'}">
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
