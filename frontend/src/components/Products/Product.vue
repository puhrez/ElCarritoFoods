<template>
		<section id="productos-products">
		<article>
			<header>
				<h2>{{ $route.params.name }}</h2>
				<hr>
			</header>
			<p>{{ description }}</p>
			<br>
			<div class="quantity">
				<h4>Cantidad: {{ quantity }}</h4>
				<div><button :disabled="quantity === 0"@click="less">-</button><button @click="more">+</button></div>
			</div>
			<button :class="{doable: !reserved, undoable: reserved }" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
		</article>
	</section>

</template>

<script>
export default {
  name: 'productos-product',
  props: ['items'],
  data () {
    let reserved = this.$props.items[this.$route.params.name]
    return {
      reserved: !!reserved,
      quantity: reserved || 0
    }
  },
  computed: {
    description () {
      return 'Sabe a pelo de gato.'
    }
  },
  methods: {
    reserve () {
      if (this.reserved) {
        this.reserved = false
        this.quantity = 0
        this.$emit('unreserve', this.$route.params.name)
      } else {
        this.reserved = true
        this.quantity = 1
        this.$emit('reserve', this.$route.params.name)
      }
    },
    less () {
      this.quantity -= 1
      if (this.quantity > 0) {
        this.$emit('reserve', this.$route.params.name, this.quantity)
      } else {
        this.reserved = false
        this.$emit('unreserve', this.$route.params.name)
      }
    },
    more () {
      this.quantity += 1
      this.reserved = true
      this.$emit('reserve', this.$route.params.name, this.quantity)
    }
  }
}
</script>
