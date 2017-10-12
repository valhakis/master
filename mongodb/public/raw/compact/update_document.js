db.collection('standards').updateOne({ title: 'BRILLIANT TITLE' }, { title: 'GOOD TITLE' }, function(err, result) {
  if (err) return console.log('FAILED TO UPDATE DOCUMENT');

  console.log('DOCUMENT UPDATED');

  db.close();
});
