db.collection('standards').find({}).toArray(function(err, result) {
  if (err) return console.log('FAILED TO FIND ALL DOCUMENTS');

  console.log(result);

  db.close();
});
