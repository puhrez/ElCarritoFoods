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
			<br>
			<div class="quantity">
				<h4>Cantidad: {{ portions }}</h4>
				<div><button :disabled="portions === 0"@click="lessPortions">-</button><button @click="morePortions">+</button></div>
			</div>
			<button :class="{doable: !reserved, undoable: reserved }" @click="reserve">{{ reserved ? 'Reservado' : 'Reservar' }}</button>
		</article>
	</section>
</template>

<script>

export default {
  name: 'para-llevar-day-menu',
  props: ['items'],
  data () {
    let reserved = this.$props.items[this.$route.params.day]
    return {
      reserved: !!reserved,
      portions: reserved || 0
    }
  },
  computed: {
    menuItems () {
      return ['concha en salsa verde', 'penne pasta', 'pene de búfalo', 'flan']
    }
  },
  methods: {
    reserve () {
      if (this.reserved) {
        this.reserved = false
        this.portions = 0
        this.$emit('unreserve', this.$route.params.day)
      } else {
        this.reserved = true
        this.portions = 1
        this.$emit('reserve', this.$route.params.day)
        // setTimeout(() => this.$router.push('/para-llevar/calendar'), 250)
      }
    },
    lessPortions () {
      this.portions -= 1
      if (this.portions > 0) {
        this.$emit('reserve', this.$route.params.day, this.portions)
      } else {
        this.reserved = false
        this.$emit('unreserve', this.$route.params.day)
      }
    },
    morePortions () {
      this.portions += 1
      this.reserved = true
      this.$emit('reserve', this.$route.params.day, this.portions)
    }
  }
}
</script>

<style>
</style>
