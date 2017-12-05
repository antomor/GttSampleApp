<template>
<div id="app">
  <app-navbar></app-navbar>
  <div id="main-content">    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'

export default {
  name: 'app',
  components: {
    AppNavbar
  }
}
</script>

<style>
#main-content {
  margin-top: 60px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
