<template>
  <div class="quantity">
    <h4>{{ label }}: {{ quantity }}</h4>
    <div><button :disabled="quantity === 0" @click="less">-</button><button @click="more">+</button></div>
  </div>
</template>

<script>

export default {
  name: 'quantity',
  props: ['label', 'quantity'],
  methods: {
    less () {
      this.$emit('change', this.quantity - 1)
    },
    more () {
      this.$emit('change', this.quantity + 1)
    }
  }
}
</script>
