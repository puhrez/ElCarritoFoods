<template>
  <section >
    <article>
      <header>
        <h2>Productos</h2>
        <shopping-cart></shopping-cart>
    </header>
    <section class="program-description">
      <p>¡Cociná como el Carrito!</p>
      <br>
      <p>De sazonar a platear, los productos culinarios del Carrito son partes esenciales de una cocina moderna y creativa.</p>
      <br>
      <h4>Instrucciones</h4>
      <p>Reservá y ordená tus compras a través del Calendario.</p>
      <p>Después que se registre tu orden recibirás un email con los detalles de la recogida.</p>
      <br>
      <p>¡Buen provecho!</p>

    </section>
    </article>
    <order-button v-if="!$store.getters.hasProducts"></order-button>
    <products-nav class="small"></products-nav>
  </section>
</template>

<script>
import ProductsNav from './Nav'
import Fullscreen from '../mixins/Fullscreen'

export default {
  name: 'instructions',
  mixins: [Fullscreen],
  components: {
    ProductsNav
  }
}
</script>
