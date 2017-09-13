<template>
  <router-link id="shopping-cart-icon" to="/order-review"><svg class="bounces" enable-background="new 0 0 160 80" id="Layer_1" version="1.1" viewBox="0 0 160 80" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><rect height="5" width="5" x="52" y="7"/></g><g><rect height="5" width="5" x="47" y="7"/></g><g><rect height="5" width="5" x="57" y="12"/></g><g><rect height="5" width="5" x="62" y="17"/></g><g><rect height="5" width="5" x="67" y="17"/></g><g><rect height="5" width="5" x="72" y="17"/></g><g><rect height="5" width="5" x="77" y="17"/></g><g><rect height="5" width="5" x="82" y="17"/></g><g><rect height="5" width="16" x="87" y="17"/></g><g><rect height="5" width="5" x="103" y="47"/></g><g><rect height="5" width="5" x="98" y="52"/></g><g><rect height="5" width="5" x="108" y="52"/></g><g><rect height="5" width="5" x="103" y="57"/></g><g><rect height="5" width="5" x="62" y="47"/></g><g><rect height="5" width="5" x="57" y="52"/></g><g><rect height="5" width="5" x="67" y="52"/></g><g><rect height="5" width="5" x="62" y="57"/></g><g><rect height="5" width="5" x="67" y="37"/></g><g><rect height="5" width="5" x="72" y="37"/></g><g><rect height="5" width="5" x="77" y="37"/></g><g><rect height="5" width="5" x="82" y="37"/></g><g><rect height="5" width="16" x="87" y="37"/></g><g><rect height="5" width="5" x="103" y="17"/></g><g><rect height="5" width="5" x="62" y="22"/></g><g><rect height="5" width="10" x="62" y="27"/></g><g><rect height="5" width="5" x="62" y="32"/></g><g><rect height="5" width="5" x="103" y="22"/></g><g><rect height="5" width="5" x="103" y="27"/></g><g><rect height="5" width="5" x="103" y="32"/></g><g><rect height="5" width="5" x="82" y="22"/></g><g><rect height="5" width="10" x="82" y="27"/></g><g><rect height="5" width="5" x="82" y="32"/></g><g><rect height="5" width="5" x="92" y="22"/></g><g><rect height="5" width="11" x="92" y="27"/></g><g><rect height="5" width="5" x="92" y="32"/></g><g><rect height="5" width="5" x="72" y="22"/></g><g><rect height="5" width="10" x="72" y="27"/></g><g><rect height="5" width="5" x="72" y="32"/></g></g></svg></router-link>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'shopping-cart-icon',
  computed: {
    ...mapGetters([
      'orderItemCount'
    ])
  },
  watch: {
    'orderItemCount' (to, from) {
      console.log('got an order')
    }
  }
}
</script>
