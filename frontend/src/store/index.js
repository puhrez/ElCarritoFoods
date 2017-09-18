import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

function load (obj) {
  let keys = localStorage.getItem(obj)
  if (keys) {
    return keys.split(',').reduce((o, k) => {
      let values = localStorage.getItem(k).split(',')
      o[k] = {}
      for (let i = 0; i < values.length; i += 2) {
        let key = values[i]
        let value = values[i + 1]

        o[k][key] = Number(value) ? Number(value) : value
      }
      return o
    }, {})
  }
  return {}
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    reservations: load('reservations'),
    cart: load('cart'),
    fullscreen: false
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
    },
    isFullscreen: state => {
      return state.fullscreen
    }
  },
  mutations: {
    RESERVE (state, reservation) {
      Vue.set(state.reservations, reservation.day, reservation)
      localStorage.setItem('reservations', Object.keys(state.reservations).join(','))
      localStorage.setItem(reservation.day, Object.entries(reservation).join(','))
    },
    UNRESERVE (state, day) {
      Vue.delete(state.reservations, day)
      localStorage.setItem('reservations', Object.keys(state.reservations).join(','))
      localStorage.removeItem(day)
    },
    ADD_TO_CART (state, product) {
      Vue.set(state.cart, product.name, product)
      localStorage.setItem('cart', Object.keys(state.cart).join(','))
      localStorage.setItem(product.name, Object.entries(product).join(','))
    },
    REMOVE_FROM_CART (state, product) {
      Vue.delete(state.cart, product)
      localStorage.setItem('cart', Object.keys(state.cart).join(','))
      localStorage.removeItem(product)
    },
    FULLSCREEN (state, option) {
      state.fullscreen = option
    }
  }
})
