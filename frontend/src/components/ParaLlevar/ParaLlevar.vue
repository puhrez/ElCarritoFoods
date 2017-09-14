<template>
  <section id="para-llevar">
    <para-llevar-nav class="large"></para-llevar-nav>
    <article v-if="$route.path === '/para-llevar'">
      <header>
        <h2>Para Llevar</h2>
        <shopping-cart v-show="!isEmpty()"></shopping-cart>
      </header>
      <hr>
      <p>¡Desenchufá el microhonda y dejáte llevar por las ricas comidas del Carrito Foods!</p>
      <br>
      <h4>Instrucciones</h4>
      <p>Reservá y ordená tus almuerzos a través del Calendario.</p>
      <p>Después que se registre tu orden recibirás un email con los detalles de la recogida.</p>
      <br>
      <p>¡Buen provecho!</p>
    </article>
    <router-view :key="$route.path" v-else></router-view>
    <para-llevar-nav v-show="$route.path !== '/para-llevar/calendar'" class="small"></para-llevar-nav>
  </section>

</template>

<script>
import ParaLlevarNav from './Nav'
import { mapGetters } from 'vuex'

export default {
  name: 'para-llevar',
  computed: {
    ...mapGetters([
      'hasReservations',
      'isEmpty'
    ])
  },
  components: {
    ParaLlevarNav
  }
}

</script>

<style>
</style>
