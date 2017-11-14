<template>
  <section id="instructions">
    <article>
      <header>
        <h2>Instrucciones</h2>
      </header>
      <section>
        <p>¡Bienvenidxs a El Carrito Foods!</p>
        <p>A través este portal puedes aprender sobre El Carrito Foods y sus diferentes servicios.</p>
        <h4>La Cajita</h4><p>Subscríbete al menú de las Cajitas para enterarte de nuestros ricos almuerzos y desayunos basados en lo local y fresco.</p>
        <h4>Catering</h4><p>Solicita una consulta de catering personalizada para tu evento.</p>
        <h4>Misión</h4><p>Conoce un poco sobre el por qué del Carrito Foods.</p>
        <h4>Contacto</h4><p>Comunícate con nosotrxs ante cualquier duda.</p>
      </section>
    </article>
  </section>

</template>
<script>
import Fullscreen from './mixins/Fullscreen'

export default {
  name: 'instructions',
  mixins: [Fullscreen]
}
</script>
