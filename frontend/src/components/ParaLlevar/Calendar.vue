<template>
	<section class="isolated-nav">
		<nav>
			<router-link to="/para-llevar/menu/lunes"><button>Lunes</button></router-link>
			<router-link to="/para-llevar/menu/martes"><button>Martes</button></router-link>
			<router-link to="/para-llevar/menu/miercoles"><button>Miércoles</button></router-link>
			<router-link to="/para-llevar/menu/jueves"><button>Jueves</button></router-link>
			<router-link to="/para-llevar/menu/viernes"><button>Viernes</button></router-link>
		</nav>
		<router-link class="small" v-if="!!items.size" to="/para-llevar/order-review"><button class="doable">Ordenar</button></router-link>
	</section>
</template>

<script>

export default {
  name: 'para-llevar-calendar',
  props: ['items']
}

</script>

<style>
</style>
