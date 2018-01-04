var express = require('express');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/ColleteApi', {useMongoClient: true});

var app = express();

var Recepi = require('./models/RecepiModel');

var port  = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var recepiRouter = require('./Routes/RecepiRoutes');

app.use('/api/Recepi',recepiRouter);

app.get('/',function(req,res){
    res.send('welcome to Collete Api');
});

app.listen(port,function(){
    console.log('Running on PORT ' + port);
  });