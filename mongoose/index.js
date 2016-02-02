var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/meanapp");
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log("database connected");
});

var kittySchema = mongoose.Schema({
    name:String
});

var Kitten = mongoose.model('Kitten',kittySchema);
var silence = new Kitten({name:"Silencee"});
console.log(silence.name);
silence.save();
