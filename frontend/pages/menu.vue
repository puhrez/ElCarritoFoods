<template>
  <section id="menu">
    <article>
      <header>
        <h2>Menú</h2>
        <shopping-cart></shopping-cart>
      </header>
      <carrito-menu class="small"/>
      <section class="large">
        <logo />
      </section>
    </article>
  </section>
</template>

<script>
import CarritoMenu from '~/components/CarritoMenu'
import ShoppingCart from '~/components/ShoppingCartIcon'
import Logo from '~/components/Logo'

export default {
  name: 'menu-page',
  components: {
    ShoppingCart,
    CarritoMenu,
    Logo
  }
}
</script>

<style>
</style>
