db.collection('standards').updateMany({ title: /^L/ }, { $set: {title: 'TITLE STARTS WITH S'} }, function(err, result) {
  if (err) return console.log('FAILED TO UPDATE MANY DOCUMENTS');

  console.log(`${result.result.nModified} DOCUMENT(S) UPDATED`);

  db.close();
});
