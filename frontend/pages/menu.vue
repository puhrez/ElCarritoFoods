<template>
  <section id="menu">
    <article>
      <header>
        <h2>Menú</h2>
        <shopping-cart></shopping-cart>
      </header>
      <section class="isolated-nav">
        <nav>
          <nuxt-link to="/el-carrito"><button>El Carrito</button></nuxt-link>
          <nuxt-link to="/catering"><button>Catering</button></nuxt-link>
          <nuxt-link to="/mision"><button>Misión</button></nuxt-link>
          <nuxt-link to="/contacto"><button>Contacto</button></nuxt-link>
          <a href="https://instagram.com/elcarrito.foods"><button>Instagram</button></a>
          <a href="https://facebook.com/elcarrito.foods"><button>Facebook</button></a>
        </nav>
      </section>
    </article>
  </section>
</template>

<script>

import Fullscreen from '~/components/mixins/Fullscreen'
import ShoppingCart from '~/components/ShoppingCartIcon'
export default {
  name: 'carrito-menu',
  mixins: [Fullscreen],
  components: {
    ShoppingCart
  }
}
</script>

<style>
</style>
