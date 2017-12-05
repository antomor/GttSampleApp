# gttSampleAppBackend

A [Sails](http://sailsjs.org) application which provides backend services used by a web app.

This application has been generated using `sails new gttSampleAppBackend` .

## Application start
1. `npm install`
2. `sails lift`

The application can be started with an initial set of data by changing the variable dbInit in `config/bootstrap.js` file.

## Notes
In order to let the services be callable by frontend app, cors has been enabled with any restriction on the origins.

**This behavior MUST be avoided in a real application for security reasons**.

- config/routes.js is used for configuring routes
- config/policies.js is used for managing services authentication
