<template>
       <teleport to='body'>
            <div
            v-if="modelValue"
            class="modal"
            >
                <!-- <h3><slot name="title"></slot></h3> -->
                <h3>{{title}}</h3>
                <slot />
                <button @click="handleButtonClick">Hide Modal</button>
                <p>
                    The username is {{userData.username}}
                </p>
            </div>
        </teleport>
</template>

<script setup>
/**
 * imports
 */
 import {inject} from 'vue'

/**
 * Props
 */
 const props = defineProps({
    modelValue:{
        type: Boolean,
        default:false
    },
    title:{
        type: String,
        default: 'No title specified'
    }
 })

 /**
  * Emits
  */
  const emit = defineEmits(['update:modelValue'])
  const handleButtonClick = ()=>{
    emit('update:modelValue', false)
  }
 console.log(props.title)

 /**
  * user data
  */
  const userData = inject('userData')
</script>

<style scoped>

    .modal{
        /* width: 500px; */
        background-color: white;
        color: black;
        border-radius: 2px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .modal > h3, p, button{
        margin: 10px;
    }
    
    p{
        text-align: justify;
    }
</style>