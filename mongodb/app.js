var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://localhost:27017/movies';

MongoClient.connect(url, function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    var c = [];
    c = db.collection('movies').find({}).toArray();    
    // Declare success
    console.log("Called find()");
});


