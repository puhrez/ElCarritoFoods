<template>
	<section id="order-review">
		<article>
			<header>
				<h2>Tu pedido</h2>
				<hr>
			</header>
			<ul>
				<li class="ordered" v-for="item in $props.items.toJSON()">{{ item }}<button @click="remove" class="undoable">X</button></li>
			</ul>
		</article>
		<a><button class="doable" v-if="!!items.size">Pagar</button></a>
	</section>
</template>

<script>

export default {
  name: 'order-review',
  props: ['items'],
  methods: {
    remove (e) {
      e.target.parentNode.remove()
      this.$emit('unreserve', e.target.parentNode.firstChild.data)
    }
  }
}
</script>
