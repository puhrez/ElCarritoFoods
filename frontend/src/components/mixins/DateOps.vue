<script>

export default {
  methods: {
    dateToPath (d) {
      return d.toLocaleString().split(',')[0].split('/').join('-')
    },
    dateToDay (d) {
      return d.toLocaleString('es-us', { weekday: 'long' })
    }
  }
}
</script>
