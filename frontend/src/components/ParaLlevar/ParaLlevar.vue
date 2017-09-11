<template>
	<section id="para-llevar">
		<para-llevar-nav :items="daysReserved" class="large"></para-llevar-nav>
		<article v-if="$route.path === '/para-llevar'">
			<header>
				<h2>Para Llevar</h2>
				<hr>
			</header>
			<p>¡Desenchufá el microhonda y dejáte llevar por las ricas comidas del Carrito Foods!</p>
			<h4>Instrucciones</h4>
			<p>Reservá y ordená tus platos através del Calendario. Al pagar, podés eligir la cantidad de platos.</p>
			<p>Después que se registre tu orden, recibirás un email con los detalles de la recogida</p>
		</article>
		<router-view :class="{ 'spaced-between': !!daysReserved.size }" :items="daysReserved" @reserve="addToCart" @unreserve="removeFromCart" v-else></router-view>
		<para-llevar-nav :items="daysReserved" v-if="$route.path !== '/para-llevar/calendar' && $route.path !== '/para-llevar/order-review'" class="small"></para-llevar-nav>
	</section>

</template>

<script>
import ParaLlevarNav from './Nav'

export default {
  name: 'para-llevar',
  components: {
    ParaLlevarNav
  },
  data () {
    return {
      daysReserved: new Set()
    }
  },
  methods: {
    addToCart (day) {
      this.daysReserved.add(day)
    },
    removeFromCart (day) {
      this.daysReserved.delete(day)
      if (!this.daysReserved.size && !this.$route.path.includes('menu')) { this.$router.push('/para-llevar') }
    }
  }
}

</script>

<style>
</style>
