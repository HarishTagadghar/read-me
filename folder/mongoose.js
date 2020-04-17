// requiring mongoose basically mongoose use mongodb behind the scene
const mongoose = require('mongoose');

// connecting  database with name task-manager-api defined in url 
mongoose.connect('mongodb://localhost:27017/task-manager-api', { useNewUrlParser:true ,useCreateIndex:true ,useUnifiedTopology: true})


    
    


// using the model constructor to create a collection 

// saving the collection with promise
