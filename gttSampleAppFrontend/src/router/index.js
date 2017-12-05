import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import StopsList from '@/components/StopsList'
import StopDepartures from '@/components/StopDepartures'
import StopsMap from '@/components/StopsMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/stops',
      name: 'Stops',
      component: StopsList
    },
    {
      path: '/stops/map',
      name: 'StopsMap',
      component: StopsMap
    },
    {
      path: '/stops/:id/departures',
      name: 'StopDepartures',
      component: StopDepartures,
      props: true
    }
  ]
})
