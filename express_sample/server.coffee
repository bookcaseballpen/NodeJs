express = require 'express'

server = -> 
  app = express()
  app.get '/',(req,res)->
    res.send 'Hello World!'

  app.get '/user/:user',(req,res)->
    res.send 'Page for user ' + req.params.user + ' with option ' + req.query.option

  return app
module.exports = server