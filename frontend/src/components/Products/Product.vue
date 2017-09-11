<template>
		<section id="productos-products">
		<article>
			<header>
				<h2>{{ $route.params.name }}</h2>
				<hr>
			</header>
			<p>{{ description }}</p>
			<button :class="{doable: !reserved, undoable: reserved }" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
		</article>
	</section>

</template>

<script>
export default {
  name: 'productos-product',
  props: ['items'],
  data () { return { reserved: this.$props.items.has(this.$route.params.name) } },
  computed: {
    description () {
      return 'Sabe a pelo de gato.'
    }
  },
  methods: {
    reserve () {
      if (this.reserved) {
        this.reserved = false
        this.$emit('unreserve', this.$route.params.name)
      } else {
        this.reserved = true
        this.$emit('reserve', this.$route.params.name)
      }
    }
  }
}
</script>
