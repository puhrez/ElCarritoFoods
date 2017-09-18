<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import ProductsList from './List'
import ProductsNav from './Nav'
import { mapGetters } from 'vuex'

export default {
  name: 'products',
  components: {
    ProductsList,
    ProductsNav
  },
  computed: {
    showNav () {
      return this.$route.path !== '/products/list'
    },
    ...mapGetters([
      'hasProducts',
      'isEmpty'
    ])
  }
}

</script>
