<template>
  <section class="isolated-nav" :class="{ 'spaced-between': hasReservations }">
    <nav>
      <router-link to="/para-llevar/menu/lunes">
        <button :class="{'reserved': getReservation('lunes') }">Lunes</button>
      </router-link>
      <router-link to="/para-llevar/menu/martes">
        <button  :class="{'reserved': getReservation('martes') }">Martes</button>
      </router-link>
      <router-link to="/para-llevar/menu/miercoles">
        <button  :class="{'reserved': getReservation('miercoles') }">Miércoles</button>
      </router-link>
      <router-link to="/para-llevar/menu/jueves">
        <button :class="{'reserved': getReservation('jueves') }">Jueves</button>
      </router-link>
      <router-link to="/para-llevar/menu/viernes">
        <button  :class="{'reserved': getReservation('viernes') }">Viernes</button>
      </router-link>
    </nav>
    <router-link class="small" v-if="hasReservations" to="/order-review"><button class="doable">Ordenar</button></router-link>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'para-llevar-calendar',
  computed: {
    ...mapGetters([
      'hasReservations',
      'getReservation'
    ])
  }
}

</script>

<style>
</style>
