<template>
  <ul>
    <li v-for='item in elements' :key='item'>{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: ['elements']
}
</script>

<style scoped>

</style>
