<template>
  <div class="row justify-content-md-center">
    <div class="col-6">
      <b-form-fieldset description="name" label="name" :label-size="1">
        <b-form-input v-model="name"></b-form-input>
      </b-form-fieldset>
      <b-form-fieldset description="password" label="password" :label-size="1">
        <b-form-input v-model="password" type="password"></b-form-input>
      </b-form-fieldset>
      <b-button variant="outline-success" size="sm" @click="login">Login</b-button>
    </div>
    <div class="col-6">
      <figure class="figure">
      <pre>
        [
          {
            name: 'Joe',
            password: 'toasty'
          }, {
            name: 'Anna',
            password: 'sunflower'
          }, {
            name: 'Tom',
            password: 'jerry'
          }
        ]
      </pre>
        <figcaption class="figure-caption"> Default users - new ones can be created using the url /api/auth/register (no views available) </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login',
      name: null,
      password: null
    }
  },

  methods: {
    login () {
      var baseAddress = process.env.api.serverHost + ':' + process.env.api.serverPort
      var url = baseAddress + '/api/auth/login/'
      // console.log(url)
      this.$http.post(url, {
        name: this.name,
        password: this.password
      })
      .then(
        response => {
          // get body data
          if (response.body) {
            let token = response.body.token
            let cookie = response.body.cookie
            window.localStorage.setItem('token', token)
            this.setCookie('user', cookie, 3600 * 24 * 7)

            // Success message
            this.$router.push({
              name: 'StopsMap'
            })

            this.departures = this._.orderBy(this._.filter(response.body.data, function (elem) {
              return elem.hour !== ''
            }), 'hour')
          }
        },
        response => {
          // error callback
        }
      )
    },
    /**
     * @param {*} name
     * @param {*} value
     * @param {*} seconds
     * @see {@url https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie#answer-33518823}
     */
    setCookie (name, value, seconds) {
      const expires = seconds ? '; expires=' + new Date(new Date().getTime() + seconds * 1000).toGMTString() : ''
      document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
    }
  }
}
</script>