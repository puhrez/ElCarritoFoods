<template>
  <section  id="almuerzo-instructions">
    <article>
      <header>
        <h2>Almuerzo</h2>
        <shopping-cart></shopping-cart>
      </header>
      <section class="program-description">
        <p>¡Desenchufá el microhonda y dejáte llevar por las ricas comidas del Carrito Foods!</p>
        <br>
        <h4>Instrucciones</h4>
        <p>Reservá y ordená tus almuerzos a través del Calendario.</p>
        <p>Después que se registre tu orden recibirás un email con los detalles de la recogida.</p>
        <br>
        <p>¡Buen provecho!</p>

      </section>
    </article>
    <order-button v-if="!$store.getters.hasReservations"></order-button>
    <almuerzo-nav class="small"></almuerzo-nav>
  </section>
</template>

<script>
import AlmuerzoNav from './Nav'
import Fullscreen from '../mixins/Fullscreen'

export default {
  name: 'almuerzo-instructions',
  mixins: [Fullscreen],
  components: {
    AlmuerzoNav
  }
}
</script>
