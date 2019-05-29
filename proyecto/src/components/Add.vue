<template>
  <div>
    <input type="text" v-model='current' @keyup.enter='addList()'>
  </div>
</template>

<script>
export default {
  name: 'Add',
  props: ['addList'],
  data () {
    return {
      current: null
    }
  },
  methods: {
    add () {
      this.list.push(this.current)
      this.current = null
    }
  }
}
</script>
