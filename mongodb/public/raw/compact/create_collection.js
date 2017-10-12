db.createCollection('standards', function(err, result) {
  if (err) return console.log('FAILED TO CREATE COLLECTION');

  console.log('COLLECTION CREATED');

  db.close();
});
