<template>
  <p>Total compra: {{total}}</p>
</template>

<script>
export default {
  name: 'Total',
  props: [{
    total: {
      type: Number,
      required: true,
      default: 0
    }
  }]
}
</script>

<style scoped>

</style>
