<script>

export default {
  goFullscreen () {
    this.$store.commit('FULLSCREEN', true)
  },
  exitFullscreen () {
    this.$store.commit('FULLSCREEN', false)
  },
  created () {
    this.$store.commit('FULLSCREEN', true)
  },
  destroyed () {
    this.$store.commit('FULLSCREEN', false)
  }
}
</script>
