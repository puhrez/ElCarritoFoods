import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    reservations: {},
    cart: {}
  },
  getters: {
    hasReservations: state => {
      return !!Object.values(state.reservations).length
    },
    reservations: state => {
      return Object.entries(state.reservations)
    },
    products: state => {
      return Object.entries(state.cart)
    },
    hasProducts: state => {
      return !!Object.values(state.cart).length
    },
    getReservation: (state, getters) => (day) => {
      return state.reservations[day]
    },
    getProduct: (state, getters) => (product) => {
      return state.cart[product]
    },
    isEmpty: (state, getters) => () => {
      return !(getters.hasReservations || getters.hasProducts)
    },
    orderItemCount: state => {
      return Object.values(state.cart).length + Object.values(state.reservations).length
    }
  },
  mutations: {
    RESERVE (state, payload) {
      Vue.set(state.reservations, payload.day, payload.quantity)
    },
    UNRESERVE (state, day) {
      Vue.delete(state.reservations, day)
    },
    ADD_TO_CART (state, payload) {
      Vue.set(state.cart, payload.product, payload.quantity)
    },
    REMOVE_FROM_CART (state, product) {
      Vue.delete(state.cart, product)
    }
  }
})
