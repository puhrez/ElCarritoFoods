<template>
  <section id="mision">
    <article>
      <header>
	<h2>Misión</h2>
      </header>
      <section>
        <logo></logo>
        <section>
          <p>Nuestra comida es una proyeción del aire, agua, tierra e historia que nos rodea y nos compone.</p>
          <p>Nuestra misión es proveer un servicio alimentario que promueva el consumo consciente y la interpretación creativa del contexto gastronómico local sin exclusión económica.</p>
        </section>
      </section>
    </article>
  </section>
</template>

<script>

import Logo from '~/components/Logo'
import Fullscreen from '~/components/mixins/Fullscreen'

export default {
  name: 'mision',
  mixins: [Fullscreen],
  components: {
    Logo
  }
}
</script>
