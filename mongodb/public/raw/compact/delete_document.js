db.collection('standards').deleteOne({title: 'NUMBER 2 STANDARD'}, function(err, result) {
  if (err) return console.log('FAILED TO DELETE A DOCUMENT');

  console.log('DOCUMENT HAS BEEN DELETED');

  db.close();
});
