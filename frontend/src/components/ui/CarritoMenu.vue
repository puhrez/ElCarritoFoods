<template>
  <section class="isolated-nav" :class="{ 'spaced-between': !isEmpty() }">
    <nav>
      <router-link to="para-llevar"><button>Para llevar</button></router-link>
      <router-link to="products"><button>Productos</button></router-link>
      <router-link to="catering"><button>Catering</button></router-link>
      <router-link to="mision"><button>Misión</button></router-link>
      <router-link to="contacto"><button>Contacto</button></router-link>
    </nav>
    <router-link class="small" v-show="!isEmpty()" to="/order-review"><button class="doable">Ordenar</button></router-link>
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
  }
}
</script>

<style>
</style>
