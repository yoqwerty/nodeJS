//CRUD operations

// installed mongodb library - allows mongoDB node.js driver to be installed, making it easier for 
// developers to work with MongoDB from inside a Node.

//FOR MORE INFO ABOUT CRUD OPS, LOOK FOR NODE.JS MONGODB DRIVER API
const { MongoClient, ObjectID } = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        console.log('Unable to connect to database');
        return;
    }
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     id, //in case u want to give ur own id
    //     name: 'Supreet Kaur Sandhu',
    //     age: 25
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result);
    //  })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Sarab',
    //         age: 12
    //     },
    //     {
    //         name: 'Harinder',
    //         age: 49
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Error while inserting');
    //     }
    //     console.log(result);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew card',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert tasks');
    //     }
    //     console.log(result);
    // })

    //FINDING BY ATTRIBUTES
    db.collection('users').findOne({
        name: 'Supreet'
    }, (error, res) => {
        if(error) {
            console.log('Unable to find');
        }
        console.log(res);
    })

    //FINDING BY ID
    db.collection('users').findOne({
       _id: new ObjectID('61884b2a481faa4579528808')
    }, (error, res) => {
        if(error) {
            console.log('Unable to find');
        }
        console.log(res);
    })

    //find ALL , it doesnt provide any callback unlike others, it returns pointer to array
    db.collection('users').find({
        age: 25
     }).toArray((error, users) => {
         console.log(users);
     })

    // to get only the count of matched results
     db.collection('users').find({
        age: 25
     }).count((error, count) => {
         console.log(count);
     })

    // u can either use callbacks as above or promises like down below
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('61884b2a481faa4579528808')
    //  }, {
    //      $set: {
    //          name: 'Supreet updated'
    //      }
    //  });

    // updatePromise.then((res) => {
    //     console.log(res);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('users').updateOne({
        _id: new ObjectID('61884b2a481faa4579528808')
     }, {
         $inc: {
            age: 1 //will increment it by 1
         }
     }).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })

    db.collection('users').deleteMany({
        age: 25
    }).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })
})