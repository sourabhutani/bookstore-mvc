var express = require('express');
// var app = express();
var bodyParser = require('body-parser');

// Mongo connection
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1/bookstore');

var app=module.exports=express();
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());


routes=require('./routes/routes');
app.use('/',routes);

app.listen(3000);
console.log('Running on port 3000..');