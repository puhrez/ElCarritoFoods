<template>
  <logo/>
</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
  name: 'app',
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    Logo
  }
}
</script>

<style>
</style>
