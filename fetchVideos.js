const axios = require('axios') ;
const config = require('config') ;
const dao = require('./services/dao') ;


const saveVideoDetails = async (video) => {
	console.log(video) ;
	// const {} = video ;
	await dao.saveVideo('1234', 'test1', 'a fampay assignment', 'today') ;
	// console.log(dao.saveVideo('1234', 'test1', 'a fampay assignment', 'today')) ;
	await dao.getVideos() ;

}

const getParamsString = (params) => {
	paramsString = "" ;
	for(param in params) {
		paramsString += "&" + param + "=" + params[param] ;
	}
	// return paramsString.substr(1) ;
	return paramsString ;
}

const fetchVideos = async (query) => {
	params = {
		"part": "snippet",
		"q": query
	}
	let url = config.get('api').videos + "?key=" + config.get('apiKeys')[0] + getParamsString(params) ;

	const getVideos = await axios({
    	url,
    	method: 'GET'
  	})

	// console.log(getVideos.data) ;
	for(var i = 0 ; i < getVideos.data.items.length ; i++) {
		const video = getVideos.data.items[i] ;
		await saveVideoDetails(video) ;
	}
}

fetchVideos("tanmay bhatt") ;

module.exports = fetchVideos ;