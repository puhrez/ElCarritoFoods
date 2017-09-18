<template>
  <md-layout :md-column="true" id="menu">
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Almuerzo</div>
        <div class="md-subhead">El Carrito's lunch service</div>
      </md-card-header>
      <md-card-content>
        <p>Write and set menus.</p>
        <p>Manage reservations</p>
      </md-card-content>
      <md-card-actions>
        <router-link to="/almuerzo"><md-button>Access</md-button></router-link>
      </md-card-actions>
    </md-card>
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Products</div>
        <div class="md-subhead">El Carrito's line of Products</div>
      </md-card-header>
      <md-card-content>
        <p>Manage products.</p>
        <p>Manage purchase</p>
      </md-card-content>
      <md-card-actions>
        <md-button>Products</md-button>
        <md-button>Purchases</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</template>

<script>

export default {
  name: 'menu'
}
</script>
