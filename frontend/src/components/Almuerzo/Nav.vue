<template>
  <nav>
    <router-link class="small" to="/almuerzo/calendar"><button>Calendario</button></router-link>
    <router-link class="large" to="/almuerzo/menu/lunes"><button>Lunes</button></router-link>
    <router-link class="large" to="/almuerzo/menu/martes"><button>Martes</button></router-link>
    <router-link class="large" to="/almuerzo/menu/miercoles"><button>Miércoles</button></router-link>
    <router-link class="large" to="/almuerzo/menu/jueves"><button>Jueves</button></router-link>
    <router-link class="large" to="/almuerzo/menu/viernes"><button>Viernes</button></router-link>
  </nav>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'almuerzo-nav-isolated',
  computed: {
    ...mapGetters([
      'hasReservations'
    ])
  }
}

</script>
