<template>
    <div class="post-detail">
        <h3>This is a post page</h3>
        <p>Display the content of post with ID of {{$route.params.id}} here!</p>
        
        <button @click="showPostID()">Show Post ID</button>
        <button @click="backToHomeInThreeSecond()">Back To Home in 3s</button>
        <button @click="showFirstPost()">Show First Post</button>
        
        <div class="back"> <router-link to="/posts">&lt; Back</router-link></div>
    </div>
</template>

<script setup>
/**
 * imports
 */
import { RouterLink, useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const showPostID = ()=>{
    alert(`The ID of this post is: ${route.params.id}`)
}

const backToHomeInThreeSecond = ()=>{
    setTimeout(() => {
        router.push('/')
    }, 3000);
}

const showFirstPost = ()=>{
    router.push({
        name:"post_detail",
        params:{
            id:'id1'
        }
    })
}

</script>

<style scoped>
button{
    display: block;
    margin: 5px;
}
</style>