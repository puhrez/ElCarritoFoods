<template>
	<section id="para-llevar">
		<nav>
			<router-link class="small" to="para-llevar/days-menu"><button>Días</button></router-link>
			<router-link class="large" to="para-llevar/lunes"><button>Lunes</button></router-link>
			<router-link class="large" to="para-llevar/martes"><button>Martes</button></router-link>
			<router-link class="large" to="para-llevar/miercoles"><button>Miércoles</button></router-link>
			<router-link class="large" to="para-llevar/jueves"><button>Jueves</button></router-link>
			<router-link class="large" to="/para-llevar/viernes"><button>Viernes</button></router-link>

		</nav>
		<article>
			<header>
				<h2>Para Llevar</h2>
			</header>
			<p>¡Desenchufá el microhonda y dejáte llevar por las ricas comidas del Carrito Foods.!</p>
		</article>
	</section>

</template>

<script>

export default {
  name: 'para-llevar'
}

</script>

<script>
</script>
