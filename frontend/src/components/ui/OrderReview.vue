
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
	  <li class="ordered" v-for="itemQuantity in reservations">{{ itemQuantity[0] }} x{{ itemQuantity[1] }}<button @click="removeReservation" class="undoable">X</button></li>
	</ul>
      </section>
      <br>
      <section v-if="hasProducts" id="products-review">
        <h4>Productos</h4>
        <ul>
	  <li class="ordered" v-for="itemQuantity in products">{{ itemQuantity[0] }} x{{ itemQuantity[1] }}<button @click="removeProduct" class="undoable">X</button></li>
	</ul>
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
