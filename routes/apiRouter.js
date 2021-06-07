var apiRouter = express()


apiRouter.get('/search', function (req, res) {
  res.send('Search Youtube Videos') ;
})


module.exports = apiRouter ;