<template>
  <md-layout :md-column="true" id="almuerzo-menus">
    <md-card v-for="menu in menus" md-with-hover>
      <md-card-header>
        <div class="md-title">{{ menu.date.toLocaleString('en-us', { weekday: 'long' }) }}</div>
        <div class="md-subhead">${{ menu.price }}</div>
        <div class="md-subhead">{{ menu.date }}</div>
        <div class="md-subhead">{{ menu.reservations }} reservations </div>
      </md-card-header>
      <md-card-content>
        <ol>
          <li v-for="item in menu.items">{{ item }}</li>
        </ol>
      </md-card-content>
      <md-card-actions>
        <md-button>Edit</md-button>
        <md-button>Reservations</md-button>
      </md-card-actions>
    </md-card>
    <md-button class="md-fab md-fab-bottom-right">
      <md-icon>add</md-icon>
    </md-button>
  </md-layout>
</template>

<script>
export default {
  name: 'almuerzo-menus',
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
