/**
 * This service has been used at the beginning for retrieving stops from db.
 * It actually reads all the stops, even if it could read only a part of them,
 * by using pagination parameters passed by frontend.
 */

var fs = require('fs');
var path = require('path');
var rp = require('request-promise');

/**
 * Get all the stops saved on db (file at the beginning)
 * @param {*} options 
 * @param {*} done 
 */
function allStops(options, done) {
  // let filename = path.resolve(
  //   __dirname,
  //   '../../.tmp/stops.json');
  // console.log(filename);
  // fs.readFile(filename, 'utf8', function (err, data) {
  //   if (err) throw err;
  //   var obj = JSON.parse(data);
  //   done(obj);
  // });
  Stops.find().exec(function (err, all) {
    var data = {
      stops: all
    }
    done(data);
  });
}

/**
 * Retrieve all the departures of a stop. 
 * It uses the http://gpa.madbob.org/ services.
 * 
 * @param {*} options 
 * @param {*} done 
 */
function departuresByStop(options, done) {
  var regularUri = 'http://www.5t.torino.it/ws2.1/rest/stops/' + options.stop + '/departures';
  var alteranativeUri = 'http://gpa.madbob.org/query.php?stop=' + options.stop;
  var requestOpt = {
    
    uri: alteranativeUri,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };
  rp(requestOpt)
    .then(function (body) {
      console.log('Departures: %d', body.length);
      done(body);
    })
    .catch(function (err) {
      done({
          error: err
      });
    });
}

module.exports = {
  all: allStops,
  departures: departuresByStop
}
