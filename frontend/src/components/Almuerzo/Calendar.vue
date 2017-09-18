<template>
  <section id="calendario">
    <article>
      <header>
        <h2>Calendario</h2>
        <shopping-cart></shopping-cart>
      </header>
      <section class="isolated-nav">
        <nav v-if="days">
          <router-link v-for="date in days"
                       :key="dateToPath(date)"
                       :reserved="isReserved(date)"
                       :to="`/almuerzo/menu/${dateToPath(date)}`">
            <button :class="{'reserved': isReserved(date) }">{{ dateToDay(date) }}
            </button>
          </router-link>
        </nav>
        <h2 v-else>No hay almuerzos esta semana</h2>
      </section>
      </article>
    <order-button v-if="!isEmpty()"></order-button>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import DateOps from '../mixins/DateOps'
import Fullscreen from '../mixins/Fullscreen'

export default {
  name: 'almuerzo-calendar',
  mixins: [DateOps, Fullscreen],
  data () {
    return {
      days: []
    }
  },
  created () {
    this.getDays()
  },
  methods: {
    isReserved (d) {
      return this.getReservation(this.dateToPath(d))
    },
    getDays () {
      this.days = [
        new Date('01-09-2017'),
        new Date('01-10-2017'),
        new Date('01-11-2017'),
        new Date('01-12-2017'),
        new Date('01-13-2017')
      ]
    }
  },
  computed: {
    ...mapGetters([
      'hasReservations',
      'getReservation',
      'isEmpty'
    ])
  }
}

</script>

<style>
</style>
