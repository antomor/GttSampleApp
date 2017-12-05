# GttSampleApp
This is a sample web application that makes use of [Sails.js](https://sailsjs.com/) as backend and [Vue.js](https://vuejs.org/) as frontend.
---

## Project Scaffolding
Backend and frontend projects have been built using respectively:
- `sails new gttSampleAppBackend`
- `vue init webpack gttSampleAppFrontend`

In this configuration, the backend and the frontend project are completely independent to each other. There some "sails hook" that permits the replacement of default sails view (Ember.js) with Vue.js, but it will treated in a dedicated github project in future.
---

## Running the projects
1. Backend
    1. ´cd´ to backend project directory
    2. ´npm install´
    1. ´sails lift´
2. Frontend
    1. ´cd´ to frontend project directory
    2. ´npm install´
    3. ´npm start´
---

## Notes
Even if not directly exposed by a view within the frontend, the backend provides a url to be used for registering new user /api/auth/register

The UI/UX has not been designed very weel. It has been assumed that the application has a demo scope, a sort of proof of concept.

The frontend part has not been designed for mobile.

**No security measures have been adopted both on frontend and backend for a matter of time. A stronger security constraints MUST be adopted in a production environment (CSRF, https, etc...)**
---

## Open points
1. Tests should have been created, but for a matter of time, and for the purpose of the application, no tests have been developed. 
**A well developed application MUST include tests both on frontend and backend, including unit tests and e2e tests**

