<template>
  <div class="stops-list">
    <div class="text-center my-3"> 
      <h1>{{ title }}</h1>
      <div class="row">
        <div class="offset-md-4 col-md-4">
        <b-list-group>
          <b-list-group-item v-for="stop in stops" :key="stop.id" :to="{name: 'StopDepartures', params:{id:stop.id}}">
            <b-card :key="stop.id" :header="stop.name" class="mb-4" show-footer>
              <p class="card-text">{{ stop.location }} - {{ stop.placeName }}</p>
              <p class="card-text">Lines: {{ stop.lines }} </p>
              <small slot="footer" class="text-muted">
                <span class="float-left">Position: ({{ stop.lat }}; {{ stop.lng }})</span>
                <span class="float-right">{{ stop.type }}</span>
              </small>
            </b-card>
          </b-list-group-item>
        </b-list-group>
        </div>
      </div>
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <b-pagination size="md" :total-rows="totalStops" v-model="currentPage" :per-page="pageSize">
          </b-pagination>
          <br>
        </div>
      </div>
      
    </div>
  </div>    
</template>

<script>
const StopsList = {
  name: 'Stops',

  created () {
    this.getStops()
  },

  data () {
    return {
      title: 'Stops List',
      currentPage: 1,
      stops: null,
      totalStops: 0,
      pageSize: 5
    }
  },

  watch: {
    currentPage: function () {
      this.getStops()
    },
    '$route': 'getStops'
  },

  methods: {
    getStops: function () {
      var baseAddress = process.env.api.serverHost + ':' + process.env.api.serverPort
      const stopsUrl = baseAddress + '/api/stops/?page=' + this.currentPage + '&pageSize=' + this.pageSize
      this.$http.get(stopsUrl).then(
        response => {
          // get body data
          this.stops = response.body.data
          this.totalStops = response.body.total
        },
        response => {
          // error callback
        }
      )
    }
  }
}

export default StopsList
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
