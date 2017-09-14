
<template>
  <section id="order-review">
    <article>
      <header>
	<h2>Tu pedido</h2>
      </header>
      <hr>
      <section v-if="hasReservations" id="reservations-review">
        <h4>Reservaciones</h4>
	<ul>
	  <li class="ordered" v-for="r in reservations">{{ r.day }} ${{ r.price }} x{{ r.quantity }}<button @click="removeReservation" class="undoable">X</button></li>
	</ul>
      </section>
      <br>
      <section v-if="hasProducts" id="products-review">
        <h4>Productos</h4>
        <ul>
	  <li class="ordered" v-for="p in products">{{ p.name }} x{{ p.quantity }} ${{ p.quantity * p.price }}<button @click="removeProduct" class="undoable">X</button></li>
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

export default {
  name: 'order-review',
  computed: {
    ...mapGetters([
      'products',
      'reservations',
      'isEmpty',
      'hasReservations',
      'totalPrice',
      'hasProducts'])
  },
  methods: {
    removeProduct (e) {
      this.$store.commit('REMOVE_FROM_CART', this.getKey(e))
      this.leaveIfEmpty()
    },
    removeReservation (e) {
      this.$store.commit('UNRESERVE', this.getKey(e))
      this.leaveIfEmpty()
    },
    getKey (e) {
      return e.target.parentNode.firstChild.data.split(' ')[0]
    },
    leaveIfEmpty () {
      if (this.$store.getters.isEmpty()) {
        this.$router.push('/menu')
      }
    }
  }
}
</script>
