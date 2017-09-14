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
      return Object.values(state.reservations)
    },
    products: state => {
      return Object.values(state.cart)
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
    cartItems: state => {
      return Object.values(state.cart)
        .concat(Object.values(state.reservations))
    },
    totalPrice: (state, getters) => {
      return getters.cartItems
        .map((a) => {
          return a.price * a.quantity
        })
        .reduce((a, b) => a + b, 0)
    }
  },
  mutations: {
    RESERVE (state, reservations) {
      Vue.set(state.reservations, reservations.day, reservations)
    },
    UNRESERVE (state, day) {
      Vue.delete(state.reservations, day)
    },
    ADD_TO_CART (state, product) {
      Vue.set(state.cart, product.name, product)
    },
    REMOVE_FROM_CART (state, product) {
      Vue.delete(state.cart, product)
    }
  }
})
