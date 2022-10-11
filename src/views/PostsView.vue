<template>
  <div class="posts">
    <h3> Posts </h3>
        <ul>
            <li v-for="post in posts" :key="post.id">
              <router-link :to="`/posts/${post.id}`">{{post.title}}</router-link>
            </li>
        </ul>
    <textarea v-autofocus/>
    <button
      :style=" oddOrEven == 'even'?{color:'grey'}:{}"
      @click="increaseCounter(1)"
      class="post-counter"
    >
      {{counterData.count}}
    </button>
  </div>
</template>

<script setup>
/**
 * imports
 */
import {ref} from 'vue'
import { vAutofocus } from '../directives/vAutofocus';
import { RouterLink } from 'vue-router';
import { useCounter } from '@/use/useCounter'

/**
 * Counter
 */
 const {counterData, increaseCounter, oddOrEven} = useCounter()

/**
 * Posts
 */
const posts = ref([
  {
    id:"id1",
    title:"Post 1"
  },
  {
    id:"id2",
    title:"Post 2"
  },
  {
    id:"id3",
    title:"Post 3"
  },
])
</script>

<style scoped>
  .post-counter{
    width: 100px;
    padding: 8px;
    font-size: 15px;
    display: block;
    background-color: rgb(47, 47, 47);
    color: hsla(160, 76%, 50%);
  }
</style>