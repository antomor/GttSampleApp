<template>
  <div class="stops-map">
    <div class="text-center my-3"> 
      <h1>{{ title }}</h1>
      <div class="row">
        <div class="col-md-4">
          <b-pagination size="md" :total-rows="totalStops" v-model="currentPage" :per-page="pageSize">
          </b-pagination>
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
        <div class="col-md-8">
          <gmap-map :center="center" :zoom="zoom" style="width: 100%; height: 500px">
            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
              {{infoContent}}
            </gmap-info-window>
            <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
          </gmap-map>
        </div>
      </div>      
    </div>
  </div>    
</template>

<script>
import Vue from 'vue'
import StopsList from '@/components/StopsList'

const StopsMap = {
  name: 'Stops',

  created () {
    this.getStops()
  },

  data () {
    return {
      title: 'Stops on Map',
      currentPage: 1,
      stops: null,
      totalStops: 0,
      pageSize: 5,
      center: {
        lat: 45.062885,
        lng: 7.679006
      },
      zoom: 12,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: null
    }
  },

  watch: {
    currentPage: function () {
      this.getStops()
    },
    $route: 'getStops'
  },

  methods: {
    getStops: function () {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
      var baseAddress = process.env.api.serverHost + ':' + process.env.api.serverPort
      const stopsUrl =
        baseAddress + '/api/stops/?page=' +
        this.currentPage +
        '&pageSize=' +
        this.pageSize
      this.$http.get(stopsUrl).then(
        response => {
          // get body data
          this.stops = response.body.data
          this.totalStops = response.body.total
          this.getMarkers(this.stops)
        },
        response => {
          // error callback
        }
      )
    },
    getMarkers: function (stops) {
      if (stops && stops.length > 0) {
        var self = this
        var markers = this._.map(stops, function (n) {
          return {
            position: {
              lat: self._.toNumber(n.lat),
              lng: self._.toNumber(n.lng)
            },
            infoText: n.name
          }
        })
        console.log(markers)
        this.markers = markers
      }
    },
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    }
  },
  components: {
    StopsList
  }
}

export default StopsMap
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
