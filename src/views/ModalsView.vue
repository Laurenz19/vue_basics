<template>
    <div class="modals">
        <h3>Modals</h3>
        <div>
        <span>Show dark model</span> 
        <input
          v-model="showDarkModal"
          type="checkbox"
        >
        </div>
        <button @click="showModal = true">Show Modal</button>
       
       <component
         v-model="showModal"
         :is="showDarkModal ? ModalDark : Modal"
         title="This is a modal"
       >
            <!-- <template v-slot:title > This is a modal</template> -->
            <!-- <template #title> This is a Modal </template> -->
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem sint exercitationem, error eligendi ipsum laudantium nostrum ut quis, reiciendis, minima veniam maiores odit laboriosam fugiat? Debitis et quas accusantium nulla!</p>
        </component>
    </div>
</template>

<script setup>
/**
 * imports
 */
 import {ref} from 'vue'
 import Modal from '../components/Modal.vue'
 import ModalDark from '../components/ModalDark.vue';

 /**
  * Modal
  */
 const showModal = ref(false)
 const showDarkModal = ref(false)
</script>

