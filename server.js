var express = require('express');
var app = express();
var router = express.Router();
var flickrService = require('./server/flickrService');
flickrService.getRecentFlickrPhotos(function () {
	router.get('/photos', function (req, res) {
	    var ip = req.headers['x-forwarded-for'] ||
	        req.connection.remoteAddress ||
	        req.socket.remoteAddress;
	    console.log("Got a client request from " + ip);
	    var photos = flickrService.recentPhotos;
	    res.json(photos);
	});

    app.use('/', express.static(__dirname + '/'));
    app.use('/api/v1', router);

    app.listen(3000);
    console.log("Server initialized");
});
