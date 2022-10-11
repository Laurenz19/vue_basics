<template>
  <div class="home">
   <h1 ref="appTitleRef">{{appTitle}}</h1>
   <h3> {{counterData.title}} :</h3>
   <div class="counter">
      <button @click="decreaseCounter(1)">-</button>
      <span>{{counterData.count}}</span>
      <button @click="increaseCounter(1)">+</button>
   </div>
   <div>
   The counter is {{oddOrEven}}
   </div>

   <div class="edit">
    <h3>Edit counter title</h3>
    <input type="text" v-model="counterData.title" v-autofocus>
   </div>
  </div>
</template>

/* 
  script setup pattern (Composition API)
*/
<script setup>
/**
 * imports
 */
  import {ref, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue'
  import {vAutofocus} from '@/directives/vAutofocus'
  import { useCounter } from '@/use/useCounter'
  
/**
 * Counter
 */
 const {counterData, increaseCounter, decreaseCounter, oddOrEven} = useCounter()
  

/**
 * App Title
 */
  const appTitle = ref("My OK app counter")
  const appTitleRef = ref(null)

  onMounted(()=>{
    console.log(appTitleRef.value.offsetWidth)
  })


/* Lifecycle hooks */

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

/* 
  Directives
  We can also create our own directives
*/

// const vAutofocus = {
//   mounted:(el)=>{
//     el.focus()
//   }
// } // will be converted into v-autofocus in the template
</script>

<style>

  .home{
    text-align: center;
  }

  .counter{
    text-align: center;
    margin: 10px;
  }

  button, span{
    margin: 5px;
  }

  button{
    cursor: pointer;
  }
</style>
