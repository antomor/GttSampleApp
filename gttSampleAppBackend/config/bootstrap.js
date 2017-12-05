/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var fs = require('fs');
var path = require('path');

const users = [{
  name: 'Joe',
  password: 'toasty'
}, {
  name: 'Anna',
  password: 'sunflower'
}, {
  name: 'Tom',
  password: 'jerry'
}]

/**
 * This variable is used for db initialization during application bootstrap.
 * By default they are set to false
 */
const dbInit = {
  user: false,
  stops: false
};

module.exports.bootstrap = function (cb) {

  // db users creations
  if (dbInit && dbInit.user) {
    users.forEach(user => {
      User
        .findOne({
          name: user.name
        })
        .exec((error, potentialUser) => {
          if (error) sails.log.error(error)

          if (!potentialUser) {
            User
              .create({
                name: user.name,
                password: user.password
              })
              .exec((error, user) => {
                sails.log.info('Created fixture user', user)
              })
          }
        })
    })
  }

  // db stops creations
  if (dbInit && dbInit.stops) {
    let filename = path.resolve(
      __dirname,
      '../data/stops.json');
    sails.log.info(filename);
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) throw err;
      var obj = JSON.parse(data);
      obj.stops.forEach(stop => {
        Stops
          .findOne({
            name: stop.name
          })
          .exec((error, potentialStop) => {
            if (error) sails.log.error(error)

            if (!potentialStop) {
              Stops
                .create({
                  id: stop.id,
                  name: stop.name,
                  placeName: stop.placeName,
                  location: stop.location,
                  type: stop.type,
                  lines: stop.lines,
                  lat: stop.lat,
                  lng: stop.lng
                })
                .exec((error, stop) => {
                  sails.log.info('Created fixture stop', stop)
                })
            }
          })
      });
    });
  }

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
