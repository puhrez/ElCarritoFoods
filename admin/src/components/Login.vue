<template>
  <md-layout id="login" :md-flex="true" :md-column="true" md-align="center" md-vertical-align="center">
       <form novalidate @submit.stop.prevent="submit">
         <md-input-container v-if="!newUser">
	   <label for="email">Email</label>
	   <md-input v-model.trim="email" class="field" name="email" type="email" placeholder="you@youremail.com" required></md-input>
         </md-input-container>
         <md-input-container v-else>
           <label for="invitationCode">Invitation code</label>
           <md-input v-model="invitationCode" name="invitationCode" required></md-input>
         </md-input-container>
      <md-input-container md-has-password>
	<label for="password">Password</label>
	<md-input v-model="password" class="field" name="password" type="password" placeholder="*********" required></md-input>
      </md-input-container>
      <md-checkbox v-model="newUser" class="md-primary">New User?</md-checkbox>
      <md-layout :md-row="true">
        <md-button @click="submit" class="md-raised md-primary">{{ newUser ? "Register" : "Login" }}</md-button>
      </md-layout>
       </form>
  </md-layout>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: '',
      newUser: false,
      invitationCode: '',
      password: ''
    }
  },
  beforeCreate () {
    if (this.$store.state.loggedIn) {
      this.$router.push('/menu')
    }
  },
  methods: {
    submit () {
      if (this.newUser) {
        this.register()
      } else {
        this.login()
      }
    },
    login () {
      this.$store.commit('LOGIN', {email: this.email, access_token: 'yes'})
      this.$router.push('/menu')
    },
    register () {
      this.email = 'inviteduser@gmail.com'
      this.newUser = false
    }
  }
}

</script>

<style scoped>
  #login {
  height: 90vh;
  }
</style>
