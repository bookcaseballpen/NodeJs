express = require 'express'
app = express()
app.get('/',(req,res)->res.send("hello world"))
server = app.listen(3000,->
  console.log("Server is running on port 3000")
  "hello"
) 


