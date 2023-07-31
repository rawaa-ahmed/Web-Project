<template>
  <div id="app">
    <NavBar />

  </div>
  <router-view/>
</template>

<script>
import NavBar from './components/NavigationBar.vue'



export default {
  name: 'App',
  
  components: {
    NavBar: NavBar,
}


  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
</style>
