const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose connection
// Port connection is 27017
mongoose.connect("mongodb://localhost/schedcheck_db");

//  Mongoose connection messages
mongoose.connection.once('open', function(){
  console.log('MongoDB connected');
}).on('error', function(error){
  console.log(`Connection Error: ${error}`);
});

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
