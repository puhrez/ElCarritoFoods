<template>
  <section id="instructions">
    <article>
      <header>
        <h2>Instrucciones</h2>
      </header>
      <section>
        <p>¡Bienvenidxs a El Carrito Foods!</p>
        <p>A través este portal puedes aprender sobre El Carrito Foods y sus diferentes servicios.</p>
        <h4>El Carrito</h4><p>Suscríbete al Carrito para enterarte de nuestros movimientos.</p>
        <h4>Catering</h4><p>Solicita una consulta de catering personalizada para tu evento.</p>
        <h4>Misión</h4><p>Conoce un poco sobre el por qué del Carrito Foods.</p>
        <h4>Contacto</h4><p>Comunícate con nosotrxs ante cualquier duda.</p>
      </section>
    </article>
  </section>

</template>
<script>
import Fullscreen from '~/components/mixins/Fullscreen'

export default {
  name: 'instructions',
  mixins: [Fullscreen]
}
</script>
