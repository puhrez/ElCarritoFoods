<template>
	<section id="para-llevar-day">
		<article>
			<header>
				<h2>{{ $route.params.day }}</h2>
				<hr>
			</header>
			<ol>
				<li v-for="item in menuItems">{{ item }}</li>
			</ol>
			<button :class="{doable: !reserved, undoable: reserved }" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
		</article>
	</section>
</template>

<script>

export default {
  name: 'para-llevar-day-menu',
  props: ['items'],
  data () { return { reserved: this.$props.items.has(this.$route.params.day) } },
  computed: {
    menuItems () {
      return ['concha en salsa verde', 'penne pasta', 'pene de búfalo', 'flan']
    }
  },
  methods: {
    reserve () {
      if (this.reserved) {
        this.reserved = false
        this.$emit('unreserve', this.$route.params.day)
      } else {
        this.reserved = true
        this.$emit('reserve', this.$route.params.day)
      }
    }
  }
}
</script>

<style>
</style>
