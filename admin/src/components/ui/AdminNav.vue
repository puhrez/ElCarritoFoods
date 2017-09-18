<template>
  <header>
    <md-toolbar>
      <md-menu md-align-trigger>
        <md-button md-menu-trigger>
          <h1 class="md-title">El Carrito Foods Inc.</h1>
        </md-button>

        <md-menu-content v-if="loggedIn">
          <md-menu-item @click="logout">Logout</md-menu-item>
        </md-menu-content>
        <md-menu-content v-else>
          <md-menu-item @click="login">Login</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
  </header>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'admin-nav',
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
