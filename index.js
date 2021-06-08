var express = require('express')
var config = require('config') ;
var fetchVideos = require('./fetchVideos') ;

var app = express() ;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

var apiRouter = require('./routes/apiRouter.js') ;

// setInterval(fetchVideos, 10*1000); 
// then call every 10 seconds

app.use('/api', apiRouter) ;



app.listen(config.get('port'), (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${config.get('port')}`)
})
