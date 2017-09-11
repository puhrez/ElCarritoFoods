import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    reservedDays: {}
  },
  mutations: {
    RESERVE (state, day) {
      state.reservedDays[day] = true
    },
    UNRESERVE (state, day) {
      state.reservedDays[day] = false
    }
  }
})
