var express = require('express')
var apiRouter = express() ;
const dao = require('../services/dao') ;



apiRouter.get('/search', async function (req, res) {
	const queryParams = req.query ;
	console.log(queryParams) ;
	const data = await dao.searchVideos(queryParams.query) ;
  	res.json(data) ;
})


apiRouter.get('/videos', async function (req, res) {
	const queryParams = req.query ;
	console.log(queryParams) ;
	const data = await dao.getAllVideos(queryParams.offset, queryParams.limit) ;
  	res.json(data) ;
})


module.exports = apiRouter ;