var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    _=require('lodash');

var app = express();

//add middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

app.use('/hello',function(req,res){
    res.send('Hello World');
});
app.use('/index',function(req,res){
    res.send('This is a index');

});
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open',function(){

    // Load the models.
    app.models = require('./models/index');
    // Load the routes.
    var routes = require('./routes');
    _.each(routes,function(controller,route){  // the controller is just to hold the
        app.use(route,controller(app,route));
    });
    console.log('Listening on port 3000...');
    app.listen(3000);
});
