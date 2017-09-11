<template>
	<section class="isolated-nav fullscreen">
 		<nav>
			<router-link to="para-llevar"><button>Para llevar</button></router-link>
			<router-link to="products"><button>Productos</button></router-link>
			<router-link to="catering"><button>Catering</button></router-link>
			<router-link to="mision"><button>Misión</button></router-link>
			<router-link to="contacto"><button>Contacto</button></router-link>
		</nav>
	</section>
</template>

<script>

export default {
  name: 'carrito-menu'
}
</script>

<style>
</style>
