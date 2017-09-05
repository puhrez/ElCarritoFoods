<template>
	<section class="isolated-nav">
		<nav>
			<router-link to="/para-llevar/days/lunes"><button>Lunes</button></router-link>
			<router-link to="/para-llevar/days/martes"><button>Martes</button></router-link>
			<router-link to="/para-llevar/days/miercoles"><button>Miércoles</button></router-link>
			<router-link to="/para-llevar/days/jueves"><button>Jueves</button></router-link>
			<router-link to="/para-llevar/days/viernes"><button>Viernes</button></router-link>
		</nav>
	</section>
</template>

<script>

export default {
  name: 'para-llevar-days-menu'
}
</script>

<style>
</style>
