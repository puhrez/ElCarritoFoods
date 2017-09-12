<template>
	<nav>
			<router-link class="small" to="/para-llevar/calendar"><button>Calendario</button></router-link>
			<router-link class="large" to="/para-llevar/menu/lunes"><button>Lunes</button></router-link>
			<router-link class="large" to="/para-llevar/menu/martes"><button>Martes</button></router-link>
			<router-link class="large" to="/para-llevar/menu/miercoles"><button>Miércoles</button></router-link>
			<router-link class="large" to="/para-llevar/menu/jueves"><button>Jueves</button></router-link>
			<router-link class="large" to="/para-llevar/menu/viernes"><button>Viernes</button></router-link>
			<router-link v-if="$store.getters.hasReservations()" class="large" to="/para-llevar/order-review"><button >Ordenar</button></router-link>
		</nav>

</template>

<script>

export default {
  name: 'para-llevar-nav-isolated'
}

</script>
