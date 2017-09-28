var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mongodb';

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('FAILED TO CONNECT TO MONGODB');
    return;
  }
  var customers = [ 
    { name: 'Viktor Vunle', address: 'North Highway 33' },
    { name: 'William Valhakis', address: 'Mountain Town 4' },
    { name: 'Susan Sound', address: 'Heaven Streen 25' },
    { name: 'Chuck Norris', address: 'South Sideway 528' },
  ];
  db.collection('customers').insertMany(customer, function(err, res) {
    if (err) {
      console.log('FAILED TO INSERT CUSTOMERS');
    } else {
      console.log(`${res.insertedCount} CUSTOMERS INSERTED`);
    }
    db.close();
  });
});
