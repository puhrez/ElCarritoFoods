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
  computed: {
    submit_state () {
      if (this.submitted && this.success) {
        return 'Gracias'
      } else if (this.submitted) {
        return 'Sometiendo'
      } else {
        return 'Subscribir'
      }
    }
  },
  data () {
    return {
      submitted: false,
      phone: '',
      success: false
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
      let request = {
        method: 'post',
        url: 'https://gsspj51juf.execute-api.us-east-1.amazonaws.com/prod/AddSubscriber',
        data: JSON.stringify({
          phone: this.phone
        })
      }
      this.$http(request)
        .then(res => {
          this.submitted = true
          this.success = true
        })
        .catch(res => {
          this.submitted = false
          console.log('error', res)
        })
    }
  }
}
</script>
