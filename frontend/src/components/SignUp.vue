<template>
  <section id="sign-up">
    <article>
      <header>
        <h2>Tienes hambre?</h2>
      </header>
      <section>
        <logo></logo>
        <section>
          <p>
            Shh! Estás invitado a probar los inventos del Carrito Foods.
          </p>
          <p>
            Te dejaremos saber cuando esten listos.
          </p>
          <form @submit.prevent="submit">
            <masked-input v-model="phone" mask="(111) 111-1111" placeholder="(939) 666-1993" type="tel" pattern="\(\d{3}\)[\s]\d{3}[\-]\d{4}" required />
            <button class="item-action-btn" :disabled="submitted" :class="{doable: !submitted}">{{ submitted ? 'Gracias' : 'Subscribir' }}</button>
          </form>
        </section>
      </section>
    </article>
  </section>
</template>

<script>

import MaskedInput from 'vue-masked-input'
import Logo from './Logo'
export default {
  name: 'sign-up',
  components: {
    MaskedInput,
    Logo
  },
  data () {
    return {
      submitted: false,
      phone: ''
    }
  },
  watch: {
    'phone' () {
      this.submitted = false
    }
  },
  methods: {
    submit () {
      this.submitted = true
      console.log('submitted!', this.phone)
    }
  }
}
</script>
