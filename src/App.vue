<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/task">Task</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>
<style scoped>
header {
  width: 80%;
}

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
  display: flex;
  column-gap: 16px;
}

</style>
