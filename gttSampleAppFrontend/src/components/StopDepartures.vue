<template>
  <div class="stop-departures">
    <h1>{{ title }}</h1>
    <h2>Stop {{ id }}</h2>
    <div class="row">
      <div class="offset-md-4 col-md-4">
      <b-list-group>
        <b-list-group-item v-for="(dep, index) in departures" :key="index">
          <p>Line:{{ dep.line }}</p> 
          <p>Time: {{ dep.hour }}</p>
          <p> (realtime: {{ dep.realtime }}) </p>
        </b-list-group-item>
      </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StopDepartures',
  props: ['id'],

  created () {
    this.getStopDepartures()
  },

  data () {
    return {
      title: 'Departures',
      departures: null
    }
  },

  watch: {
    $route: 'getStopDepartures'
  },

  methods: {
    getStopDepartures: function () {
      var url = 'http://localhost:1337/api/stops/' + this.id + '/departures'
      // console.log(url)
      this.$http.get(url).then(
        response => {
          // get body data
          if (response.body.data) {
            this.departures = this._.orderBy(this._.filter(response.body.data, function (elem) {
              return elem.hour !== ''
            }), 'hour')
          }
        },
        response => {
          // error callback
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
