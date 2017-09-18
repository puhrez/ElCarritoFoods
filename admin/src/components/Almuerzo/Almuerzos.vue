<template>
  <md-layout :md-column="true" id="almuerzo">
    <router-view></router-view>
  </md-layout>
</template>

<script>
export default {
  name: 'almuerzos',
  computed: {
    menus () {
      return [{
        reservations: 4,
        items: ['starter', 'main', 'dessert'],
        price: 5,
        date: new Date()
      }]
    }
  }
}
</script>
