var express = require('express');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/ColleteApi',{useMongoClient: true});

var app = express();

var Recepi = require('./Models/RecipeModel');

var port  = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var recepiRouter = require('./Routes/RecepiRoutes')(Recepi);

app.use('/api/Recepi',recepiRouter);

app.get('/',function(req,res){
    res.send('welcome to Collete Api');
});

app.listen(port,function(){
    console.log('Running on PORT ' + port);
  });