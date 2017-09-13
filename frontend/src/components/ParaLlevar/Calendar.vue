<template>
	<section class="isolated-nav">
		<nav>
			<router-link to="/para-llevar/menu/lunes"><button>Lunes</button></router-link>
			<router-link to="/para-llevar/menu/martes"><button>Martes</button></router-link>
			<router-link to="/para-llevar/menu/miercoles"><button>Miércoles</button></router-link>
			<router-link to="/para-llevar/menu/jueves"><button>Jueves</button></router-link>
			<router-link to="/para-llevar/menu/viernes"><button>Viernes</button></router-link>
		</nav>
		<router-link class="small" v-if="hasReservations" to="/order-review"><button class="doable">Ordenar</button></router-link>
	</section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'para-llevar-calendar',
  computed: {
    ...mapGetters([
      'hasReservations'
    ])
  }
}

</script>

<style>
</style>
