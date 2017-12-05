<template>
  <div class="app-navbar">
    <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/" active>GTT Sample App</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#/stops" active>Stops List</b-nav-item>
        <b-nav-item href="#/stops/map" active>Stops on Map</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#/login">Login</b-dropdown-item>
          <b-dropdown-item-button @click="logout">Signout</b-dropdown-item-button>
        </b-nav-item-dropdown>
      </b-navbar-nav> 

    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    logout () {
      console.log('logout')
      window.localStorage.removeItem('token')
      this.$router.push({
        name: 'Home'
      })
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
