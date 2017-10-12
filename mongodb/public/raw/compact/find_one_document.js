db.collection('standards').findOne({}, function(err, result) {
  if (err) return console.log('FAILED TO FIND DOCUMENT');

  console.log(result.title);

  db.close();
});
