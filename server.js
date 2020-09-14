const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose connection
mongoose.connect("mongodb://localhost/schedcheck_db");

// Parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample express
app.get('/', function(req, res){
  res.send("SchedCheck server running.");
});

// Run server
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
