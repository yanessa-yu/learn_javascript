<template>
  <div class="module-1">
    <h1>{{ a }}</h1>
  </div>
  <div class="module-2">
    <h2>{{ a }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props){
    console.log(props);
    
    const a = ref(0)
    const setA = (val) =>{
      a.value = val
    }
    return {a, setA}
  },
  mounted(){
   this.setA(123)
  }
}
</script>

<style scoped>

</style>
