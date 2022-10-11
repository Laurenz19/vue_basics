<template>
       <teleport to='body'>
            <div
            v-if="modelValue"
            class="modal-dark"
            >
                <!-- <h3><slot name="title"></slot></h3> -->
                <h3>{{title}}</h3>
                <slot />
                <button @click="handleButtonClick">Hide Modal</button>
            </div>
        </teleport>
</template>

<script setup>

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
</script>

<style scoped>

    .modal-dark{
        /* width: 500px; */
        background-color: rgb(58, 58, 58);
        color: white;
        border-radius: 2px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .modal-dark > h3, p, button{
        margin: 10px;
    }
    
    p{
        text-align: justify;
    }
</style>