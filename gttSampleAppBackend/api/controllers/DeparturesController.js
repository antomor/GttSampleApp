/**
 * DeparturesController
 *
 * @description :: Server-side logic for managing departures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  byStop: function (req, res) {
    let stopId = req.params.id;
    StopsService.departures({
      stop: stopId
    }, function (data) {
        var ret = {
            data: data
        };
      return res.json(ret);
    });
  }
};
