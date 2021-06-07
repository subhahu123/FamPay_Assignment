var express = require('express')
var apiRouter = express() ;


apiRouter.get('/search', function (req, res) {
	const queryParams = req.query ;
	console.log(queryParams) ;
  	res.send('Search Youtube Videos') ;
})


apiRouter.get('/videos', function (req, res) {
	const queryParams = req.query ;
	console.log(queryParams) ;
  	res.send('Youtube Videos List') ;
})


module.exports = apiRouter ;