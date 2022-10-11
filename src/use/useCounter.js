import {ref, reactive, computed, watch, nextTick} from 'vue'

export function useCounter(){
      const counterData = reactive({
        count:0,
        title:"The counter"
      })
    
      watch(()=> counterData.count, (newCount)=>{
        if(newCount == 20) alert("The counter reached the maximum value!")
      })
    
      // const increaseCounter = amount =>{
      //   counterData.count += amount
      //   nextTick(()=>{
      //     console.log("Fired when something changes in the dom!")
      //   })
      // }
      // the following function works exactly the same as the function commented bellow
    
      const increaseCounter = async (amount)=>{
        counterData.count += amount
        await nextTick()
        console.log("Fired when something changes in the dom!")
      }
    
      const decreaseCounter = amount =>{
        counterData.count -=amount
      }
    
      const oddOrEven = computed(()=>{
        if(counterData.count % 2 == 0 ) return 'even'
        return 'odd'
      })

      return{
        counterData, 
        increaseCounter, 
        decreaseCounter, 
        oddOrEven
      }

}