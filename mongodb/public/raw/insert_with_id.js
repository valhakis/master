MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var customer = {
    _id: 1,
    name: 'Donald Trump',
  };
  db.collection('customers').insertOne(customer, function(err, response) {
    if (err) {
      return console.log(err);
    }
    console.log(response);
    db.close();
  });
});
