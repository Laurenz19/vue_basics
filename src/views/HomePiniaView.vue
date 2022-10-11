<template>
  <div class="home">
   <h1>{{appTitle}}</h1>
   <h3> {{counter.title}}:</h3>
   <div class="counter">
      <button @click="counter.decreaseCounter(1)">-</button>
      <span>{{counter.count}}</span>
      <button @click="counter.increaseCounter(1)">+</button>
   </div>
   <div>
   The counter is {{counter.oddOrEven}}
   </div>

   <div class="edit">
    <h3>Edit counter title</h3>
    <input
      v-model="counter.title"
      v-autofocus
      type="text"
    >
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
  import {ref} from 'vue'
  import {useCounterStore} from '@/stores/counter'
  import {vAutofocus} from '@/directives/vAutofocus'
  

/**
 * App Title
 */
  const appTitle = ref("My OK app counter")

/**
 * Counter
 */
 const counter = useCounterStore()

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
