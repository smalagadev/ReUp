const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose connection


// Sample express
app.get('/', function(req, res){
  res.send("Wilkommen");
});

// Run server
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
