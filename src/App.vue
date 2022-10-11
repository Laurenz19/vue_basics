
<template>
  <div class="user-data">
   {{userData.name}} @{{userData.username}}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/home">Home Copy</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Post</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
  /**
   * imports
   */
   import {reactive, provide} from 'vue'
   import { RouterLink, RouterView } from 'vue-router'

   const userData = reactive({
    name:'SAMBANY',
    username: 'LaurenzioSambany'
   })

   provide('userData', userData)

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data{
  position: absolute;
  right: 0;
  top:0;
  padding: 2px 5px;
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
