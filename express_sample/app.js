var express = require('express'),
    app = express(),
    con = require('consolidate');

app.engine('html',con.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
    res.render('hello',{'name':'Template'});
});

app.use(function(req,res){

    res.sendStatus(404);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});

