<template>
	<section id="para-llevar">
		<para-llevar-nav :items="daysReserved" class="large"></para-llevar-nav>
		<article v-if="$route.path === '/para-llevar'">
			<header>
				<h2>Para Llevar</h2>
				<hr>
			</header>
			<p>¡Desenchufá el microhonda y dejáte llevar por las ricas comidas del Carrito Foods!</p>
			<br>
			<h4>Instrucciones</h4>
			<p>Reservá y ordená tus almuerzos a través del Calendario.</p>
			<p>Después que se registre tu orden recibirás un email con los detalles de la recogida.</p>
			<br>
			<p>¡Buen provecho!</p>
		</article>
		<router-view :class="{ 'spaced-between': !!Object.keys(daysReserved).length }" :items="daysReserved" @reserve="addToCart" @unreserve="removeFromCart" v-else></router-view>
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
      daysReserved: {}
    }
  },
  methods: {
    addToCart (day, quantity) {
      this.daysReserved[day] = quantity || 1
    },
    removeFromCart (day) {
      delete this.daysReserved[day]
      if (!Object.keys(this.daysReserved).length && !this.$route.path.includes('menu')) { this.$router.push('/para-llevar') }
    }
  }
}

</script>

<style>
</style>
