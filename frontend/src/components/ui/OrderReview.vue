<template>
	<section id="order-review">
		<article>
		  <header>
		    <h2>Tu pedido</h2>
				<hr>
		  </header>
                  <section v-if="$store.getters.hasReservations()" id="reservations-review">
                    <h4>Reservaciones</h4>
		    <ul>
		      <li class="ordered" v-for="itemQuantity in Object.entries($store.state.reservations)">{{ itemQuantity[0] }} x{{ itemQuantity[1] }}<button @click="removeReservation" class="undoable">X</button></li>
		    </ul>
                  </section>
                  <br>
                  <section v-if="$store.getters.hasProducts()" id="products-review">
                    <h4>Productos</h4>
                    <ul>
		      <li class="ordered" v-for="itemQuantity in Object.entries($store.state.cart)">{{ itemQuantity[0] }} x{{ itemQuantity[1] }}<button @click="removeProduct" class="undoable">X</button></li>
		    </ul>
                  </section>
		  <p v-show="$store.getters.isEmpty()">¡Todavía no aceptamos donaciones so pedí algo!</p>
		</article>
		<a><button class="doable" v-if="!$store.getters.isEmpty()">Pagar</button></a>
	</section>
</template>

<script>

export default {
  name: 'order-review',
  methods: {
    removeProduct (e) {
      this.$store.commit('REMOVE_FROM_CART', this.removeAndGetKey(e))
    },
    removeReservation (e) {
      this.$store.commit('UNRESERVE', this.removeAndGetKey(e))
    },
    removeAndGetKey (e) {
      e.target.parentNode.remove()
      return e.target.parentNode.firstChild.data.split(' ')[0]
    }
  }
}
</script>
