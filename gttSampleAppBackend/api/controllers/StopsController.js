/**
 * StopsController
 *
 * @description :: Server-side logic for managing stops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	all: function (req, res) {
        StopsService.all({}, function(data){
            var stops = data.stops;
            if ( req.query.page ) {
                var pageSize = isNaN(req.query.pageSize) ? 10:+req.query.pageSize;
                var start = pageSize * (+req.query.page - 1);
                var end = start + pageSize;
                stops = data.stops.slice(start, end); 
            }
            var ret = {
                data: stops,
                total: data.stops.length
            };
            return res.json(ret);
        });
    },
};

