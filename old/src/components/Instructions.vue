<template>
  <section id="instructions">
    <article>
      <header>
        <h2>Instrucciones</h2>
      </header>
      <section>
        <p>¡Bienvenidxs a El Carrito Foods</p>
        <p>Por este portal puedes aprender del Carrito Food y sus diferentes servicios.</p>
        <h4>La Cajita</h4><p>Subscríbate al menu de las cajitas para enterarte de nuestros ricos almuerzos y desayunos basados en lo local y fresco</p>
        <h4>Catering</h4><p>Solicíta una consulta de catering personalizada a tu evento</p>
        <h4>Misión</h4><p>Conoce un poco del porque del Carrito Foods</p>
        <h4>Contacto</h4><p>Comunícate con nostors por cualquier duda</p>
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
