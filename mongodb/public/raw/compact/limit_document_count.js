db.collection('standards').find().limit(5).toArray(function(err, result) {
  if (err) return console.log('FUCK THE ERRORS');

  console.log(result);

  db.close();
});
