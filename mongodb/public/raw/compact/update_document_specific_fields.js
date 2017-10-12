db.collection('standards').updateOne({ title: 'BRILLIANT TITLE' }, { $set: {title: 'GOOD TITLE'} }, function(err, result) {
  if (err) return console.log('FAILED TO UPDATE TITLE OF THE DOCUMENT');

  console.log('DOCUMENT TITLE UPDATED');

  db.close();
});
