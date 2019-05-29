<template>
  <div class="hello">
    <h1>Lista de la compra</h1>
    <add :addList='addList' />
    <list :elements='list'></list>
    <total :total='totalList'></total>
  </div>
</template>

<script>
import List from './List'
import Total from './Total'
import Add from './Add'

export default {
  name: 'HelloWorld',
  components: { List, Total, Add },
  data () {
    return {
      current: null,
      list: ['tomates', 'pepinos']
    }
  },
  computed: {
    totalList () {
      return this.list.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
