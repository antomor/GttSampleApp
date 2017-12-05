<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Functions</h2>
    <ul>
      <li><a href="#/stops" >Get the stops list</a></li>
      <li><a href="#/stops/map" >View all the stops in a map</a></li>
      <li><a href="#/stops/740/departures">Get the stop departures real-time</a></li>
      <br>
    </ul>
    <h2>Tools used</h2>
    <ul>
      <li><a href="http://vuejs.org/" target="_blank">Vue.js for the front-end part</a></li>
      <li><a href="https://bootstrap-vue.js.org" target="_blank">Bootstrap-vue for the presentation layer in front-end</a></li>
      <li><a href="https://sailsjs.com/" target="_blank">Sails.js for the back-end part, as MVC framework</a></li>
      <li><a href="https://www.sqlite.org/" target="_blank">SQLite as database</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Gtt Sample App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
