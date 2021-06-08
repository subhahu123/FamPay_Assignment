var express = require('express')
var apiRouter = express() ;
const dao = require('../services/dao') ;



apiRouter.get('/search', function (req, res) {
	const queryParams = req.query ;
	console.log(queryParams) ;
  	res.send('Search Youtube Videos') ;
})


apiRouter.get('/videos', async function (req, res) {
	const queryParams = req.query ;
	console.log(queryParams) ;
	const data = await dao.getAllVideos(queryParams.offset, queryParams.limit) ;
  	res.json(data) ;
})


module.exports = apiRouter ;