// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places'// This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.http.interceptors.push((request, next) => {
  if (request.url !== '/api/auth/login') {
    let token = window.localStorage.getItem('token')
    request.headers.set('token', token)
  }

  next(response => {
    if ((response.status === 404) || (response.status === 504)) {
      router.push({
        name: 'Home'
      })
    }

    if (response.status === 403) {
      router.push({
        name: 'Login'
      })
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
