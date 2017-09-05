<template>
	<section id="para-llevar">
		<nav>
			<router-link class="small" to="/para-llevar/days"><button>Días</button></router-link>
			<router-link class="large" to="/para-llevar/days/lunes"><button>Lunes</button></router-link>
			<router-link class="large" to="/para-llevar/days/martes"><button>Martes</button></router-link>
			<router-link class="large" to="/para-llevar/days/miercoles"><button>Miércoles</button></router-link>
			<router-link class="large" to="/para-llevar/days/jueves"><button>Jueves</button></router-link>
			<router-link class="large" to="/para-llevar/days/viernes"><button>Viernes</button></router-link>

		</nav>
		<article v-if="!(!!$route.params.day)">
			<header>
				<h2>Para Llevar</h2>
			</header>
			<p>¡Desenchufá el microhonda y dejáte llevar por las ricas comidas del Carrito Foods.!</p>
		</article>
		<router-view v-else></router-view>
	</section>

</template>

<script>

export default {
  name: 'para-llevar'
}

</script>

<script>
</script>
