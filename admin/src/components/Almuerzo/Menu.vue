<template>
  <md-layout>
    <form>
      <date-picker :disable-passed-days="true"></date-picker>
    </form>
  </md-layout>
</template>

<script>
import Datepicker from 'vue-datepicker/vue-datepicker-es6'

export default {
  name: 'almuerzo-menu',
  components: {
    'date-picker': Datepicker
  },
  data () {
    return {
      date: {
        items: ['starter', 'main', 'dessert'],
        price: 5,
        date: new Date()
      }
    }
  }
}
</script>
