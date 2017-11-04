<template>
  <section id="order-review">
    <article>
      <header>
	<h2>Tu pedido</h2>
      </header>
      <section v-if="hasReservations" id="reservations-review">
        <h4>Reservaciones</h4>
	<ul>
	  <li class="ordered" v-for="r in reservations" :key="r.day">
            <router-link :to="`/almuerzo/menu/${r.day}`">
            <p>{{ r.parsedDay }}</p>
            <p>{{ r.day }}  x{{ r.quantity }} ${{ r.quantity * r.price }}</p></router-link><button @click="removeReservation(r.day)" class="undoable">X</button></li>
	</ul>
      </section>
      <br>
      <section v-if="hasProducts" id="products-review">
        <h4>Productos</h4>
        <ul>
	  <li class="ordered" v-for="p in products" :key="p.name">
            <router-link :to="`/almuerzo/menu/${p.name}`">
              <p>{{ p.name }}<p>
              <p> x{{ p.quantity }} ${{ p.quantity * p.price }}</p></router-link>
              <button @click="removeProduct(p.name)" class="undoable">X</button></li>
	</ul>
      </section>
      <hr v-if="totalPrice">
      <section class="price" v-if="totalPrice">
        <h4>${{ totalPrice || 0 }}</h4>
        </section>
      <p v-if="isEmpty()">¡Todavía no aceptamos donaciones so pedí algo!</p>
    </article>
    <a><button class="doable" v-if="!isEmpty()">Pagar</button></a>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import Fullscreen from '../mixins/Fullscreen'

export default {
  name: 'order-review',
  mixins: [Fullscreen],
  computed: {
    ...mapGetters([
      'products',
      'reservations',
      'isEmpty',
      'hasReservations',
      'totalPrice',
      'hasProducts'])
  },
  mounted () {
    if (this.isEmpty()) {
      this.$store.commit('FULLSCREEN', false)
    }
  },
  methods: {
    removeProduct (p) {
      this.$store.commit('REMOVE_FROM_CART', p)
      this.leaveIfEmpty()
    },
    removeReservation (r) {
      this.$store.commit('UNRESERVE', r)
      this.leaveIfEmpty()
    },
    leaveIfEmpty () {
      if (this.$store.getters.isEmpty()) {
        this.$router.push('/menu')
      }
    }
  }
}
</script>
