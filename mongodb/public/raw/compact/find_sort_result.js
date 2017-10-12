db.collection('standards').find().sort({title: 1}).toArray(function(err, result) {
  if (err) return console.log('FAILED TO FIND / SORT DOCUMENTS');

  console.log(result);

  db.close();
});
