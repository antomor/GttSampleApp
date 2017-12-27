# gttsampleapp-frontend

> This project represents a frontend web application built with [Vue.js](https://vuejs.org/) that exploits a set of backend services.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Docker
1. `docker build -t gttsampleappfrontend .`
1. `docker run -p 9000:8080 gttsampleappfrontend`