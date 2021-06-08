<template>
  <div class="v-for">
    <ul class="ul">
      <li v-for="(row, index) in list" :key="row">{{ row }}</li>
    </ul>
    <button v-on:click="reverse">反转数组</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [1,2,3,4,5]
    }
  },
  methods: {
    reverse (){
      this.list.reverse()
    }
  },
  mounted(){
    const a = 1
    a = 2
  }
}
</script>


<style>
ul li:first-child{
  color: red;
}
</style>
