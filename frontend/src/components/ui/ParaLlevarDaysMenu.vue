<template>
	<section class="isolated-nav">
		<nav>
			<router-link to="para-llevar/lunes"><button>Lunes</button></router-link>
			<router-link to="para-llevar/martes"><button>Martes</button></router-link>
			<router-link to="para-llevar/miercoles"><button>Miércoles</button></router-link>
			<router-link to="para-llevar/jueves"><button>Jueves</button></router-link>
			<router-link to="para-llevar/viernes"><button>Viernes</button></router-link>
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
