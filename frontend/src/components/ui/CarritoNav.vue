<template>
  <nav class="primary">
		<router-link class="small center" to="menu"><button>Menú</button></router-link>
		<router-link class="large" to="para-llevar"><button>Para llevar</button></router-link>
    <router-link class="large" to="productos"><button >Productos</button></router-link>
    <router-link class="large" to="catering"><button>Catering</button></router-link>
    <router-link class="large" to="mision"><button>Misión</button></router-link>
    <router-link class="large" to="contacto"><button>Contacto</button></router-link>
	</nav>
</template>

<script>

export default {
  name: 'carrito-nav'
}
</script>

<style>
</style>
