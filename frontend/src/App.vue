<template>
  <main id="app">
    <router-view></router-view>
    <carrito-nav v-if="this.$router.history.current.path !== '/menu'"></carrito-nav>
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
