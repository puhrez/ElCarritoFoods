<template>
  <router-link class="small order-action" to="/order-review"><button v-if="$route.path !== '/order-review' && !$store.getters.isEmpty()" class="doable">Ordenar</button></router-link>
</template>

<script>

export default {
  name: 'order-btn'
}
</script>
