import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loggedIn: !!localStorage.getItem('access_token'),
    email: localStorage.getItem('email')
  },
  getters: {
    loggedIn: state => {
      return state.loggedIn
    }
  },
  mutations: {
    LOGIN (state, payload) {
      state.loggedIn = true
      state.email = payload.email
      localStorage.setItem('access_token', payload.access_token)
      localStorage.setItem('email', payload.email)
    },
    LOGOUT (state) {
      state.loggedIn = false
      state.email = null
      localStorage.removeItem('access_token')
      localStorage.removeItem('email')
    }
  }
})
