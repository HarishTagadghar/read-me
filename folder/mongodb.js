// crud 

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

// ID 
let id = new ObjectID;
console.log(id.getTimestamp());

// monodb url
const connectionURL = 'mongodb://127.0.0.1:27017'
// database name
const databaseName = 'task-manager'

// connecting the database
MongoClient.connect(connectionURL, { useNewUrlParser: true , useUnifiedTopology: true} , (error,client) =>{
    if(error) {
        return console.log('unable to connect to database!');
        
    }
// creating a database by name of task-manager stored in a variable databaseName
const db = client.db(databaseName)

// insertinf data to the database task-manager and the collection name of database task-manager is users
db.collection('users').insertMany([{
    name:'harish',
    age:19
},{
    name:'nitesh',
    age:20
} ], (error,result) => {
    if(error){
        return console.log('cannot insert users');
    }
    console.log(result.ops);
    
})

// finding single feald of the collection users
db.collection('users').findOne({age:20} , (error,user) => {
    if(error){
        return console.log('cannot fine the user');
    }
    console.log(user);
    
});

// finding multiple fealds of the collection users
// by default the find method returns a cursor (which has multipal methods you can find it on monodb api page cound is one of those method) so if we want the data we shoud convert it to a array by using toarray funcion
db.collection('users').find({age:19}).toArray((error,users) =>{
    console.log(users);
    
})

// finding the number of feald which has the property of age=19 
 db.collection('users').find({age:19}).count( (error,count) => {
     console.log(count);
     
 })

// updating a feald of collection

db.collection('users').updateOne({
    _id: new ObjectID("5e87095b8508982ba844c59b")
},{
    $set: {
        name: 'rahul'
    },
    $inc: {
        age: 2
    }
}).then((result) =>{
    console.log(result);
    
}).catch((error)=> {
    console.log(error);
    
});// by default updateone or any other method returns a promis so i have used promise method instaid of callback method



//  update many feald of collection 
db.collection('users').updateMany({
    name:'harish'
},{
    $set: {
        name:'pawan'
    }

},(error,result) => {
    if(error){
      return  console.log(error);
    }
    console.log(result);
    
}) //

// delete one
db.collection('users').deleteOne({
    name:'nitesh'
}).then((resolve)=>{
    console.log(resolve);
    
}).catch((reject)=>{
    console.log(reject);
    
});

// delte many

db.collection('users').deleteMany({
    name:'pawan'
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
    
})
});