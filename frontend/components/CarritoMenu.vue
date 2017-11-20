<template>
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
</template>

<script>

export default {
  name: 'carrito-menu'
}
</script>

<style>
</style>
