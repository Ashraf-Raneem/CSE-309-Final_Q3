var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser')
//var mongo = require('mongodb')
var mongoose = require('mongoose')

var db, uri = "mongodb+srv://Ashraf:daredevils@cluster0-h5imv.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri, 
    {useNewUrlParser:true, useUnifiedTopology: true })
mongoose.connection.on('error', function(err){
    console.log('Could not connect to MongoDB')
})


app.use(bodyParser.urlencoded({extended:true}))
require('./routes/article.routes')(app)
/*
let articles = []


app.get('/', function(request, response){
    response.sendFile(__dirname+'/views/index.html')
})

app.get('/second', function(request, response){
    response.sendFile(__dirname+'/views/second.html')
})


*/
server.listen(3000, 'localhost', function(){
    console.log('Server running');
});
