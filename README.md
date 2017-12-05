# GttSampleApp
This is a sample web application that makes use of [Sails.js](https://sailsjs.com/) as backend and [Vue.js](https://vuejs.org/) as frontend.

## Project Scaffolding
Backend and frontend projects have been built using respectively:
- `sails new gttSampleAppBackend`
- `vue init webpack gttSampleAppFrontend`

In this configuration, the backend and the frontend project are completely independent to each other. There some "sails hook" that permits the replacement of default sails view (Ember.js) with Vue.js, but it will treated in a dedicated github project in future.

## Running the projects
1. Backend
    1. ´sails lift´ in backend project directory
2. Frontend
    1. ´cd´ to frontend project directory
    2. ´npm install´
    3. ´npm start´
