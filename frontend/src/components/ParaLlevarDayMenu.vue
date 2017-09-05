<template>
	<section id="para-llevar-day">
		<article>
			<header>
				<h2>{{ $route.params.day }}</h2>
			</header>
			<ol>
				<li v-for="item in items">{{ item }}</li>
			</ol>
		</article>
	</section>
</template>

<script>

export default {
  name: 'para-llevar-day-menu',
  computed: {
    items () {
      return ['concha en salsa verde', 'penne pasta', 'pene de búfalo', 'flan']
    }
  }
}
</script>

<style>
</style>
