<template>
	<section id="order-review">
		<article>
			<header>
				<h2>Tu pedido</h2>
				<hr>
			</header>
			<ul v-if="Object.keys(items).length">
				<li class="ordered" v-for="itemQuantity in Object.entries(items)">{{ itemQuantity[0] }} x{{ itemQuantity[1] }}<button @click="remove" class="undoable">X</button></li>
			</ul>
			<p v-else>¡Todavía no aceptamos donaciones so pedí algo!</p>
		</article>
		<a><button class="doable" v-if="!!Object.keys(items).length">Pagar</button></a>
	</section>
</template>

<script>

export default {
  name: 'order-review',
  props: ['items'],
  methods: {
    remove (e) {
      e.target.parentNode.remove()
      let itemKey = e.target.parentNode.firstChild.data.split(' ')[0]
      this.$emit('unreserve', itemKey)
    }
  }
}
</script>
