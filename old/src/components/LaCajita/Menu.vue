xo<template>
  <section class="program-page" id="almuerzo-menu">
    <article v-if="day">
      <header>
	<h2>{{ day.parsedDay }}</h2>
        <shopping-cart :price="quantity ? day.price * quantity : day.price"></shopping-cart>
      </header>
      <section>
        <ol>
	  <li v-for="plate in day.plates">{{ plate }}</li>
        </ol>
      </section>
    </article>
    <article v-else>
      <h2>No hay comida hoy</h2>
    </article>
    <div>
      <quantity label="Ordenes" :quantity="quantity" @change="quantityChange"></quantity>
      <button class="item-action-btn" :disabled="isReserved" :class="{doable: !isReserved}" @click="reserve">{{ isReserved ? 'Reservado' : 'Reservar' }}</button>
    </div>
    <almuerzo-nav class="small"></almuerzo-nav>
  </section>
</template>

<script>
import AlmuerzoNav from './Nav'
import Quantity from '@/components/ui/Quantity'
import Fullscreen from '../mixins/Fullscreen'
import DateOps from '../mixins/DateOps'
import { mapGetters } from 'vuex'

export default {
  name: 'almuerzo-day-menu',
  mixins: [Fullscreen, DateOps],
  props: ['reserved'],
  data () {
    let reservation = this.$store.getters.getReservation(this.$route.params.day)
    return {
      isReserved: !!reservation,
      quantity: reservation ? reservation.quantity : 1,
      day: {}
    }
  },
  created () {
    this.getDay()
  },
  components: {
    Quantity,
    AlmuerzoNav
  },
  computed: {
    ...mapGetters([
      'isEmpty',
      'getReservation'
    ])
  },
  watch: {
    'quantity' (to, from) {
      if (to === 0) {
        this.$store.commit('UNRESERVE',
                           this.dateToPath(this.day.date))
      }
    }
  },
  methods: {
    getDay () {
      let parsedDate = new Date(this.$route.params.day)
      if (parsedDate) {
        this.day = {
          date: parsedDate,
          parsedDay: this.dateToDay(parsedDate),
          plates: ['concha en salsa verde', 'penne pasta', 'pene de búfalo', 'flan'],
          price: 5
        }
      } else {
        this.day = {}
      }
    },
    reserve () {
      this.isReserved = true
      this.$store.commit('RESERVE', {
        day: this.dateToPath(this.day.date),
        quantity: this.quantity,
        parsedDay: this.day.parsedDay,
        price: this.day.price
      })
    },
    quantityChange (newQuantity) {
      this.isReserved = false
      this.quantity = newQuantity
    }
  }
}
</script>

<style>
</style>
