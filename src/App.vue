<template>
  <div class="p-14">
    <router-link class="flex justify-center text-4xl text-yellow-700" to="/">Home</router-link>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
