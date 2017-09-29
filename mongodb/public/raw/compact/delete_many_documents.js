db.collection('standards').deleteMany({title: /^M/}, function(err, result) {
  if (err) return console.log('FAILED TO DELETE DOCUMENTS');

  console.log(`${result.result.n} number of document(s) deleted`);

  db.close();
});
