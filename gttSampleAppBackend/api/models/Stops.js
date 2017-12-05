/**
 * Stops.js
 *
 * @description :: This model represent a single stop
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    placeName: {
      type: 'string',
      required: false
    },
    location: {
      type: 'string',
      required: false
    },
    lines: {
      type: 'longtext',
      required: false
    },
    type: {
      type: 'string',
      required: false
    },
    lat: {
      type: 'string',
      required: false
    },
    lng: {
      type: 'string',
      required: false
    }
  }
};
