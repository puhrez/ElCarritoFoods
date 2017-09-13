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
    hasReservations: (state, getters) => () => {
      return !!getters.reservedDaysCount()
    },
    hasProducts: (state, getters) => () => {
      return !!getters.cartItemsCount()
    },
    cartItemsCount: (state, getters) => () => {
      return Object.values(state.cart).length
    },
    reservedDaysCount: (state, getters) => () => {
      return Object.values(state.reservations).length
    },
    getReservation: (state, getters) => (day) => {
      return state.reservations[day]
    },
    getProduct: (state, getters) => (product) => {
      return state.cart[product]
    },
    isEmpty: (state, getters) => () => {
      return !(getters.hasReservations() || getters.hasProducts())
    },
    orderItemCount (state) {
      return Object.values(state.cart).length + Object.values(state.reservations).length
    }
  },
  mutations: {
    RESERVE (state, payload) {
      state.reservations[payload.day] = payload.quantity
    },
    UNRESERVE (state, day) {
      delete state.reservations[day]
    },
    ADD_TO_CART (state, payload) {
      state.cart[payload.product] = payload.quantity
    },
    REMOVE_FROM_CART (state, product) {
      delete state.cart[product]
    }
  }
})
