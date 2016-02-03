status = require 'http-status'
server = require './server'
server().listen 3000
console.log "Server is running on port 3000"