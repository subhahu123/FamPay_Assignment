var express = require('express')
var config = require('config') ;

var app = express() ;

var apiRouter = require('./routes/apiRouter.js') ;


app.use('/api', apiRouter) ;



app.listen(config.get('port'), (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${config.get('port')}`)
})
