import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore(/*The ID*/'counter', ()=>{
  /**
   * States
   */
    const count = ref(0)
    const title = ref('Counter Title from Pinia')

   /**
    * Actions
    * Access the states and modify them
    */
    const increaseCounter = (amount)=>{
      count.value+=amount
    }

    const decreaseCounter = (amount)=>{
      count.value-=amount
    }

    /**
     * Getters
     * return a value that use the state
     * only change when the state are updated
     */
    const oddOrEven = computed(()=>{
      if(count.value % 2 == 0) return 'even'
      return 'odd'
    })

  return {
    count, title, increaseCounter, decreaseCounter, oddOrEven
  }
})
