<template>
  <section id="menu">
    <article>
      <header>
        <h2>Menú</h2>
        <shopping-cart></shopping-cart>
      </header>
      <section class="isolated-nav" :class="{ 'spaced-between': !isEmpty() }">
        <nav>
          <router-link to="el-carrito"><button>El Carrito</button></router-link>
          <router-link to="catering"><button>Catering</button></router-link>
          <router-link to="mision"><button>Misión</button></router-link>
          <router-link to="contacto"><button>Contacto</button></router-link>
          <a href="https://instagram.com/elcarrito.foods"><button>Instagram</button></a>
          <a href="https://facebook.com/elcarrito.foods"><button>Facebook</button></a>
        </nav>
      </section>
    </article>
    <order-button v-if="!isEmpty()"></order-button>
  </section>
</template>

<script>

import Fullscreen from '~/components/Fullscreen.vue'

export default {
  name: 'carrito-menu',
  mixins: [Fullscreen]
  }
}
</script>

<style>
</style>
