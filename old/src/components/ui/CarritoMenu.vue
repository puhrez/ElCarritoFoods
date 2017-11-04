<template>
  <section id="menu">
    <article>
      <header>
        <h2>Menú</h2>
        <shopping-cart></shopping-cart>
      </header>
      <section class="isolated-nav" :class="{ 'spaced-between': !isEmpty() }">
        <nav>
          <router-link to="la-cajita"><button>La Cajita</button></router-link>
          <router-link to="catering"><button>Catering</button></router-link>
          <router-link to="mision"><button>Misión</button></router-link>
          <router-link to="contacto"><button>Contacto</button></router-link>
        </nav>
      </section>
    </article>
    <order-button v-if="!isEmpty()"></order-button>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'carrito-menu',
  computed: {
    ...mapGetters([
      'isEmpty'
    ])
  },
  created () {
    this.$store.commit('FULLSCREEN', false)
  }
}
</script>

<style>
</style>
