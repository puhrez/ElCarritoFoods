<template>
  <main id="app">
    <admin-nav></admin-nav>
    <router-view></router-view>
  </main>
</template>

<script>

import { mapGetters } from 'vuex'
import AdminNav from '@/components/ui/AdminNav'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  components: {
    AdminNav
  },
  watch: {
    'loggedIn' (to, from) {
      if (!to) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style src="vue-material/dist/vue-material.css"></style>
