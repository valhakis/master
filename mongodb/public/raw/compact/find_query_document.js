db.collection('standards').find({ title: 'MY FIRST TITLE' }).toArray(function(err, result) {
  if (err) return console.log('FAILED TO FIND DOCUMENTS');

  console.log(result);

  db.close();
});